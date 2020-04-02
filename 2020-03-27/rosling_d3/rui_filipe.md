**Comment et pourquoi le code est t-il divisé en plusieurs fichier?**

- nous allons diviser le code en plusieurs fichiers pour après les importer dans `index.js`.
- nous le divisons pour que chaque fichier ai son utilité par exemple  il a un fichier pour les dimensions celui ci il est pour le même pour tous , un fichier qui gérera les échelles et l'index qui gérera l'affichage dans le dimension et les échelles. d'autres fichiers existerons pour gérer l'année  par exemple elements.js



**Comment le nom du pays est t-il afficher quand la souris passe sur une bulle?**

- tout d'abord créer un mousover (qui n'est pas suffisant car beaucoup de problèmes)
- après faut distinguer la bulle la ou il est dessus
- après il  faut ajouter un événement quand la souris n'est plus au dessus de la bulle qui videras le contenu.