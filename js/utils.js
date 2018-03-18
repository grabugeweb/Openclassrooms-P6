function idUniqueCases(array) {
  totalCases = col * row;
  id = 0;
  for (i = 0; i < totalCases; i++) {
    id++;
    tabIds.push(id);
  };
  return array;
}

function hasard() {
  const min = Math.ceil(1);
  const max = Math.ceil(row*col);
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
}