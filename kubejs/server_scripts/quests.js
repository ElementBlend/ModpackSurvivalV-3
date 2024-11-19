onEvent('ftbschools.enter_school', event => {
    event.player.data.ftbquests.reset('1EE1D41D7900B802')           //Spawn reward 1
    event.player.data.ftbquests.reset('56681E7921C8850C')           //Spawn reward 2
    event.player.data.ftbquests.reset('1A9737C80961AAB4')           //Spawn reward 3
    event.player.data.ftbquests.reset('6886D70CD60FC58D')           //Spawn reward 4
    event.player.data.ftbquests.reset('62D7A85E2334787A')           //Botania reward
    event.player.data.ftbquests.reset('08B0A46A97A2263B')           //Tech reward 1
    event.player.data.ftbquests.reset('156F049396904095')           //Tech reward 2
    event.player.data.ftbquests.reset('59B1E99A0D19ECC8')           //Astral reward 1
    event.player.data.ftbquests.reset('7145155A532E9978')           //Astral reward 2
    event.player.data.ftbquests.reset('790999AC867AF3EB')           //Astral reward 1
    event.player.data.ftbquests.reset('40C6F1B7A40D52E4')           //Astral reward 1
    event.player.data.ftbquests.locked = true
})

onEvent('ftbschools.leave_school', event => {
    event.player.data.ftbquests.locked = false
    event.player.data.ftbquests.reset('69C2EA7E97F09C40')           //Refined Storage School 1 quest
    event.player.data.ftbquests.reset('64252CFF8AE93B46')           //Refined Storage School 2 quest
    event.player.data.ftbquests.reset('585291CE81345383')           //Tech School quest
    event.player.data.ftbquests.reset('0124FAABD8D77026')           //Astral Sorcery School quest
    event.player.data.ftbquests.reset('746E96B3729981DC')           //Botania School quest
})

onEvent('ftbchunks.after.claim', event => {
    if (event.player) {
        event.player.data.ftbquests.changeProgress('0000000000000057', progressChange => {
            progressChange.reset = false
            progressChange.notifications = true
        })
    }
})

//Schools
onEvent('ftbquests.completed.5513AF634204A9B4', event => {
    event.data.reset('5513AF634204A9B4')
    if (event.player) {event.player.runCommand('/school enter ftbacademy:spawn')}
})
onEvent('ftbquests.completed.7AC24B534F3E2F7F', event => {
    event.data.reset('7AC24B534F3E2F7F')
    if (event.player) {event.player.runCommand('/school enter ftbacademy:refinedstorage1')}
})
onEvent('ftbquests.completed.2B7D1906C734DA86', event => {
    event.data.reset('2B7D1906C734DA86')
    if (event.player) {event.player.runCommand('/school enter ftbacademy:refinedstorage2')}
})
onEvent('ftbquests.completed.0FD7C3F910A7F24D', event => {
    event.data.reset('0FD7C3F910A7F24D')
    if (event.player) {event.player.runCommand('/school enter ftbacademy:tech')}
})
onEvent('ftbquests.completed.59B16455397B15E3', event => {
    event.data.reset('59B16455397B15E3')
    if (event.player) {event.player.runCommand('/school enter ftbacademy:botania')}
})
onEvent('ftbquests.completed.3816D457E13DFB07', event => {
    event.data.reset('3816D457E13DFB07')
    if (event.player) {event.player.runCommand('/school enter ftbacademy:astralsorcery')}
})
