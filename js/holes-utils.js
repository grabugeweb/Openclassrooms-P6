function generateHoles(forbiddenIds, numberOfHoles) {
  let holes = [];
  for (let i = 0; i < numberOfHoles; i++) {
    const hole = initHole((i === 0) ? forbiddenIds : forbiddenIds.concat(holes.map(h => h.idHole)));  
    holes = holes.concat(hole);
    $('#' + hole.idHole).html(hole.avatar);
  };
  return holes;
}


function initHole(forbiddenIds) {
  const idHole = getUniqPosition(forbiddenIds);
  return {
    idHole,
    ligneHole: $('#' + idHole).data('ligne'),
    colonneHole: $('#' + idHole).data('colonne'),
    avatar: '<img class="hole" src="img/trou.jpg">'
  };
}

