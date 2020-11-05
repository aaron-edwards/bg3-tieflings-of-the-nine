import eyes from './eyes.json';
import hairColor from './hair-color.json';
import models from './models.json';
import skins from './skins.json';
import tiefling from './tiefling';

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
    // Asmodeus (fixed) { head: 0, hair: 0, horns: 0 }
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
      skinColors: [...skins.OTH.Dryad, ...skins.ELF.Wood],
      defaults: {
        eyes: eyes.DemonicYellowB,
        skin: skins.OTH.Dryad[1],
        hairColor: hairColor.HAIR_Color_BrownDrab_2,
      },
      female: {
        head: models.tiefling.Head.female[1],
        hair: models.tiefling.Hair.female[1],
        horns: models.tiefling.Horns.female[1],
      },
      male: {
        head: models.tiefling.Head.male[1],
        hair: models.tiefling.Hair.male[1],
        horns: models.tiefling.Horns.male[1],
      },
    }),
    tiefling({
      name: 'Dispater',
      description:
        'The great city of Dis occupies most of Hell’s second layer. It is a place where secrets are uncovered and shared with the highest bidder, making tieflings tied to Dispater excellent spies and infiltrators.',
      levels: [
        {
          level: 1,
          boosts:
            'Ability(Dexterity,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          selectors:
            'AddSpells({{spelllist.thaumaturgy}},,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          boosts:
            'Ability(Dexterity,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          selectors:
            'AddSpells({{spelllist.disguise_self}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...skins.UND.Ash, ...skins.UND.Amethyst],
      defaults: {
        eyes: eyes.DemonicBlackB,
        skin: skins.UND.Ash[7],
        hairColor: hairColor.HAIR_Color_BlackRaven,
      },
      female: {
        head: models.tiefling.Head.female[2],
        hair: models.tiefling.Hair.female[2],
        horns: models.tiefling.Horns.female[2],
      },
      male: {
        head: models.tiefling.Head.male[2],
        hair: models.tiefling.Hair.male[2],
        horns: models.tiefling.Horns.male[2],
      },
    }),
    tiefling({
      name: 'Fierna',
      description:
        'A master manipulator, Fierna grants tieflings tied to her forceful personalities.',
      levels: [
        {
          level: 1,
          boosts:
            'Ability(Wisdom,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          selectors:
            'AddSpells({{spelllist.friends}},,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          selectors:
            'AddSpells({{spelllist.charm_person}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...skins.OTH.Fey, ...skins.TIF.Chili],
      defaults: {
        eyes: eyes.DemonicYellowA,
        skin: skins.OTH.Fey[2],
        hairColor: hairColor.HAIR_Color_BlondeAsh_0,
      },
      female: {
        head: models.tiefling.Head.female[3],
        hair: models.tiefling.Hair.female[3],
        horns: models.tiefling.Horns.female[3],
      },
      male: {
        head: models.tiefling.Head.male[3],
        hair: models.tiefling.Hair.male[3],
        horns: models.tiefling.Horns.male[3],
      },
    }),
    tiefling({
      name: 'Glasya',
      description:
        'Glasya, Hell’s criminal mastermind, grants her tieflings magic that is useful for committing heists.',
      levels: [
        {
          level: 1,
          boosts:
            'Ability(Dexterity,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          selectors:
            'AddSpells({{spelllist.minor_illusion}},,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          selectors:
            'AddSpells({{spelllist.disguise_self}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...skins.TIF.Violet, ...skins.TIF.Azure],
      defaults: {
        eyes: eyes.DemonicGreenA,
        skin: skins.TIF.Violet[2],
        hairColor: hairColor.HAIR_Color_BrownAuburn_3,
      },
      female: {
        head: models.tiefling.Head.female[4],
        hair: models.tiefling.Hair.female[4],
        horns: models.tiefling.Horns.female[4],
      },
      male: {
        head: models.tiefling.Head.male[4],
        hair: models.tiefling.Hair.male[4],
        horns: models.tiefling.Horns.male[4],
      },
    }),

    tiefling({
      name: 'Mammon',
      description:
        'The great miser Mammon loves coins above all else. Tieflings tied to him excel at gathering and safeguarding wealth.',
      levels: [
        {
          level: 1,
          boosts:
            'Ability(Intelligence,1);Ability(Charisma,2);ActionResource(Movement,9,0)',
          selectors:
            'AddSpells({{spelllist.mage_hand}},,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          selectors:
            'AddSpells({{spelllist.arms_of_hadar}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...skins.GTY.Gold, ...skins.TIF.Sulfur],
      defaults: {
        eyes: eyes.DemonicYellowB,
        skin: skins.GTY.Gold[3],
        hairColor: hairColor.HAIR_Color_BlondeGold_1,
      },
      female: {
        head: models.tiefling.Head.female[1],
        hair: models.tiefling.Hair.female[5],
        horns: models.tiefling.Horns.female[5],
      },
      male: {
        head: models.tiefling.Head.male[1],
        hair: models.tiefling.Hair.male[5],
        horns: models.tiefling.Horns.male[5],
      },
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
            'AddSpells({{spelllist.mage_hand}},,Charisma,,AlwaysPrepared)',
        },
        {
          level: 3,
          selectors:
            'AddSpells({{spelllist.ray_of_frost}},,Charisma,,AlwaysPrepared)',
        },
      ],
      skinColors: [...skins.OTH.Aqua, ...skins.TIF.Storm],
      defaults: {
        eyes: eyes.DemonicWhiteC,
        skin: skins.OTH.Aqua[2],
        hairColor: hairColor.HAIR_Color_White_0,
      },
      female: {
        head: models.tiefling.Head.female[0],
        hair: models.tiefling.Hair.female[6],
        horns: models.tiefling.Horns.female[6],
      },
      male: {
        head: models.tiefling.Head.male[0],
        hair: models.tiefling.Hair.male[6],
        horns: models.tiefling.Horns.male[6],
      },
    }),
    // Zariel (fixed) { head: 2, hair: 7 }
    // Devi's Tounge { head: 3, hair: 8 }
    // Feral { head: 3, hair: 9 }
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
    {
      spells: 'Shout_DisguiseSelf',
      uuid: '{{spelllist.disguise_self}}',
    },
    {
      spells: 'Target_Friends',
      uuid: '{{spelllist.friends}}',
    },
    {
      spells: 'Target_CharmPerson',
      uuid: '{{spelllist.charm_person}}',
    },
    {
      spells: 'Target_MinorIllusion',
      uuid: '{{spelllist.minor_illusion}}',
    },
    {
      spells: 'Shout_ArmsOfHadar',
      uuid: '{{spelllist.arms_of_hadar}}',
    },
  ],
};

export default data;
