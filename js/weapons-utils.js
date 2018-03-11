let armes = [{
    name: 'épée',
    degats: 10,
    colonne: "",
    ligne: "",
    avatar: '<img class="weapon" id="épée" src="img/eppe.png">'
  },
  {
    name: 'pioche',
    degats: 30,
    colonne: "",
    ligne: "",
    avatar: '<img class="weapon" id="pioche" src="img/hache.png">'
  },
  {
    name: 'AK47',
    degats: 40,
    colonne: "",
    ligne: "",
    avatar: '<img class="weapon" id="ak47" src="img/ak47.png">'
  },
  {
    name: 'laser',
    degats: 70,
    colonne: '',
    ligne: '',
    avatar: '<img class="weapon" id="laser" src="img/laser.png">'
  }
];

function generateWeapons(forbiddenIds) {
  let weapons = [];
  for (let j = 1; j < 4; j++) {
    const idNumberWeapon = getUniqPosition((j === 0) ? forbiddenIds : forbiddenIds.concat(weapons.map(w => w.id)));
    armes[j]['id'] = idNumberWeapon;
    armes[j].colonne = $('#' + idNumberWeapon).data('colonne');
    armes[j].ligne = $('#' + idNumberWeapon).data('ligne');
    $('#' + idNumberWeapon).html(armes[j].avatar);
    weapons = weapons.concat(armes[j]);
  };
  return weapons;
}