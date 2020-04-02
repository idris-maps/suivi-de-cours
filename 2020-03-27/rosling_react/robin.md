## `Comment` les bulles sont-elles créées dans cette version?

On crée un objet "Bubble" permettant de créer une bulle dynamiquement en y injectant les données dynamiquement grâce à la notation `{}`. Les bulles sont générée directement sous forme d'élément `<circle>`.  

On crée ensuite un tableau "Bubbles" dans le quel on ajoute une bulle "Bubble" pour chaque élément de nos `data`. On lie, pour chaque élément, une clé unique et les "attributs" data et "yearIndex" précédemment définis. 

## Comment les données sont-elles jointes aux éléments DOM avec react?

Les données sont inscrites dans les attributs des balises html.