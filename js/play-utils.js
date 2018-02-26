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
  const players = changePlayer(player1, player2); //Changer de joueur
  player1 = players.player1;
  player2 = players.player2;
  const currentPlayer = getCurrentPlayer(player1, player2);
  otherPlayer = (player1.playing) ? player2 : player1; // QUESTION pourquoi c'est undefined lorsque j'ajoute const ?
  $('.' + currentPlayer.class).addClass('activ');
  $('.' + otherPlayer.class).removeClass('activ');
}


function playerMove(element, player, forbiddenIds) {
  const coordonateEnd = { ligne: $(element).data('ligne'), colonne: $(element).data('colonne'), id: $(element).attr('id') } //`${$(element).data('ligne')};${$(element).data('colonne')}`;
  const coordonateEndLigne = $(element).data('ligne');
  const coordonateEndColonne = $(element).data('colonne');
  const newIdCurrentPlayer = $(element).attr('id');
  const diagId = player.id; // to keep the old id for diagonal moves
  //const allowedCoordonates = getAllowedMoves();
  //const isAuthorized = allowedCoordonates.find((c) => coordonateEnd === c);
  //player= idCurrentPlayer.concat(player.id); MARCHE PAS ?????
  if(isMoveAllowed(player, coordonateEnd, forbiddenIds)){
    $('#' + player.id).html('');
    player.id = Number(newIdCurrentPlayer);
    $('#' + player.id).html('<img class="player" src=' + player.avatar + '>');
  }
  //checkMoves(player, coordonateEndLigne, coordonateEndColonne, diagId, forbiddenIds);
}

function isMoveAllowed(player, coordonateEnd, forbiddenIds){
  const { ligne, colonne, id } = coordonateEnd;
  let isAllowedConditions = [];
  //MOVE diagonally
  isAllowedConditions = isAllowedConditions.concat(!(player.ligne !== ligne && player.colonne !== colonne));
  //Move is not on a hole
  isAllowedConditions = isAllowedConditions.concat(!forbiddenIds.find(e => e === parseInt(id, 10)));

  //TODO Non debordement, pas plus que la valeur du Dé

  return isAllowedConditions.reduce((acc, curr) => (!acc) ? acc : curr, true);
}



function checkMoves(player, ligneFin, colonneFin, diagId, forbiddenIds) {
  const nbreCasesLignesUtilisées = Math.abs(player.ligne - ligneFin);
  const nbreCasesColonnesUtilisées = Math.abs(player.colonne - colonneFin);
  let verifNbreCasesUtilisees = Math.abs(nbreCasesLignesUtilisées + nbreCasesColonnesUtilisées);
  $('#nbreCase').text(Math.abs(verifNbreCasesUtilisees - valeurDes));

  // Turn end
  if (verifNbreCasesUtilisees >= valeurDes) {
    $('#nbreCase').text('0');
    changePlayerAtEachTurn();
  }
  $('#' + player.id).html('<img class="player" src=' + player.avatar + '>');

  // Forbidden PASS THROUGH 
  /*if (verifNbreCasesUtilisees > 1) {
    through(currentIdPlayer,forbiddenIds);
    function through(currentIdPlayer,forbiddenIds) {
      for (p=0;p>forbiddenIds.length;p++){
      return (currentIdPlayer == forbiddenIds[p] ? alert('ko') : alert('ok'))
      };
    }
  };*/

  // DIAGONAL check if player moves diagonally
  if ((ligneFin != player.ligne) && (colonneFin != player.colonne)) {
    alert('diagonale');
    $('#' + player.id).html('');
    $('#' + diagId).html('<img class="player" src=' + player.avatar + '>');
    $('#nbreCase').text(Math.abs(valeurDes));
    verifNbreCasesUtilisees = 0;
  }
  ;

  //HOLE check if player moves to one of the holes
  for (let i = 0; i < numberOfHoles; i++) {
    if (player.id == forbiddenIds[i]) {
      alert('trou');
      $('#' + player.id).html('<img class="hole" src="img/trou.jpg">');
      $('#' + diagId).html('<img class="player" src=' + player.avatar + '>');
    }
  }

  // RETURN refresh data and return player
  valeurDes = Math.abs(valeurDes - verifNbreCasesUtilisees);
  player.ligne = ligneFin;
  player.colonne = colonneFin;
  return player;
}


/*function getAllowedMoves() {
  const currentPlayer = (player1.playing) ? player1 : player2;
  const otherPlayer = (player1.playing) ? player2 : player1;
  const startLine = currentPlayer.ligne;
  const startColumn = currentPlayer.colonne;
  let coordonates = [];

  for (let line = startLine - 3; line <= startLine + 3; line++) {
    if (line >= 1 && line <= row) {
      coordonates = coordonates.concat(`${line};${startColumn}`)
    }
  }
  for (let column = startColumn - 3; column <= startColumn + 3; column++) {
    if (column >= 1 && column <= col) {
      coordonates = coordonates.concat(`${startLine};${column}`)
    }
  }
  return coordonates.filter((coordonate) => {
    return coordonate !== `${startLine};${startColumn}` &&
      coordonate !== `${otherPlayer.ligne};${otherPlayer.colonne}`
  });
}*/