import { makeupColors, tattooColors } from '../common';

export default {
  name: 'LevistusTeifling',
  displayName: 'Levistus Tiefling',
  description:
    'Frozen Stygia is ruled by Levistus, an archdevil known for offering bargains to those who face an inescapable doom.',
  uuid: '{{levistis.id}}',
  progressionTable: {
    uuid: '{{levistis.progression.id}}',
    table: [
      {
        uuid: '{{levistis.progression.1.id}}',
        level: 1,
        boosts:
          'Ability(Intelligence,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
        selectors:
          'AddSpells({{spelllist.ray_of_frost}},,Charisma,,AlwaysPrepared)',
      },
      {
        uuid: '{{levistis.progression.2.id}}',
        level: 3,
        boosts: '',
        selectors:
          'AddSpells({{spelllist.armor_of_agathys}},,Charisma,,AlwaysPrepared)',
      },
    ],
  },
  tags: ['c3fd1fc3-2edf-4d17-935d-44ab92406df1'],
  tattooColors,
  makeupColors,
  skinColors: [
    '0b5c0530-856d-4ad0-9f9f-f2b977dd90ed',
    '5340217e-f1ab-42ab-9598-bf6f4a254568',
    '49f9f241-c0fd-43f3-a24b-8a598ff0f184',
    '9a0dbef3-2bd0-48a6-bd0b-ae0e72fce174',
    '68101886-efe0-44de-b95a-ef6eab4da57a',
    '3b284d60-6ffa-4f12-a241-09a841628711',
    '1aaa5598-3f16-4497-b6b4-b4af66d6ec07',
    '41839704-896f-4b29-a49f-c1d34ecee3cc',
    'df7eeaf4-8d2e-4c49-8bdd-5ce16847de53',
    '3e80bdc4-4e83-4578-acc8-190b6e53b86d',
    '3131f1c6-7b0a-4bcb-b690-bd1a54943b75',
    'acd2eae4-132f-4db6-9faa-4f06fe80f024',
    'ae667c9f-4405-4d1b-b24d-37ae6bcd697d',
    'ebf8afb9-3ca1-4e35-aa43-135bf1a2aaec',
    'bb1ba359-6cfa-4b45-88fb-8248f6f182c5',
    'f4d62207-d421-44e6-8430-cd92ba8edc56',
  ],
  presets: [
    {
      camera: 'TIF_F_Camera',
      rootTemplate: 'aadac54f-38c0-4486-b45f-01c30e2e9323',
      uuid: '{{levistis.preset.f.id}}',
      gender: 1,
    },
    {
      camera: 'TIF_M_Camera',
      rootTemplate: 'cc71e73a-53eb-4f49-ab31-e80d5d5f1ef2',
      uuid: '{{levistis.preset.m.id}}',
      gender: 0,
    },
  ],
};
