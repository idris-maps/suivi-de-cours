## Comment et pourquoi le code est t-il divisé en plusieurs fichier?

### Comment

En faisant des import dans un fichier principal qui relie tous les autres fichiers

### Pourquoi

Pour éviter d'avoir des fichiers de 2000 lignes. 
Afin de retrouver des parties de code plus facilement
Afin d'organiser le code

## Comment le nom du pays est t-il affiché quand la souris passe sur une bulle?

Il y a un listener mouseover sur les bulles

Ce listener affiche une balise `<text>` 20px en dessus de la position du curseur. On ajoute à l'intérieur de `<text>` le nom du pays grace à l'attribut `d.name`. En effet, grace à d3, les données sont liées aux éléments `svg`. Donc si on sait quelle bulle on survole, on peut aisément récupérer le nom du pays correspondant. 

Il y a également un listener mouseout pour enlever tous les effets lorsque le curseur sort de la bulle. Il y a également un listener mousemove pour que le nom du pays suive le curseur. Celui-ci actualise la position du curseur à chaque mouvement.