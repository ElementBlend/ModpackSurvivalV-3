onEvent('jei.hide.items', jei => {

    jei.hide([
        '@titanium',                                        //Duplicate gears
        'cyclic:uncrafter',                                 //OP
        'ftbquests:barrier',                                //So you don't see it when you search for anvil in JEI
        'ftbquests:stage_barrier',                          //Same ^
        'absentbydesign:gate_nether_bricks',
        'quark:gunpowder_sack',
        'quark:charcoal_block',
        /quark:(apple|potato|carrot|beetroot)_crate/,
        /compressium:(stone|sand|gravel|netherrack|soulsand|snow|iron|gold|diamond|emerald|clay|netherite|dirt|coal|redsand|endstone|obsidian|lapis|quartz|honey|redstone|andesite|diorite|granite)_[2-8]/,         //JEI clutter
        /refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green||black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/, //Skipped red, because it looks nice and to show off that you can have multiple colors
        'simplyjetpacks:unit_cryotheum',
        'simplyjetpacks:unit_cryotheum_empty',
        'simplyjetpacks:unit_glowstone',
        'simplyjetpacks:unit_glowstone_empty',
        'simplyjetpacks:thruster_te1',
        'simplyjetpacks:thruster_te2',
        'simplyjetpacks:thruster_te3',
        'simplyjetpacks:thruster_te4',
        'simplyjetpacks:thruster_te5',
        'simplyjetpacks:armorplating_te1',
        'simplyjetpacks:armorplating_te2',
        'simplyjetpacks:armorplating_te3',
        'simplyjetpacks:armorplating_te4',
        'simplyjetpacks:jetpack_te1',
        'simplyjetpacks:jetpack_te2',
        'simplyjetpacks:jetpack_te3',
        'simplyjetpacks:jetpack_te4',
        'simplyjetpacks:jetpack_te5',
        'simplyjetpacks:jetpack_te1_armored',
        'simplyjetpacks:jetpack_te2_armored',
        'simplyjetpacks:jetpack_te3_armored',
        'simplyjetpacks:jetpack_te4_armored',
        '@ftblibrary'
    ])
})