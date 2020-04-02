**Comment les bulles sont-elles créées dans cette version?**

- Créons un composant qui génère une bulle.
- Pour le composant `Bubbles` il faut utiliser la méthode `.map()` sur les données `data`. ça permettra de retourner une seul bubble à la quel on passe dans `data` et `yearIndex` comme si c'était des attributs d'un élément HTML.
- avec key on lui passe l'identifiant pays `geo`. Quand nous itérons des composants `react`, il est recommandé d'ajouter `key` pour des raisons de performance. Et si nous ne le faisons pas, nous avons des erreurs dans la console.



**Comment les données sont elles jointes aux éléments DOM avec `react`?**

React utilise un format appellé JSX. C'est une manière de manipuler le [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) qui ne fait pas partie du javascript standard. Le JSX doit être compilé en "vrai" javascript.

Parcel que j'utilise ici, le fait automatiquement. Si on utilise `webpack` on doit utiliser [`babel-loader`](https://github.com/babel/babel-loader) pour compiler le JSX en JS.