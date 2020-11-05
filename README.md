# Tieflings of the Nine
Adds a total of 6 tiefling subraces sourced from Mordenkainen's Tomb of foes.

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
        <attribute id="Version" type="int32" value="1604561498"/>
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
- (level 3) Ray of Sickness once per long rest (charisma)

### Dispater
The great city of Dis occupies most of Hell’s second layer. It is a place where secrets are uncovered and shared with the highest bidder, making tieflings tied to Dispater excellent spies and infiltrators.

**Traits**
- Base Racial Speed (9m)
- Dexterity + 1
- Charisma + 2
- (level 1) Thaumatury cantrip
- (level 3) Disguise self once per long rest (charisma)

### Fierna
A master manipulator, Fierna grants tieflings tied to her forceful personalities.

**Traits**
- Base Racial Speed (9m)
- Wisdom + 1
- Charisma + 2
- (level 1) Friends cantrip
- (level 3) Charm person once per long rest (charisma)

### Glasya
Glasya, Hell’s criminal mastermind, grants her tieflings magic that is useful for committing heists.

**Traits**
- Base Racial Speed (9m)
- Dexterity + 1
- Charisma + 2
- (level 1) Minor Illusion cantrip
- (level 3) Disguise self once per long rest (charisma)

### Mammon
The great miser Mammon loves coins above all else. Tieflings tied to him excel at gathering and safeguarding wealth.

**Traits**
- Base Racial Speed (9m)
- Intelligence + 1
- Charisma + 2
- (level 1) Mage hand cantrip
- (level 3) Arms of Hadar once per long rest (charisma) -- replacement of Tenser's floating disc

### Levistus
Frozen Stygia is ruled by Levistus, an archdevil known for offering bargains to those who face an inescapable doom.

**Traits**
- Base Racial Speed (9m)
- Constitution + 1
- Charisma + 2
- (level 1) Ray of frost cantrip
- (level 3) Armor of Agathys once per long rest (charisma)

## Future plans
- Fix Larian's Asmodeus tiefling (it currenty does not add the 3rd level spell)
- Fix Larian's Zariel tiefling (it currently adds Jump rather than wraithful smite)
- Possibly add some of the variant subraces found in Sword Coast Adventure Guide
