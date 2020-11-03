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
          uuid: uuidKey('preset.f.root_template'),
          visualResourceID: '0a902841-1c5b-7acc-9620-91b284a65436',
          icon: '0a902841-1c5b-7acc-9620-91b284a65436-_(Icon_Tiefling_Female)',
          parent: '619e1ca1-2467-42a3-abb2-627e8ce527c3',
        },
      },
      {
        camera: 'TIF_M_Camera',
        uuid: uuidKey('preset.m.id'),
        gender: 'Male',
        rootTemplate: {
          uuid: uuidKey('preset.m.root_template'),
          visualResourceID: 'a178a41d-05c3-3bc8-4879-15d2effe3300',
          icon: 'a178a41d-05c3-3bc8-4879-15d2effe3300-_(Icon_Tiefling_Male)',
          parent: '6f881126-478f-43a4-ba02-c024cf03a212',
        },
      },
    ],
  };
};
