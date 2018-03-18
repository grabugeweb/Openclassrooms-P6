function generateWeapons(forbiddenIds) {
  let weapons = [];
  for (let j = 2; j <= 4; j++) {
    const idNumberWeapon = getUniqPosition((j === 0) ? forbiddenIds : forbiddenIds.concat(weapons.map(w => w.id)));
    armes[j]['id'] = idNumberWeapon;
    armes[j].colonne = $('#' + idNumberWeapon).data('colonne');
    armes[j].ligne = $('#' + idNumberWeapon).data('ligne');
    $('#' + idNumberWeapon).html(armes[j].avatar);
    weapons = weapons.concat(armes[j]);
  }
  return weapons;
}
