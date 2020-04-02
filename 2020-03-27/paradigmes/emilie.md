######  1. Décrivez ce qu'est la programmation fonctionnelle

C'est un paradigme de programmation.

Il existe deux paradigmes de programmation différents:

- la POO = programmation orientée objets => ce qui correspond plutôt à d3
- la PF = la programmation fonctionnelle => ce qui correspond plutôt à react

En programmation fonctionnelle, **on parle de fonctions**, car elles sont le fondement de ce type de programmation. **Une fonction est simplement quelque chose qui prend quelque chose en entrée, et qui donne quelque chose en sortie**. La PF est une façon de coder et une manière d'approcher un problème et les tâches qui en découlent.  

Exemple 1 - fonction PURE : 

```
function salutation(prenom) {
	return "Hello, je m'appelle " + prenom;
}

// Affichage: Hello, je m'appelle Emi
salutation("Emi"); 

```

Exemple 2 - fonction NON pure : 

```
let nom = "Emi";

// Il n'y a volontairement pas d'argument dans salutation()
function salutation() {
	// On fait un console.log au lieu de return
	// Affichage: Hello, je m'appelle Emi
	console.log()"Hello, je m'appelle " + prenom);
}

```

Au lieu de faire quelque chose comme une recette de cuisine qui est structuré en étapes, et qui est très déclarative, comme ici dans l'exemple 3 - SANS fonctions : 

```
let nom = "Emi";
let salutation = "Hello, je m'appelle ";

// Affichage: Hello, je m'appelle Emi
console.log(salutation + nom);
```

Les fonctions codées sont dites "**pures**", ce qui permet d'éviter certains bugs ou effets secondaires rencontrée en POO. Aussi, en PF, il y a une séparation claire entre les données et la logique. <u>Finalement, ces fameuses fonctions pures, qui ne dépendent que des arguments passés, retournent toujours les mêmes résultats, ce qui garanti la fiabilité du programme</u>.

Mais pour cela, il faut que les objets soient invariables, autrement on se retrouve dans me même cas de figure peu fiable de la POO.

Un autre point important de la PF sont les **fonctions d'ordre supérieur**. Ce sont des fonctions qui peuvent:

- prendre en entrée d'autres fonctions
- renvoyer une fonction en tant que sortie

De ce fait, on traite les fonctions comme des objets eux-mêmes : ils peuvent être passés à d'autres fonctions.

Exemple imagé simple de fonction d'ordre supérieur :

```
function ajoutAdjectif(adjectif) {
	// Retourne une fonction !
	return function (string); {
		return string + " " + adjectif;
	};
}
let devenirCool = ajoutAdjectif("cool");

// Affiche: une vidéo cool
devenirCool("une vidéo");
```



**De plus, en PF, on évite de faire des itérations** (for, while). On utilise plutôt des fonctions d'ordre supérieur comme map(), reduce(), filter(), qui prennent une entrée, mais aussi une fonction qu'on va lui appliquer.

**On évite aussi la mutation des données**, donc on évite la mutabilité. Ici, le terme "mutation" veut juste dire changer les objets de place. **On veut de l'immuabilité**. Par exemple, on peut se servir de map() lors qu'on a un tableau pour en faire une copie "propre" selon nos désirs, et on évite certains bugs et prises de tête inutiles.

Il y a aussi **les structures de données persistantes**, et **le partage structurel.**

On peut utiliser des **librairies** si on le souhaite, mais ce n'est pas obligatoire.

Vidéo YouTube relative au sujet : https://www.youtube.com/watch?v=e-5obm1G_FY



######  2. Décrivez ce qu'est la programmation orientée objets

la POO = programmation orientée objets => ce qui correspond plutôt à d3

C'est une approche qui représente le monde qu'on connaît tous sous la forme d'objets. C'est quelque chose de très intuitif, car on peut facilement faire des parallèles avec la vraie vie. 

Exemple: pour représenter une voiture, on va créer une classe qui englobera un objet de type voiture. On va pouvoir lui ajouter des attributs : des roues, un volant, des vitres, un coffre, des sièges, un moteur, etc. Les actions que pourront faire la voiture sont des fonctions: accélérer, ralentir, etc. 

En bref, la classe englobe l'objet, qui lui est fait d'attributs et de fonctions.

Vidéo YouTube relative au sujet (moins pertinente que la première vidéo): https://www.youtube.com/watch?v=qMdxExJCD5s