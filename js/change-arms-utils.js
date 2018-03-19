function ifWeaponIsOnCase(player, armes) {
    const armeFound = findArmeById(armes, player.id);
    if (armeFound) {
        changeArmes(player, armeFound);
    }
}

function changeArmes(player, newWeaponPlayer) {
    // stock Weapon Player
    const stockOldPlayerWeapon = player.arme;
    // refresh new weapon player in player arms
    player.arme = newWeaponPlayer.name;
    // refresh new weapon player object in arms array
    newWeaponPlayer.id = player.id;
    newWeaponPlayer.ligne = player.ligne;
    newWeaponPlayer.colonne = player.colonne;
    updateArmesInArmsArray(newWeaponPlayer);
    // refresh old weapon player in arms array
    const oldWeaponPlayer = findArmeByName(stockOldPlayerWeapon);
    oldWeaponPlayer.ligne = player.ligne;
    oldWeaponPlayer.colonne = player.colonne;
    oldWeaponPlayer.id = player.id;
    updateArmesInArmsArray(oldWeaponPlayer);
    updateArmesDOM(oldWeaponPlayer,player);
}

function findArmeByName(armeName) {
    return Object.assign({}, armes.find((arme) => arme.name === armeName)); // Retourne une copie de l'objet arme et non pas l'arme directement
}

function findArmeById(armes, armeId) {
  //Renommage des ids des armes et des players en caseId
  const armeFound = armes.find((arme) => arme.id == armeId);
  if (armeFound) {
    return Object.assign({}, armeFound); // Retourne une copie de l'objet arme et non pas l'arme directement
  }
  return null;
}

function updateArmesDOM(oldWeaponPlayer,player) {
    const img = $(oldWeaponPlayer.avatar);
    img.appendTo($('td[id=' + oldWeaponPlayer.id + ']'));
    $('td[id=' + oldWeaponPlayer.id + '] .weapon').addClass('armOn');
    $('td[id=' + oldWeaponPlayer.id + '] .player').addClass('armOn');
    $(player.infoWeapon).text("Type d'arme : " + player.arme);

}

function updateArmesInArmsArray(arme) {
    armes = armes.map((a) => {
        if (a.name === arme.name) {
            return arme;
        }
        return a;
    })
}
