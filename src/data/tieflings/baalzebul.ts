import colors from '../colors.json';
import { makeupColors, tattooColors } from '../common';

export default {
  name: 'BaalzebulTiefling',
  displayName: 'Baalzebul Tiefling',
  description:
    'The crumbling realm of Maladomini is ruled by Baalzebul, who excels at corrupting those whose minor sins can be transformed into acts of damnation. Tieflings linked to this archdevil can corrupt others both physically and psychically.',
  uuid: '{{baalzebul.id}}',
  progressionTable: {
    uuid: '{{baalzebul.progression.id}}',
    table: [
      {
        uuid: '{{baalzebul.progression.1.id}}',
        level: 1,
        boosts:
          'Ability(Intelligence,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
        selectors:
          'AddSpells(5eada6b7-d9a2-4ef2-8872-0dce047e458c,,Charisma,,AlwaysPrepared)',
        // Thaumaturgy
      },
      {
        uuid: '{{baalzebul.progression.2.id}}',
        level: 3,
        boosts: '',
        selectors:
          'AddSpells({{spelllist.ray_of_sickness}},,Charisma,,AlwaysPrepared)',
      },
    ],
  },
  tags: ['c3fd1fc3-2edf-4d17-935d-44ab92406df1'],
  tattooColors,
  makeupColors,
  skinColors: [...colors.OTH.Dryad, ...colors.ELF.Wood].map((c) => c.uuid),
  presets: [
    {
      camera: 'TIF_F_Camera',
      rootTemplate: 'aadac54f-38c0-4486-b45f-01c30e2e9323',
      uuid: '{{baalzebul.preset.f.id}}',
      gender: 1,
    },
    {
      camera: 'TIF_M_Camera',
      rootTemplate: 'cc71e73a-53eb-4f49-ab31-e80d5d5f1ef2',
      uuid: '{{baalzebul.preset.m.id}}',
      gender: 0,
    },
  ],
};
