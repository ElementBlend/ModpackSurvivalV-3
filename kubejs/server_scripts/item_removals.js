onEvent('item.tags', tag => {
    tag.remove('forge:gears', 'titanium:gold_gear')
    tag.remove('forge:gears', 'titanium:iron_gear')
    tag.remove('forge:gears', 'titanium:diamond_gear')
    tag.remove('forge:gears/gold', 'titanium:gold_gear')
    tag.remove('forge:gears/iron', 'titanium:iron_gear')
    tag.remove('forge:gears/diamond', 'titanium:diamond_gear')
})

events.listen('recipes', recipe => {
    recipe.remove({id:'industrialforegoing:gold_gear'})
    recipe.remove({id:'industrialforegoing:iron_gear'})
    recipe.remove({id:'industrialforegoing:diamond_gear'})
    recipe.remove({id:'cyclic:uncrafter'})
    recipe.remove({id:'quark:building/crafting/compressed/apple_crate'})
    recipe.remove({id:'quark:building/crafting/compressed/apple_crate_uncompress'})
    recipe.remove({id:'quark:building/crafting/compressed/potato_crate'})
    recipe.remove({id:'quark:building/crafting/compressed/potato_crate_uncompress'})
    recipe.remove({id:'quark:building/crafting/compressed/carrot_crate'})
    recipe.remove({id:'quark:building/crafting/compressed/carrot_crate_uncompress'})
    recipe.remove({id:'quark:building/crafting/compressed/beetroot_crate'})
    recipe.remove({id:'quark:building/crafting/compressed/beetroot_crate_uncompress'})
    recipe.remove({id:'quark:building/crafting/compressed/gunpowder_sack'})
    recipe.remove({id:'quark:building/crafting/compressed/gunpowder_sack_uncompress'})
    recipe.remove({id:'absentbydesign:gate_nether_bricks'})

    var simplyJetpacks = [
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
        'simplyjetpacks:jetpack_te4_armored'
    ]
    simplyJetpacks.forEach(item => {
        recipe.remove({output: item})
    })
})