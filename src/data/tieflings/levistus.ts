import colors from '../colors.json';
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
          'Ability(Constitution,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
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
  skinColors: [...colors.OTH.Aqua, ...colors.TIF.Storm].map((c) => c.uuid),
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
