function generateGrid(tabIds,rowGrid,colGrid) {
  let id=0; 
  for (let i = 1; i <= row; i++) {
    const tr = $('<tr/>');
    tr.appendTo($('table'));
    for (let j = 1; j <= col; j++) {
      const td = createTD(id,i, j);
      id+=1;
      td.appendTo(tr).addClass('celluleCss');
    }
  }
}

function createTD(id,ligne, colonne) {
  const td = $('<td/>'); 
  td.attr('id',id);
  td.attr('data-ligne', ligne);
  td.attr('data-colonne', colonne);
  return td;
}