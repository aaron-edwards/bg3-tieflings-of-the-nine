import * as fs from 'fs';
import { resolve, dirname, basename } from 'path';

import Handlebars, { HelperOptions } from 'handlebars';

import data from './data/data';
import uuids from './data/uuids.json';

const { readdir, readFile, mkdir, writeFile } = fs.promises;

async function* getFiles(dir: string): AsyncGenerator<string, null, unknown> {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
  return null;
}

const src = resolve(__dirname, 'templates');
const build = resolve(__dirname, '..', 'build');
const buildMod = resolve(build, 'mod');
const buildMerged = resolve(build, 'merged');

const uuidRegex = /{{(.*)}}/;

function getUUID(str: string, key: string) {
  const value = (uuids as any)[key];
  if (value) {
    return str.replace(`{{${key}}}`, value);
  } else {
    throw Error(`No uuid generated for key ${key}`);
  }
}

function setUUIDs(data: any): {} {
  return Object.entries(data).reduce((acc, [k, v]) => {
    switch (typeof v) {
      case 'string':
        const uuidMatch = uuidRegex.exec(v);
        const value = uuidMatch ? getUUID(v, uuidMatch[1]) : v;
        return {
          ...acc,
          [k]: value,
        };
      case 'object': {
        return {
          ...acc,
          [k]: setUUIDs(v),
        };
      }
      default: {
        return {
          ...acc,
          [k]: v,
        };
      }
    }
  }, {});
}

function outputFileName(f: string) {
  const fileName = basename(f);
  if (fileName === 'info.json.hbs' || fileName === 'README.md.hbs')
    return f.replace(src, build).replace('.hbs', '');
  if (fileName.endsWith('.hbs')) {
    if (fileName.startsWith('_'))
      return f.replace(src, buildMerged).replace('.hbs', '');
    else return f.replace(src, buildMod).replace('.hbs', '');
  }
  return f.replace(src, buildMod);
}

async function run() {
  Handlebars.registerHelper('toUpperCase', function (value) {
    if (value) {
      return new Handlebars.SafeString(value.toUpperCase());
    } else {
      return '';
    }
  });

  for await (const f of getFiles(src)) {
    console.log(f);
    const outputFile = outputFileName(f);
    await mkdir(dirname(outputFile), { recursive: true });

    const template = Handlebars.compile((await readFile(f)).toString());
    writeFile(outputFile, template(setUUIDs(data)));
  }
}

run().catch((e) => console.error(e));
