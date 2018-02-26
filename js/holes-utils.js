function generateHoles(forbiddenIds) {
  let holes = [];
  for (let i = 0; i < numberOfHoles; i++) {
    const hole = initHole((i === 0) ? forbiddenIds : forbiddenIds.concat(holes.map(h => h.idHole))); // EXPLIQUER // je passe une ternaire en argument de la fonction
    holes = holes.concat(hole);
    $('#' + hole.idHole).html(hole.avatar);
  };
  return holes;
}
console.log(holes); // QUESTION pourquoi le tableau est vide ?

function initHole(forbiddenIds) {
  const idHole = getUniqPosition(forbiddenIds);
  return {
    idHole,
    ligneHole: $('#' + idHole).data('ligne'),
    colonneHole: $('#' + idHole).data('colonne'),
    avatar: '<img class="hole" src="img/trou.jpg">'
  };
}

