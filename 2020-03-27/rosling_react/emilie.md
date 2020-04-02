###### 1. Comment les bulles sont-elles créées dans cette version? 

Il faut créer un composant qui lui, génère une bulle. Le composant prends un objet avec deux clés, donc ici "data" (avec la méthode .map()) et "yearIndex". Il faut aussi avoir un identifiant unique, ici "key", qu'on associe à l'identifiant du pays, qui est "ego" dans cet exemple. Quand on doit faire des itérations de composant en react, il est fortement recommandé d'utiliser "key" justement, autant pour les performances que pour éviter des erreurs dans la console.



###### Comment les données sont elles jointes aux éléments DOM avec `react`?

En premier lieu, on voit qu'on peut reprendre tels quels les fichiers créée pour le graphique fait avec d3 :

- [`index.html`](src/index.html)
- [`index.css`](src/index.css)
- [`config.js`](src/config.js) 
- [`scales.js`](src/scales.js) 

La seule chose à faire avec ces fichiers, c'est de changer l'extension de index.js en index.jsx et changer un peu le code à l'intérieur. Ce qui change surtout, c'est que React utilise le format JSX. Ce JSX doit être compilé en "vrai" JavaScript.



Voir détails de la marche à suivre grâce au fichier readme.md.

Ou voir lien correspondant : https://github.com/idris-maps/heig-datavis-2020/tree/master/modules/rosling/graphique_react 