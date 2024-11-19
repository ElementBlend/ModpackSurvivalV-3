onEvent("jei.information", jei_info => {

    const tetraScavenge = [
        "tetra:magmatic_cell",
        "tetra:forged_bolt",
        "tetra:forged_beam",
        "tetra:forged_mesh",
        "tetra:quick_latch",
        "tetra:metal_scrap",
        "tetra:vent_plate",
        "tetra:combustion_chamber",
        "tetra:planar_stabilizer",
        "tetra:earthpiercer",
        "tetra:stonecutter"
    ]
    for (item of tetraScavenge) {
        jei_info.add(item, ["Acquired by scavenging in abandoned ruins."," ","See Tetra Manual for more information."])
    }
    
    const tetraPristine = [
        "tetra:pristine_lapis",
        "tetra:pristine_emerald",
        "tetra:pristine_diamond"
    ]
    for (item of tetraPristine) {
        jei_info.add(item, ["Has a chance of dropping from Geodes being smashed in the Workbench."])
    }

    const metamorphblocks = [
        "botania:metamorphic_forest_stone",
        "botania:metamorphic_planes_stone",
        "botania:metamorphic_mountain_stone",
        "botania:metamorphic_fungal_stone",
        "botania:metamorphic_swamp_stone",
        "botania:metamorphic_desert_stone",
        "botania:metamorphic_taiga_stone",
        "botania:metamorphic_mesa_stone",
        "botania:metamorphic_forest_cobblestone",
        "botania:metamorphic_planes_cobblestone",
        "botania:metamorphic_mountain_cobblestone",
        "botania:metamorphic_fungal_cobblestone",
        "botania:metamorphic_swamp_cobblestone",
        "botania:metamorphic_desert_cobblestone",
        "botania:metamorphic_taiga_cobblestone",
        "botania:metamorphic_mesa_cobblestone"
    ]
    for (item of metamorphblocks) {
        jei_info.add(item, ["Made using the Marimorphosis"])
    }

    jei_info.add("astralsorcery:stardust", ["Left-click a dropped Starmetal Ingot with a Starmetal Cutting Tool"])

    jei_info.add("refinedstorage:speed_upgrade", ["Makes devices faster.","Can be installed to:","• Importer","• Exporter","• Constructor","• Destructor","• Interface","• Crafter","• Disk Manipulator"])
    jei_info.add("refinedstorage:range_upgrade",["Increases the range of the Wireless Transmitter."])
    jei_info.add("refinedstorage:stack_upgrade",["Makes devices work in stacks instead of individual items.","Can be installed to:","• Importer","• Exporter","• Constructor (dropping)","• Interface","• Disk Manipulator"])
    jei_info.add("refinedstorage:crafting_upgrade",["Makes devices schedule a crafting task if the item is not available.","Can be installed to:","• Exporter","• Constructor"])
    jei_info.add("refinedstorage:regulator_upgrade",["Makes the Exporter stop outputting when the target inventory has the specified amount of the item.","For instance, an Exporter set to export 32 of an item will stop exporting when the inventory has 32 of that item."])
    jei_info.add("refinedstorage:fortune_1_upgrade",["Enchants the Destructor with Fortune 1."])
    jei_info.add("refinedstorage:fortune_2_upgrade",["Enchants the Destructor with Fortune 2."])
    jei_info.add("refinedstorage:fortune_3_upgrade",["Enchants the Destructor with Fortune 3."])
    jei_info.add("refinedstorage:silk_touch_upgrade",["Enchants the Destructor with Silk Touch."])
    jei_info.add("astralsorcery:rock_crystal",["Mined from Rock Crystal Ore"," ","Can also soak Rock Crystals in Liquid Starlight to upgrade them, or split into 2 smaller Crystals."])
    jei_info.add("astralsorcery:attuned_rock_crystal",["Mined from Rock Crystal Ore"," ","Can also soak Rock Crystals in Liquid Starlight to upgrade them, or split into 2 smaller Crystals."])
    jei_info.add("astralsorcery:celestial_crystal",["Soak some Stardust with a Rock Crystal in some Liquid Starlight to grow a Celestial Crystal Cluster."," ","Grow this with Starlight from either the night sky or a Collector Crystal."])
    jei_info.add("astralsorcery:attuned_celestial_crystal",["Soak some Stardust with a Rock Crystal in some Liquid Starlight to grow a Celestial Crystal Cluster."," ","Grow this with Starlight from either the night sky or a Collector Crystal."])
    jei_info.add("astralsorcery:infused_wood",["Soak logs in Liquid Starlight"])
    jei_info.add("archersparadox:blaze_arrow","Burns target and ignites a radius around it")
    jei_info.add("archersparadox:challenge_arrow","No damage, stacks \"Archer's Gambit\" effect. XP for maintaining hit streak. Distance matters!")
    jei_info.add("archersparadox:diamond_arrow","2x Damage, +1 Pierce, +1 Knockback")
    jei_info.add("archersparadox:prismarine_arrow","No water slowdown; reduced gravity in water")
    jei_info.add("archersparadox:quartz_arrow","1.25x Damage, +1 Knockback")
    jei_info.add("archersparadox:frost_arrow","Chills target and freezes area around it")
    jei_info.add("archersparadox:lightning_arrow","Calls down a lightning bolt, if it hits outside")
    jei_info.add("archersparadox:ender_arrow","Teleports player to location; or swaps places with the target")
    jei_info.add("archersparadox:explosive_arrow","Take a guess")
    jei_info.add("archersparadox:phantasmal_arrow","Flies through blocks, unlimited pierce, ignores gravity and armor. Glows.")
    jei_info.add("archersparadox:shulker_arrow","Homes in on a target; levitation status effect")
    jei_info.add("archersparadox:slime_arrow","Ricochets and has lots of knockback")
    jei_info.add("archersparadox:redstone_arrow","Generates a redstone signal in a large area for 10 seconds")
    jei_info.add("archersparadox:glowstone_arrow","Lights up an area for 10 seconds")
    jei_info.add("archersparadox:disruption_arrow","Creates a temporary area which teleports things away")
    jei_info.add("archersparadox:spore_arrow","Transforms Dirt and Grass into Mycelium in an area")
    jei_info.add("archersparadox:verdant_arrow","Transforms Dirt into Grass in an area. Also grows crops/plants.")
    jei_info.add("archersparadox:training_arrow","No damage, stacks a \"Hit Streak\" effect, for practice. Distance matters!")
})