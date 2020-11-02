import { makeupColors, tattooColors } from './common';

type TieflingOptions = {
  name: string;
  description?: string;
  levels?: {
    level: number;
    boosts?: string;
    selectors?: string;
  }[];
  skinColors?: string[];
};

export default ({ name, description, levels, skinColors }: TieflingOptions) => {
  const keyPrefix = name.trim().toLowerCase();

  const uuidKey = (key: string) => `{{${keyPrefix}.${key}}}`;

  return {
    name,
    description: description || '<NoDescription>',
    uuid: uuidKey('id'),
    progressionTable: {
      uuid: uuidKey('progression.id'),
      table: levels?.map(({ level, boosts, selectors }) => ({
        uuid: uuidKey(`progression.${level}.id`),
        level,
        boosts: boosts || '',
        selectors: selectors || '',
      })),
    },
    tags: ['c3fd1fc3-2edf-4d17-935d-44ab92406df1'],
    tattooColors,
    makeupColors,
    skinColors: skinColors || [],
    presets: [
      {
        camera: 'TIF_F_Camera',
        uuid: uuidKey('preset.f.id'),
        gender: 'Female',
        rootTemplate: {
          uuid: 'cc71e73a-53eb-4f49-ab31-e80d5d5f1ef2',
        },
      },
      {
        camera: 'TIF_M_Camera',
        uuid: uuidKey('preset.m.id'),
        gender: 'Male',
        rootTemplate: {
          uuid: 'aadac54f-38c0-4486-b45f-01c30e2e9323',
        },
      },
    ],
  };
};
