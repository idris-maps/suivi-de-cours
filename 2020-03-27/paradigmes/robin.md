## programmation fonctionnelle

Ce paradigme de programmation est basé sur l'utilisation des **fonctions**. Là où la POO utiliserait un objet, la PF utilise une (ou plusieurs) fonctions.  Ce principe amène à utiliser des **fonctions de haut niveau**, c'est à dire des fonctions imbriquées ou bien des fonctions pour créer des fonctions.

On va également **éviter d'itérer** des actions. On va éviter par exemple d'utiliser des boucles `while` ou `for`. À la place, on va utiliser des fonctions comme `.map` ou `.reduce`.

Un dernier point important est que l'on va considérer les données comme **immuables**. C'est à dire qu'une fois qu'une donnée, comme un tableau, est créée, on ne va pas la modifier. Si on veut la modifier, on va créer une copie. Cependant, afin d'éviter de la redondance, du gachis d'espace ou du temps de copie, on utilisera le principe du **"structural sharing"**. Celui-ci permet de lier certaines données grâce à des nœuds. Ainsi, si deux tableau sont les mêmes, à l'exception d'une valeur, toutes les données similaires aux deux tableau seront en fait techniquement les mêmes données. Car une variable sera en fait un pointeur qui pointera sur plusieurs morceaux de donnée. Des librairies comme Mori ou Immutable.js permettent de faire ceci.

## programmation orientée objets

La POO est un autre paradigme de programmation. Il est notamment utile pour **décrire** des choses de la vie réelle, comme par exemple des livres, des personnes ou des films. 

Un **objet** est décrit par des **attributs** définis. Par exemple, un objet "film" aura toujours un titre, une durée et des acteurs qui le décriront. Un attribut peut également être un objet, car lorsque l'on crée un objet, on crée un nouveau type de donnée.

Pour créer un objet, on doit d'abord créer une **Classe**. La classe est en quelque sorte le moule de l'objet. Ou en d'autres mots, le template de l'objet. C'est la classe qui définit les règles de l'objet, quels attributs il devra avoir et les fonctions dont cet objet disposera.

Ce qui m'amène à un nouveau point. Les objets disposent de fonctions propres, que l'on appelle plus couramment **méthodes**. Une méthode obligatoire à chaque objet est le **constructeur**. Cette méthode permet de créer un objet. Ensuite on peut ajouter toutes les méthodes qu'on veut. Par exemple une méthode pour ajouter une page à un livre, ou bien une méthode qui retourne le nombre de mots d'un livre.

Les objets sont des éléments destinés à être modifiés et manipulés. Contrairement à la PF, on ne considère pas les données comme immuables. 