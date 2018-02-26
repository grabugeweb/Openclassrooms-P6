function generateGrid(tabIds) { // generate grid
  for (let i = 1; i <= row; i++) {
    const tr = $('<tr/>');
    tr.appendTo($('table'));
    for (let j = 1; j <= col; j++) {
      const td = createTD(i, j);
      td.appendTo(tr).addClass('celluleCss');
    }
  }
  for (let o = 0; o < (row * col); o++) {
    $($($('td')[o])).attr('id', tabIds[o]);
  }
}

function createTD(ligne, colonne) {
  const td = $('<td/>'); 
  td.attr('data-ligne', ligne);
  td.attr('data-colonne', colonne);
  return td;
}