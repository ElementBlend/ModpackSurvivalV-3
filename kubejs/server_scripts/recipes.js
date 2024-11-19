settings.logAddedRecipes = true
settings.logRemovedRecipes = true

onEvent('recipes', recipe => {

    recipe.shaped('kubejs:certificate_base',
    [
        'PS',
        'F ',
    ],{
        P: 'minecraft:paper',
        S: 'minecraft:ink_sac',
        F: 'minecraft:feather'
    })

    recipe.shaped('kubejs:jei_certificate',
    [
        'F',
        'P',
        'C'
    ],{
        F: 'minecraft:furnace',
        P: 'kubejs:certificate_base',
        C: 'minecraft:crafting_table'
    })

    recipe.shapeless(
        item.of('minecraft:experience_bottle',8),
        [
            'kubejs:jei_certificate'
        ]
    )

    recipe.shaped(
        'refinedstorageaddons:wireless_crafting_grid',
        [
            'GA',
            'C '
        ],{
              G: 'refinedstorage:wireless_grid',
              A: 'refinedstorage:advanced_processor',
              C: 'minecraft:crafting_table'
        }
    )

    recipe.shaped(
        item.of('kubejs:machine_block', 16),
        [
            'SSS',
            'SFS',
            'SSS'
        ],{
        S: 'minecraft:stone',
        F: 'thermal:machine_frame'
        }
    )

    recipe.recipes.thermal.pulverizer('2x powah:uraninite_raw_poor', '#forge:ores/uraninite_poor')
    recipe.recipes.thermal.pulverizer('2x powah:uraninite_raw', '#forge:ores/uraninite')
    recipe.recipes.thermal.pulverizer('2x powah:uraninite_raw_dense', '#forge:ores/uraninite_dense')
    recipe.recipes.thermal.pulverizer('2x betterendforge:raw_amber', 'betterendforge:amber_ore')
    recipe.recipes.thermal.pulverizer('2x betterendforge:ender_shard', 'betterendforge:ender_ore')
    recipe.recipes.thermal.pulverizer('2x quark:biotite', 'quark:biotite_ore')
    recipe.recipes.thermal.pulverizer('6x astralsorcery:aquamarine', 'astralsorcery:aquamarine_sand_ore')
    recipe.stonecutting('quark:marble','astralsorcery:marble_raw')
    recipe.stonecutting('astralsorcery:marble_raw','quark:marble')
    recipe.stonecutting('quark:marble_bricks','astralsorcery:marble_bricks')
    recipe.stonecutting('astralsorcery:marble_bricks','quark:marble_bricks')
    recipe.stonecutting('quark:marble_bricks_stairs','astralsorcery:marble_stairs')
    recipe.stonecutting('astralsorcery:marble_stairs','quark:marble_bricks_stairs')
    recipe.stonecutting('quark:marble_bricks_slab','astralsorcery:marble_slab')
    recipe.stonecutting('astralsorcery:marble_slab','quark:marble_bricks_slab')
    recipe.remove({id:'quark:building/crafting/compressed/bamboo_block'})
    recipe.shapeless('2x quark:bamboo_block', ['thermal:bamboo_block','thermal:bamboo_block'])
    recipe.shapeless('2x thermal:bamboo_block', ['quark:bamboo_block','quark:bamboo_block'])
    recipe.shapeless('quark:oak_chest',['#forge:chests/wooden','minecraft:oak_planks'])
    recipe.shapeless('quark:spruce_chest',['#forge:chests/wooden','minecraft:spruce_planks'])
    recipe.shapeless('quark:birch_chest',['#forge:chests/wooden','minecraft:birch_planks'])
    recipe.shapeless('quark:acacia_chest',['#forge:chests/wooden','minecraft:acacia_planks'])
    recipe.shapeless('quark:jungle_chest',['#forge:chests/wooden','minecraft:jungle_planks'])
    recipe.shapeless('quark:dark_oak_chest',['#forge:chests/wooden','minecraft:dark_oak_planks'])
    recipe.shapeless('quark:crimson_chest',['#forge:chests/wooden','minecraft:crimson_planks'])
    recipe.shapeless('quark:warped_chest',['#forge:chests/wooden','minecraft:warped_planks'])
    recipe.shapeless('quark:nether_brick_chest',['#forge:chests/wooden','minecraft:nether_bricks'])
    recipe.shapeless('quark:purpur_chest',['#forge:chests/wooden','minecraft:purpur_block'])
    recipe.shapeless('quark:prismarine_chest',['#forge:chests/wooden','minecraft:prismarine'])
    recipe.shapeless('quark:oak_trapped_chest',['quark:oak_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:spruce_trapped_chest',['quark:spruce_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:birch_trapped_chest',['quark:birch_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:acacia_trapped_chest',['quark:acacia_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:jungle_trapped_chest',['quark:jungle_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:dark_oak_trapped_chest',['quark:dark_oak_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:crimson_trapped_chest',['quark:crimson_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:warped_trapped_chest',['quark:warped_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:nether_brick_trapped_chest',['quark:nether_brick_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:purpur_trapped_chest',['quark:purpur_chest','minecraft:tripwire_hook'])
    recipe.shapeless('quark:prismarine_trapped_chest',['quark:prismarine_chest','minecraft:tripwire_hook'])

})