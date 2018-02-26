function generatedFights(currentPlayer, otherPlayer) {

    // Player meets weapon's case
    for (let j = 0; j < 4; j++) {
        if (currentPlayer.id == armes[j].id) {
            // update currentPlayer object
            
            currentPlayer.arme = armes[j].name;
            armes[j].id=currentPlayer.name;
            
            currentPlayer.arme = armes[j].name;
            armes[j].id=currentPlayer.id;

            $('#'+currentPlayer.id).fadeIn();

            console.log(currentPlayer);
            console.log(armes[j]);
            // update weapon object
        };
    };








};