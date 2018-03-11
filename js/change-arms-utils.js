function ifWeaponIsOnCase(player) {
    let weaponOnCase = [];
    if (armes.find((c) => c.id == player.id)) { // QUESTION c = n'importe quel objet du tab armes ?
        weaponOnCase = weaponOnCase.concat(armes.find((c) => c.id == player.id))
        changeArmes(player, weaponOnCase);
    };
}

function changeArmes(player, newWeaponPlayer) {
    // stock Weapon Player
    const stockOldPlayerWeapon = player.arme;
    // refresh player weapon
    player.arme = newWeaponPlayer[0].name;
    newWeaponPlayer[0].id = player.id; // QUESTION on dirait que ça concat direct dans le tab armes
    newWeaponPlayer[0].ligne = player.ligne;
    newWeaponPlayer[0].colonne = player.colonne;
    console.log('new weapon',newWeaponPlayer);
    weaponCase = [];
    // refresh oldweapon
    let oldWeaponPlayer = [];
    oldWeaponPlayer = oldWeaponPlayer.concat(armes.find((c) => c.name == stockOldPlayerWeapon));
    oldWeaponPlayer[0].ligne = player.ligne;
    oldWeaponPlayer[0].colonne = player.colonne;
    oldWeaponPlayer[0].id = player.id;
    const img = $(oldWeaponPlayer[0].avatar);
    img.appendTo($('td[id=' + oldWeaponPlayer[0].id + ']'));
    console.log('old weapon',oldWeaponPlayer);
    oldWeaponPlayer=[];
    console.log(armes);
    console.log(player);
}