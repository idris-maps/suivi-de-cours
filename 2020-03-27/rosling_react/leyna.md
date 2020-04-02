### Différences entre `d3.select` et `react`

1. Comment les bulles sont-elles créées dans cette version?

   - Avec le format de fichier JSX. On renomme le fichier index.js en index.jsx et ajouter le script dans le fichier html.
- Elles sont créer avec un code qui ressemble à l'HTML (<circle/>)
   - On crée un code qui génère une bulle :
  Elles prennent des données qui corresponds à la bulle et une valeur d'année. On utilise key pour avoir un identifiant. Afin que chaque élément à un identifiant (et pour les retrouver). On évite beaucoup de problèmes en utilisant key.
   - (On peut faire des attributs dynamiques en utilisant JSX.)
- Un autre code est utilisé pour générer plusieurs bulles avec .map() sur les données (data).
   
2. Comment les données sont elles jointes aux éléments DOM avec `react`?

   On utilise render pour ajouter le composant Graph à la div.

