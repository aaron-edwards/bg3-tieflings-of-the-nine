import { makeupColors, tattooColors } from './common';

type TieflingOptions = {
  name: string;
  description?: string;
  levels?: {
    level: number;
    boosts?: string;
    selectors?: string;
  }[];
  skinColors?: { uuid: string }[];
  defaults: {
    skin: { material: string },
    eyes: { material: string },
    hairColor: { material: string },
  },
  female: {
    head: { resource: string }
  },
  male: {
    head: { resource: string }
  }
};

export default ({
  name,
  description,
  levels,
  skinColors,
  defaults,
  female,
  male
}: TieflingOptions) => {
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
    skinColors: skinColors?.map((s) => s.uuid) || [],
    defaults: {
      skin: defaults.skin.material,
      eyes: defaults.eyes.material,
      hairColor: defaults.hairColor.material
    },

    presets: {
      female: {
        camera: 'TIF_F_Camera',
        uuid: uuidKey('preset.f.id'),
        gender: 'Female',
        root: uuidKey('preset.f.root_template'),
        visualResourceID: uuidKey('preset.f.visual_ref'),
        icon: '0a902841-1c5b-7acc-9620-91b284a65436-_(Icon_Tiefling_Female)',
        parent: '619e1ca1-2467-42a3-abb2-627e8ce527c3',
        head: female.head.resource,
      },
      male: {
        camera: 'TIF_M_Camera',
        uuid: uuidKey('preset.m.id'),
        gender: 'Male',
        root: uuidKey('preset.m.root_template'),
        visualResourceID: uuidKey('preset.m.visual_ref'),
        icon: 'a178a41d-05c3-3bc8-4879-15d2effe3300-_(Icon_Tiefling_Male)',
        parent: '6f881126-478f-43a4-ba02-c024cf03a212',
        head: male.head.resource,
      },
    },
  };
};
