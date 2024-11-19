onEvent('item.tooltip', tooltip => {
    tooltip.add('cyclic:cask', [
        'Stores up to 8 buckets of any liquid',
        'Does not keep contents when broken'
    ])
  
    tooltip.add(['quark:backpack', 'quark:magnet', 'quark:crate', 'quark:pipe'], 'Added by Quark Oddities')
    tooltip.add(/refinedstorage:red_/, 'Can be any color')
    tooltip.add('industrialforegoing:latex_bucket', 'Not equivalent to Thermal\'s Latex')
    tooltip.add('thermal:latex_bucket', 'Not equivalent to Industrial Foregoing\'s Latex')
    tooltip.add(/botania:.+_mushroom/, 'Equivalent to a Mystical Petal of the same color')
    tooltip.add('lofirecordstomineto:remember', 'FTB University\'s main menu music!')
    tooltip.add('kubejs:machine_block', 'Texture from Thermal Foundation')
    tooltip.add('lofirecordstomineto:remember', 'FTB University 1.12\'s main menu music!')
    tooltip.add('lofirecordstomineto:in_search_of_life', 'FTB Academy 1.16\'s main menu music!')
    tooltip.add(/compressium:.+1/,'9 blocks')
    tooltip.add(/compressium:.+2/,'81 blocks')
    tooltip.add(/compressium:.+3/,'729 blocks')
    tooltip.add(/compressium:.+4/,'6,561 blocks')
    tooltip.add(/compressium:.+5/,'59,049 blocks')
    tooltip.add(/compressium:.+6/,'531,441 blocks')
    tooltip.add(/compressium:.+7/,'4,782,969 blocks')
    tooltip.add(/compressium:.+8/,'43,046,721 blocks')
    tooltip.add(/compressium:.+9/,'387,420,489 blocks')
    tooltip.add('pipez:basic_upgrade',['Provides:','Redstone modes'])
    tooltip.add('pipez:improved_upgrade',['Provides:','Redstone modes','Distribution modes',])
    tooltip.add('pipez:advanced_upgrade',['Provides:','Redstone modes','Distribution modes','Filters','Filter modes'])
    tooltip.add('pipez:ultimate_upgrade',['Provides:','Redstone modes','Distribution modes','Filters','Filter modes'])
})