function initPlayer(className, firstWeapon, nameSelector, lifeSelector, armeSelector, avatar, forbiddenIds) {
  const playerData = generatePlayer(forbiddenIds);
  const player = {
    id: playerData.idPlayer,
    name: generateNamePlayer(),
    class: className,
    avatar,
    vie: 100,
    ligne: playerData.lignePlayer,
    colonne: playerData.colonnePlayer,
    arme: firstWeapon,
    case_utilisee: 0,
    infoWeapon:armeSelector,
    infoLife:lifeSelector
  };
  $('#' + player.id).html(generatePlayerImage(player));
  $(nameSelector).text(player.name);
  $(lifeSelector).text("Points de vie : " + player.vie);
  $(armeSelector).text("Type d'arme : " + player.arme);
  return player;
}

function generateNamePlayer() {
  return prompt("Prénom du joueur ?");
}

// generate variables for players : name, id, lignePlayer, colonnePlayer
function generatePlayer(forbiddenIds) {
  const id = getUniqPosition(forbiddenIds);
  return {
    idPlayer: id,
    lignePlayer: $('#' + id).data('ligne'),
    colonnePlayer: $('#' + id).data('colonne')
  };
}

function generatePlayerImage(player) {
  const image = $('<img />');
  image.attr('id', player.id);
  image.attr('src', player.avatar);
  image.attr('class', 'player');
  return image;
}


function checkPlayersPosition(player1, player2, forbiddenIds) {
  if ((player1.ligne == player2.ligne) && ((player1.colonne == player2.colonne - 1) || (player1.colonne == player2.colonne + 1))) {
    clearPlayer2Position(player2, forbiddenIds);
  } else if ((player1.colonne == player2.colonne) && ((player1.ligne == player2.ligne - 1) || (player1.ligne == player2.ligne + 1))) {
    clearPlayer2Position(player2, forbiddenIds);
  };
}

function clearPlayer2Position(player2, forbiddenIds) {
  console.log('nettoyage');
  $('#' + player2.id).html('');
  forbiddenIds = forbiddenIds.filter((idplayer2) => idplayer2 <= numberOfHoles + 5);
  player2 = initPlayer('#player2NameHtml', '#viePlayer2Html', '#armePlayer2Html', 'img/figurine_joueur_2.png', forbiddenIds);
  forbiddenIds = forbiddenIds.concat(player2.id);
}