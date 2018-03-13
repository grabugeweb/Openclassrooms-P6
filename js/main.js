let tabIds = [];
let forbiddenIds = [];
let currentPlayer = null;
let otherPlayer=null;


// generate array with id unique
idUniqueCases(tabIds);

// generate grid and cases
generateGrid(tabIds);

// generate holes
const generatedHoles = generateHoles(forbiddenIds);
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

// check if players are next to each other
checkPlayersPosition(player1, player2,forbiddenIds);

// for the first move
changePlayerAtEachTurn();
currentPlayer = getCurrentPlayer(player1, player2);
otherPlayer = (player1.playing) ? player2 : player1;

// listening click td event
$('td').on('click', function () {
  const element = $(this);
  playerMove(element, currentPlayer, otherPlayer, forbiddenIds, generatedHoles);
});

//  click event on button "lancer dé"
$('button').on('click', function () {
  valeurDes = lancerDe();
  $('#resultat').text(valeurDes);
  $('#nbreCase').text(valeurDes);
});
