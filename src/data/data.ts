import colors from './colors.json';
import tiefling from './tiefling';
import levistis from './tieflings/levistus';

const mod = {
  author: 'aedwards',
  name: 'Tieflings of the nine',
  dir: 'TieflingsOfTheNine',
  description: 'Adds extra tiefling subraces',
  version: '1603608161',
  uuid: '{{mod}}',
};

const data = {
  mod,
  tieflings: [
    tiefling({
      name: 'Baalzebul',
      description:
        'The crumbling realm of Maladomini is ruled by Baalzebul, who excels at corrupting those whose minor sins can be transformed into acts of damnation. Tieflings linked to this archdevil can corrupt others both physically and psychically.',
      levels: [
        {
          level: 1,
          boosts:
            'Ability(Intelligence,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          // Thaumaturgy
          selectors:
            'AddSpells(5eada6b7-d9a2-4ef2-8872-0dce047e458c,,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          selectors:
            'AddSpells({{spelllist.ray_of_sickness}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...colors.OTH.Dryad, ...colors.ELF.Wood].map((c) => c.uuid),
    }),
    tiefling({
      name: 'Levistus',
      description:
        'Frozen Stygia is ruled by Levistus, an archdevil known for offering bargains to those who face an inescapable doom.',
      levels: [
        {
          level: 1,
          boosts:
            'Ability(Constitution,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          selectors:
            'AddSpells({{spelllist.ray_of_frost}},,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          selectors:
            'AddSpells({{spelllist.armor_of_agathys}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...colors.OTH.Aqua, ...colors.TIF.Storm].map((c) => c.uuid),
    }),
  ],
  spellLists: [
    {
      spells: 'Projectile_RayOfFrost',
      uuid: '{{spelllist.ray_of_frost}}',
    },
    {
      spells: 'Shout_ArmorOfAgathys',
      uuid: '{{spelllist.armor_of_agathys}}',
    },
  ],
};

export default data;
