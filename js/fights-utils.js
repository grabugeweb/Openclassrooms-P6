function generatedFights(player, otherPlayer) {
    if ((player1.ligne == player2.ligne) && ((player1.colonne == player2.colonne - 1) || (player1.colonne == player2.colonne + 1))) {
        startFight(player, otherPlayer);
    } else if ((player1.colonne == player2.colonne) && ((player1.ligne == player2.ligne - 1) || (player1.ligne == player2.ligne + 1))) {
        startFight(player, otherPlayer);
    };
}

function startFight(player, otherPlayer) {
    $('#nbreCase').text('bat');
    $('#resultat').text('com');
    if ((player1.vie != 0) && (player2 != 0)) { //QUESTION il connait player 1 alors que l'on a passé uniquement player en arg 
        selectAttackerDefender(player);
        console.log(otherPlayer);
        let weaponOtherPlayer=[]
        weaponOtherPlayer = weaponOtherPlayer.concat(armes.find((a) => a == otherPlayer.name));
        console.log(weaponOtherPlayer);
        if (player.statut == 'defendre') {};
        console.log('defendre');
    };

    function selectAttackerDefender(player) {
        const attackingOrDefending = prompt(player.name + ' : defendre ou attaquer ?');
        player['statut'] = attackingOrDefending;
    };

}