# Tieflings of the Nine
Adds a total of 6 tiefling subraces sourced from Mordenkainen's Tomb of foes.


If you are looking for a mod to fix the vanilia tiefling subraces to bring them in line with their PnP versions, I would suggest [Tiefling Racials](https://www.nexusmods.com/baldursgate3/mods/39) by [Vaylentine](https://www.nexusmods.com/baldursgate3/users/98459743)

## Instalation
1. Place the included .pak file into \Documents\Larian Studios\Baldur's Gate 3\Mods\
2. Edit \Documents\Larian Studios\Baldur's Gate 3\PlayerProfiles\[Profile Name]\modsettings.lsx with the following changes

Add to the ModOrder (if you already have other mods installed, you can add just the attribute within the module)
```xml
    <node id="Module">
        <attribute id="UUID" type="FixedString" value="e9f4b3e9-2dd1-4c9b-9b0d-ff4b04999f80"/>
    </node>
```
Add to the Mods section (below the Gustav module)
```xml
    <node id="ModuleShortDesc">
        <attribute id="Folder" type="LSWString" value="TieflingsOfTheNine"/>
        <attribute id="MD5" type="LSString" value=""/>
        <attribute id="Name" type="FixedString" value="Tieflings of the nine"/>
        <attribute id="UUID" type="FixedString" value="e9f4b3e9-2dd1-4c9b-9b0d-ff4b04999f80"/>
        <attribute id="Version" type="int32" value="1604718399"/>
    </node>
```

## Tiefling Subraces
### Baalzebul
The crumbling realm of Maladomini is ruled by Baalzebul, who excels at corrupting those whose minor sins can be transformed into acts of damnation. Tieflings linked to this archdevil can corrupt others both physically and psychically.

**Traits**
- Base Racial Speed (9m)
- Intelligence + 1
- Charisma + 2
- (level 1) Thaumaturgy cantrip
- (level 3) Ray of Sickness once per long rest as a 2nd level spell (charisma)

### Dispater
The great city of Dis occupies most of Hell’s second layer. It is a place where secrets are uncovered and shared with the highest bidder, making tieflings tied to Dispater excellent spies and infiltrators.

**Traits**
- Base Racial Speed (9m)
- Dexterity + 1
- Charisma + 2
- (level 1) Thaumatury cantrip
- (level 3) Disguise self at will (charisma) -- changed from once per long rest

### Fierna
A master manipulator, Fierna grants tieflings tied to her forceful personalities.

**Traits**
- Base Racial Speed (9m)
- Wisdom + 1
- Charisma + 2
- (level 1) Friends cantrip
- (level 3) Charm person once per long rest as a 2nd level spell (charisma)

### Glasya
Glasya, Hell’s criminal mastermind, grants her tieflings magic that is useful for committing heists.

**Traits**
- Base Racial Speed (9m)
- Dexterity + 1
- Charisma + 2
- (level 1) Minor Illusion cantrip
- (level 3) Disguise self at will (charisma) -- changed from once per long rest

### Mammon
The great miser Mammon loves coins above all else. Tieflings tied to him excel at gathering and safeguarding wealth.

**Traits**
- Base Racial Speed (9m)
- Intelligence + 1
- Charisma + 2
- (level 1) Mage hand cantrip
- (level 3) Arms of Hadar once per long restas a 2nd level spell (charisma) -- replacement of Tenser's floating disc

### Levistus
Frozen Stygia is ruled by Levistus, an archdevil known for offering bargains to those who face an inescapable doom.

**Traits**
- Base Racial Speed (9m)
- Constitution + 1
- Charisma + 2
- (level 1) Ray of frost cantrip
- (level 3) Armor of Agathys once per long rest as a 2nd level spell (charisma)

## Changelog
### Version 1.0
- Initail release
- Adds Baalzebul, Dispater, Fierna, Glasya, Mammon & Levistus Tieflings
### Version 1.1
- Fixes issue where casting the spell provided at level 3 would use a spell slot
- Fixes issues were spells provided at level 3 would be the leve1 1 version of the spell rather than the level 2 version

## Known issues
- The Disguise self spell provided by Dispater & Glasya Tieflings at level 3 can be cased at will rather than once a long rest
    - I could not figure out a way to limit it but I don't think this is too unbalance/gamebreaking (especially knowing there is an invocation that allows you to cast this spell at will)
    - I will be unlikly to address this issue
- The Charm person spell provided by Fierna Tieflings at level 3 will only target a single target.
    - This seems to be a bug with the level 2 casting of this spell

## Future plans
- ~~Fix some issues with Larian's Tieflings~~
    - ~~Fix Larian's Asmodeus tiefling (it currenty does not add the 3rd level spell)~~
    - ~~Fix Larian's Zariel tiefling (it currently adds Jump rather than wraithful smite)~~
    - These have been addressed in another mod [Tiefling Racials](https://www.nexusmods.com/baldursgate3/mods/39) by [Vaylentine](https://www.nexusmods.com/baldursgate3/users/98459743)
- Possibly add some of the variant subraces found in Sword Coast Adventure Guide
