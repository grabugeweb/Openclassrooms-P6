# Tests unitaires

## Principe
Le principe du test unitaire est de tester unitairement une fonction. Il convient donc afin que tes tests soient simples d'éviter au maximum les variables globales. Chaque fonction doit idéalement recevoir des arguments et avoir une instruction de retour. Les tests unitaires en JS sont réalisés avec la librairie Jasmine

## Démarrage des tests
Ouvrir dans le navigateur le fichier HTML placé dans le répertoire `tests/jsamsine/SpecRunner.html`

## Ajouter des tests unitaires
Il convient pour cela de faire 2 choses:
* Ajouter le fichier à tester dans le fichier `SpecRunner.html`. Dans le cas que je te propose, j'ai commencé les tests sur le fichier `play-utils.js`. C'est pour cela que tu trouveras la balise `<script src="../../js/play-utils.js"></script>`
* Ajouter le fichier de spécification qui contient les tests dans le fichier `SpecRunner.html`. J'ai donc écrit les tests dans `PlayUtilsSpec.js`. C'est pour cela que tu trouveras la balise `<script src="spec/PlayUtilsSpec.js"></script>`

## Plus d'infos
https://jasmine.github.io/api/edge/global

## Instructions pour la suite
Prends exemple sur les 3 tests unitaires de mon exemple dans `PlayUtilsSpec.js` pour en écrire quelqu'uns qui te semblent pertinents. N'hésite pas à faire du refactoring pour éliminer l'utilisation des variables globales (variables qui ne sont pas présentes dans les arguments d'une fonction)
