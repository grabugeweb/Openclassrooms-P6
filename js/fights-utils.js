function generatedFights(player, otherPlayer) {
    if ((player.ligne == otherPlayer.ligne) && ((player.colonne == otherPlayer.colonne - 1) || (player.colonne == otherPlayer.colonne + 1))) {
        startFight(player, otherPlayer);
    } else if ((player.colonne == otherPlayer.colonne) && ((player.ligne == otherPlayer.ligne - 1) || (player.ligne == otherPlayer.ligne + 1))) {
        startFight(player, otherPlayer);
    };
}

function startFight(player, otherPlayer) {
    $('#nbreCase').text('bat');
    $('#resultat').text('com');
    if ((player.vie != 0) && (otherPlayer.vie != 0)) {
        const status = selectAttackerDefender(player);
        if(status){
          player['statut'] = status;
          setTimeout(() => {
            fight(player, otherPlayer, findPlayerArm(player, otherPlayer));
            winner(player, otherPlayer);
            changePlayerAtEachTurn();
            currentPlayer = getCurrentPlayer(player1, player2);
            otherPlayer = (player1.playing) ? player2 : player1;
            startFight(currentPlayer, otherPlayer);
          }, 300)
        }
    }
}

function selectAttackerDefender(player) {
    return prompt(player.name + ' : defendre ou attaquer ?');
}

function findPlayerArm(player, otherPlayer) {
    const arme1 = armes.find((a) => a.name === player.arme);
    const arme2 = armes.find((a) => a.name === otherPlayer.arme);
    return { arme1, arme2 };

}

function fight(player, otherPlayer, { arme1, arme2 }) {
    if (player.statut === 'defendre') {
        player.vie = player.vie - (arme2.degats / 2);
    } else {
        otherPlayer.vie = otherPlayer.vie - (arme1.degats);
    }
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
