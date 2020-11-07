import * as fs from 'fs';
import { resolve } from 'path';

import { v4 as uuid } from 'uuid';

import data from './data/data';
import oldUuids from './data/uuids.json';

const uuidsPath = resolve(__dirname, 'data', 'uuids.json');

const { writeFile } = fs.promises;

const uuidRegex = /{{(.*)}}/;

function* uuidKeys(data: any): Generator<string, null, unknown> {
  if (typeof data === 'string') {
    const result = uuidRegex.exec(data);
    if (result) {
      yield result[1];
    }
  } else if (typeof data === 'object') {
    for (const value of Object.values(data)) {
      yield* uuidKeys(value);
    }
  }
  return null;
}

async function run() {
  const uuids = { ...oldUuids } as any;
  for (const uuidKey of uuidKeys(data)) {
    uuids[uuidKey] = uuids[uuidKey] || uuid();
  }
  await writeFile(
    uuidsPath,
    JSON.stringify(uuids, Object.keys(uuids).sort(), 2)
  );
}

run();
