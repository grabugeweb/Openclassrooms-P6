let tabIds = [];
let forbiddenIds = [];
let currentPlayer = null;
let otherPlayer=null;


// generate array with id unique
idUniqueCases(tabIds);

// generate grid and cases
generateGrid(tabIds);

// generate holes
const numberOfHoles = 6;
const generatedHoles = generateHoles(forbiddenIds,numberOfHoles);
forbiddenIds = forbiddenIds.concat(generatedHoles.map(hole => hole.idHole));

// generate weapons
const generatedWeapons = generateWeapons(forbiddenIds);
forbiddenIds = forbiddenIds.concat(generatedWeapons.map(weapon => weapon.id));

// init player 1
let player1 = initPlayer('player1', 'épée1', '#player1NameHtml', '#viePlayer1Html', '#armePlayer1Html', 'img/figurine_joueur_1.png',forbiddenIds);
forbiddenIds = forbiddenIds.concat(player1.id);

// init player 2
let player2 = initPlayer('player2', 'épée2', '#player2NameHtml', '#viePlayer2Html', '#armePlayer2Html', 'img/figurine_joueur_2.png',forbiddenIds);
forbiddenIds = forbiddenIds.concat(player2.id);

// for the first move
changePlayerAtEachTurn();
currentPlayer = getCurrentPlayer(player1, player2);
otherPlayer = (player1.playing) ? player2 : player1;

// check if players are next to each other
checkPlayersPosition(currentPlayer, otherPlayer,forbiddenIds);

// listening click td event
$('td').on('click', function () {
  const element = $(this);
  playerMove(element, currentPlayer, otherPlayer, forbiddenIds, generatedHoles,valeurDes);
});

//  click event on button "lancer dé"
$('button').on('click', function () {
  const valeurDes = lancerDe();
  $('#resultat').text(valeurDes);
  $('#nbreCase').text(valeurDes);
  return valeurDes; //???
});

