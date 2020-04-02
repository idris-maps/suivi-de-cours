######  Comment et pourquoi le code est-t-il divisé en plusieurs fichiers? 

Chaque fichier possède une partie du code.

C'est pour pouvoir pouvoir mieux s'y retrouver, et faire des appels de scripts de manière structurée.

###### Comment le nom du pays est t-il affiché quand la souris passe sur une bulle?

Dans le fichier index.js, les lignes de codes 18 à 43 gère l'effet de mouseover sur les bulles des pays, et fait donc apparaître le nom du pays concerné. C'est entre autres grâce à "this", qui est le contexte - plus simplement notre élément - dans lequel la fonction est appelée. d3 demande d'avoir un contexte, du coup on est bon de ce côté là, grâce à la fonction "mouse". 

Il y a aussi le fichier elements.js qui permet l'affichage du nom du pays quand la souris passe sur une bulle. Le code qui concerne cette partie de l'affichage est surtout à propos de comment sera affiché l'information (position au dessus de la souris, taille du texte, apparition et disparition du texte après être sorti de la bulle, etc.).

Pour plus de précisions : https://github.com/idris-maps/heig-datavis-2020/tree/master/modules/rosling/graphique_d3 

