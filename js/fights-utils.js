function generatedFights(player, otherPlayer) {
    if ((player.ligne == otherPlayer.ligne) && ((player.colonne == otherPlayer.colonne - 1) || (player.colonne == otherPlayer.colonne + 1))) {
        startFight(player, otherPlayer);
    } else if ((player.colonne == otherPlayer.colonne) && ((player.ligne == otherPlayer.ligne - 1) || (player.ligne == otherPlayer.ligne + 1))) {
        startFight(player, otherPlayer);
    };
}

function startFight(player, otherPlayer) {
    console.log(player, otherPlayer);
    $('#nbreCase').text('bat');
    $('#resultat').text('com');
    if ((player.vie != 0) && (otherPlayer != 0)) {
        selectAttackerDefender(player);
        findPlayerArm(player, otherPlayer);
        winner(player, otherPlayer);
        changePlayerAtEachTurn();
        currentPlayer = getCurrentPlayer(player1, player2);
        otherPlayer = (player1.playing) ? player2 : player1;
        startFight(currentPlayer, otherPlayer);
    };
}

function selectAttackerDefender(player) {
    const attackingOrDefending = prompt(player.name + ' : defendre ou attaquer ?');
    player['statut'] = attackingOrDefending;
}

function findPlayerArm(player, otherPlayer) {
    const weaponPlayer = armes.find((a) => a.name === player.arme);
    const weaponOtherPlayer = armes.find((a) => a.name === otherPlayer.arme);
    fight(player, otherPlayer, weaponPlayer, weaponOtherPlayer); // QUESTION j'aurais voulu appeler la fonction dans startfight mais les 2 const ne suivent pas

}

function fight(player, otherPlayer, arme1, arme2) {
    if (player.statut == 'defendre') {
        player.vie = player.vie - (arme2.degats / 2);
        console.log('player ' + player.vie);
    } else {
        otherPlayer.vie = otherPlayer.vie - (arme1.degats);
        console.log('other player ' + otherPlayer.vie);
    };
    $(player.infoLife).text("Points de vie : " + player.vie);
    $(otherPlayer.infoLife).text("Points de vie : " + otherPlayer.vie);
}

function winner(player, otherPlayer) {
    if (player.vie <= 0) {
        alert("C'est " + otherPlayer.name + " qui a gagné, bravo !");
    } else if (otherPlayer.vie <= 0) {
        alert("C'est " + player.name + " qui a gagné, bravo !");
    };
};