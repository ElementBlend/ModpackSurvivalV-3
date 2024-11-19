onEvent('item.tags', tag => {
    tag.add('itemfilters:check_nbt', [
        'astralsorcery:resonator',
        'astralsorcery:constellation_paper',
        'patchouli:guide_book'
    ])
    tag.add('thermal:augments', [                   //Because it's easier to do this with a Tag filter than to make a new OR filter every time a new augment comes otu
        'thermal:rf_coil_augment',
        'thermal:rf_coil_storage_augment',
        'thermal:rf_coil_xfer_augment',
        'thermal:fluid_tank_augment',
        'thermal:machine_speed_augment',
        'thermal:machine_output_augment',
        'thermal:machine_catalyst_augment',
        'thermal:machine_cycle_augment',
        'thermal:dynamo_output_augment',
        'thermal:dynamo_fuel_augment',
        'thermal:area_radius_augment',
        'thermal:potion_amplifier_augment',
        'thermal:potion_duration_augment',
        'thermal:xp_storage_augment',
        'thermal:item_filter_augment',
        'thermal:machine_efficiency_augment',
    ])

    tag.add('packingtape:te_whitelist',[
        'minecraft:spawner'
    ])
})

onEvent('block.tags', tag => {
    tag.add('packingtape:te_whitelist',[
        'minecraft:spawner'
    ])
})