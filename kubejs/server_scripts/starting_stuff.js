onEvent('player.logged_in', event => {
    if (!event.hasGameStage('started')) {
        event.addGameStage('started')
        event.player.give('ftbquests:book')
    }
    event.player.tell(['Welcome to ',text.lightPurple('FTB Academy 1.16'),'!'])
    event.player.tell(['Be sure to use the ', text.yellow('Quest Book'), ', it will walk you through everything you\'ll need to know!'])
})