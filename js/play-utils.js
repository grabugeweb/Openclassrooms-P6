function changePlayer(player1, player2) {
  if (player1.playing) {
    return {
      player1: Object.assign({}, player1, {
        playing: false
      }),
      player2: Object.assign({}, player2, {
        playing: true
      }),
    }

  }
  return {
    player1: Object.assign({}, player1, {
      playing: true
    }),
    player2: Object.assign({}, player2, {
      playing: false
    }),
  };
}

function getCurrentPlayer(player1, player2) {
  if (player1.playing) {
    return player1;
  }
  return player2;
}

function changePlayerAtEachTurn() {
  const _players = changePlayer(player1, player2); //Changer de joueur
  player1 = _players.player1;
  player2 = _players.player2;
  currentPlayer = getCurrentPlayer(player1, player2);
  otherPlayer = (player1.playing) ? player2 : player1;
  $('.' + currentPlayer.class).addClass('activ');
  $('.' + otherPlayer.class).removeClass('activ');
}


function playerMove(element, player, otherPlayer, forbiddenIds, holes) {
  const coordonateEnd = {
    ligne: $(element).data('ligne'),
    colonne: $(element).data('colonne'),
    id: $(element).attr('id')
  } //`${$(element).data('ligne')};${$(element).data('colonne')}`;
  //const coordonateEndLigne = $(element).data('ligne');
  //const coordonateEndColonne = $(element).data('colonne');
  let nbreCasesLignesUtilisees = Math.abs(player.ligne - coordonateEnd.ligne);
  let nbreCasesColonnesUtilisees = Math.abs(player.colonne - coordonateEnd.colonne);
  let nbreCasesUtilisees = player.case_utilisee + Math.abs(nbreCasesLignesUtilisees + nbreCasesColonnesUtilisees);


  //const allowedCoordonates = getAllowedMoves();
  //const isAuthorized = allowedCoordonates.find((c) => coordonateEnd === c);
  //player= idCurrentPlayer.concat(player.id); MARCHE PAS ?????
  if (isMoveAllowed(player, coordonateEnd, forbiddenIds, valeurDes, nbreCasesUtilisees, holes)) {
    $(`#${player.id} .player`).remove();
    player.id = coordonateEnd.id;
    $('#' + player.id).html('<img class="player" src=' + player.avatar + '>');
    $('#nbreCase').text(valeurDes - nbreCasesUtilisees);
    player.ligne = coordonateEnd.ligne;
    player.colonne = coordonateEnd.colonne;
    player.case_utilisee = nbreCasesUtilisees;
  }
  ;

  // check if there is a weapon on case
  ifWeaponIsOnCase(player);

  // start Fight
  generatedFights(player, otherPlayer);

  if ((nbreCasesUtilisees >= valeurDes) && (isMoveAllowed(player, coordonateEnd, forbiddenIds, valeurDes, nbreCasesUtilisees, holes))) {
    $('#nbreCase').text('');
    $('#resultat').text('');
    player.case_utilisee = 0;
    changePlayerAtEachTurn();
    currentPlayer = getCurrentPlayer(player1, player2);
    otherPlayer = (player1.playing) ? player2 : player1;
  }


  if (!(isMoveAllowed(player, coordonateEnd, forbiddenIds, valeurDes, nbreCasesUtilisees, holes))) {
    alert('Mauvais déplacement , Re-commence !!');
  }

}

function isMoveAllowed(player, coordonateEnd, forbiddenIds, valeurDes, nbreCasesUtilisees, holes) {
  const {
    ligne,
    colonne,
    id
  } = coordonateEnd; // je destructure la variable qui a été groupée avec 3 sous variables pour la fair reapparaitre avec ses 3 sous variables
  let isAllowedConditions = []; // construire un tableau pour stocker les ok déplacements
  //Move diagonally
  isAllowedConditions = isAllowedConditions.concat(!(player.ligne !== ligne && player.colonne !== colonne));
  //Check if click is not on a hole
  const holeIds = forbiddenIds.filter((e, idx) => idx < numberOfHoles);
  isAllowedConditions = isAllowedConditions.concat(!holeIds.find(holeId => holeId === parseInt(id, 10)));
  //Vérifier si il y a un trou sur la trajectoire
  isAllowedConditions = isAllowedConditions.concat(!hasHoleInDeplacement({
    x: player.colonne,
    y: player.ligne
  }, {
    x: coordonateEnd.colonne,
    y: coordonateEnd.ligne
  }, holes));
  //Move has to be inside value dé
  isAllowedConditions = isAllowedConditions.concat(nbreCasesUtilisees <= valeurDes);
  // return true and false : when reduce meets false --> player stop
  return isAllowedConditions.reduce((acc, curr) => (!acc) ? acc : curr, true); // permet de ramener à une seule valeur
}


// Object, Object, Array<Hole> -> Boolean
function hasHoleInDeplacement(startCoordonate, endCoordonate, holes) {
  if (isHorizontalMove(startCoordonate, endCoordonate)) { //attribut colonne des trous dans l'interval de déplacement
    const sortedCordonnates = [startCoordonate, endCoordonate].sort((a, b) => a.x > b.x); // trier dans l'odre croissant // QUESTION sur la syntaxe [startCoordonate, endCoordonate]
    return holes
      .filter((hole) => hole.ligneHole === startCoordonate.y) //On filtre les trous qui sont sur la meme ligne que le joueur --> Cela retourne un nouveau tableau
      .filter((hole) => hole.colonneHole > sortedCordonnates[0].x && hole.colonneHole < sortedCordonnates[1].x) //On filtre à nouveau sur le résultat du premier filtre les trous qui sont dans la trajectoire du déplacement
      .length > 0; // ????
  }
  // On refait la même manipulation dans l'autre sens car déplacement vertical
  const sortedCordonnates = [startCoordonate, endCoordonate].sort((a, b) => a.y > b.y);
  return holes // array holes déclaré dans util.js
    .filter((hole) => hole.colonneHole === startCoordonate.x) //On filtre les trous qui sont sur la meme colonne que le joueur
    .filter((hole) => hole.ligneHole > sortedCordonnates[0].y && hole.ligneHole < sortedCordonnates[1].y)
    .length > 0;
}


function isHorizontalMove(c1, c2) {
  return c1.x !== c2.x && c1.y === c2.y;
}
