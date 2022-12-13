Hooks.on('ready', () => {
    game.settings.settings.get('storyteller.theme').choices.starwars = game.i18n.localize(
        'STORYTELLERSTARWARSTHEME.Settings.ThemeStarWars'
    );
    console.log('Storyteller Star Wars Theme | ready');
});
