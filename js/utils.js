let holes = [];
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

// // generate array unique ids
function idUniqueCases(array) {
  totalCases = col * row;
  id = 0;
  for (i = 0; i < totalCases; i++) {
    id++;
    tabIds.push(id);
  };
  return array;
};
// end

function hasard() {
  const min = Math.ceil(1);
  const max = Math.ceil(36);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getUniqPosition(forbiddenIds) {
  const idUniq = hasard();
  const idAlreadyExists = forbiddenIds.find((_id) => _id === idUniq);
  if(!idAlreadyExists){
    return idUniq;
  }
  return getUniqPosition(forbiddenIds);
}


function lancerDe() {
  return Math.floor(Math.random() * Math.floor(3)) + 1
};