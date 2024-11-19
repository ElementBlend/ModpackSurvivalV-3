events.listen('item.registry', function (event) {
    event.create('certificate_base').displayName('Empty Certificate')
    event.create('jei_certificate').displayName('JEI Certificate')
})

events.listen('block.registry', function (event) {
	event.create('machine_block').material('stone').hardness(0.5).displayName('Machine Block')
	event.addDetector('leave_school')
	event.addDetector('leave_spawn_message')
	for (i = 1; i <= 10; i++) {
		let s = i.toFixed(0)
		event.addDetector(`spawn_easter_egg_${s}`)
		event.addDetector(`botania_easter_egg_${s}`)
		event.addDetector(`tech_easter_egg_${s}`)
		event.addDetector(`astral_easter_egg_${s}`)
	}
})