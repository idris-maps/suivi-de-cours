### Créer le graphique avec d3

1. Comment et pourquoi le code est t-il divisé en plusieurs fichier?

   Pour divisé le code en plusieurs parties et le rendre plus clair si on fait un graphique très complexe. On aimerait que chaque partie soit séparée, afin de modifier les fichiers plus facilement.

   Chaque fichier à son "travail". Exemple : config.js est utilisé que pour la dimension du graphique.

2. Comment le nom du pays est t-il afficher quand la souris passe sur une bulle?

   Elle est affichée juste en dessus de notre souris, car elle reprend les positions x et y.

   Grâce à mouse(this) on comprend que le texte va suivre la souris.