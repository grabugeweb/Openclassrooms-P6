
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


// check if new coordonnate's personna is not a forbidden
// apply this function to : generatePlayer () + generatePositionWeapon()
// Return TRUE if the id is already present FALSE otherwise
/*function checkForbiddencoordonnate(id) {
  if (tabIdsInterdits) {
    return tabIdsInterdits.indexOf(id) !== -1;
  }
  return false;
};

function generateForbiddenIdsArray(id) {
  tabIdsInterdits.push(id);
  console.log(tabIdsInterdits);
};*/


/* QUESTION
const variable ={
  varaible1:{
    param1:'ok',
    param2:'ko'
  }
  varaible2:{
    param1:'ok',
    param2:'ko'
  }
}
c'est un tableau ou un objet ?
*/

//`${$(element).data('ligne')};${$(element).data('colonne')}`;
  //const coordonateEndLigne = $(element).data('ligne');
  //const coordonateEndColonne = $(element).data('colonne');



  //const allowedCoordonates = getAllowedMoves();
  //const isAuthorized = allowedCoordonates.find((c) => coordonateEnd === c);
  //player= idCurrentPlayer.concat(player.id); MARCHE PAS ?????