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
  tieflings: [levistis],
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
