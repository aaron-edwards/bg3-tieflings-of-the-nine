import * as fs from 'fs';
import { resolve, dirname, basename } from 'path';

import handlebars, { HelperOptions } from 'handlebars';

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

async function run() {
  for await (const f of getFiles(src)) {
    console.log(f);
    const fileName = basename(f);
    const outputFileTemp =
      fileName === 'info.json.hbs' || fileName === 'README.md.hbs'
        ? f.replace(src, build)
        : fileName.startsWith('_')
        ? f.replace(src, buildMerged)
        : f.replace(src, buildMod);

    const outputFile = outputFileTemp.replace('.hbs', '');
    await mkdir(dirname(outputFile), { recursive: true });

    const template = handlebars.compile((await readFile(f)).toString());
    writeFile(outputFile, template(setUUIDs(data)));
  }
}

run().catch((e) => console.error(e));
