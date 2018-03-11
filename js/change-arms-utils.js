function ifWeaponIsOnCase(player) {
  const armeFound = findArmeById(player.id);
  if (armeFound) {
    changeArmes(player, armeFound);
  }
}

function changeArmes(player, newWeaponPlayer) {
  // stock Weapon Player
  const stockOldPlayerWeapon = player.arme;
  // refresh player weapon
  player.arme = newWeaponPlayer.name;
  newWeaponPlayer.id = player.id;
  newWeaponPlayer.ligne = player.ligne;
  newWeaponPlayer.colonne = player.colonne;
  updateArmes(newWeaponPlayer);
  // refresh oldweapon
  const oldWeaponPlayer = findArmeByName(stockOldPlayerWeapon);
  oldWeaponPlayer.ligne = player.ligne;
  oldWeaponPlayer.colonne = player.colonne;
  oldWeaponPlayer.id = player.id;
  updateArmes(oldWeaponPlayer);
  updateArmesDOM(oldWeaponPlayer);
}

function findArmeByName(armeName) {
  return Object.assign({}, armes.find((arme) => arme.name === armeName)); // Retourne une copie de l'objet arme et non pas l'arme directement
}

function findArmeById(armeId) {
  //Renommage des ids des armes et des players en caseId
  const armeFound = armes.find((arme) => arme.id == armeId);
  if(armeFound){
    return Object.assign({}, armeFound); // Retourne une copie de l'objet arme et non pas l'arme directement
  }
  return null;
}

function updateArmesDOM(oldWeaponPlayer) {
  const img = $(oldWeaponPlayer.avatar);
  img.appendTo($('td[id=' + oldWeaponPlayer.id + ']'));
}

function updateArmes(arme) {
  armes = armes.map((a) => {
    if (a.name === arme.name) {
      return arme;
    }
    return a;
  })
}
