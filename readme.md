# Suivi de cours

## Préparation

* Demander aux éléves de créer un "repo" de cours chacun
* Ajouter les "repos" et noms des éléves dans `repos_eleves.json` [example](https://github.com/idris-maps/suivi-de-cours/blob/master/repos_eleves.json)

**ATTENTION** `nom` doit être unique. Si plusieurs élèves partagent le même prénom, ajoutez le nom de famille.

## Scripts

### `npm run repos:init`

Ce script clone tous les "repos" dans `repos_eleves.json`. Vous pouvez voir les "repos" dans le dossier `repos`. Chaque élève y a un dossier a son nom.

**ATTENTION** ce script prends un peu de temps. À n'utilisez qu'une seule fois pour initializer le cours une fois que vous avez tous les éléves dans `repos_eleves.json`.

### `npm run repos:pull`

Télécharger la dernière version de tous les "repos".

### `npm run file:exists`

Voir qui a créé un fichier.

example:

```
npm run file:exists file=exercices/exercice1.md
```

* `file=...` est le fichier à vérifier

**ATTENTION** il est important que les élèves utilisent le même nom de fichier. Dans ce cas ils doivent tous avoir un dossier `exercices` avec un fichier `exercice1.md`.

retourne:

```json
[
  "Alain: NON",
  "Aline: OUI",
  "Béatrice: NON"
]
```

### `npm run file:save`

Télécharger un fichier de tous les "repos".

example:

```
npm run file:save file=exercices/exercice1.md dir=exercice1
```

* `file=...` est le fichier à télécharger
* `dir=...` est le dossier dans lequel les fichiers vont être sauvés

Cette commande va créer un fichier avec la même extension que `file` dans `dir` pour chaque élève qui a fait l'exercice.

Si nous prenons les élèves ficitifs de l'example pour `npm run file:exists`, nous avons un seul fichier dans `dir`, celui d'Aline.

```
exercice1/aline.md
```

**ATTENTION** utilisez `npm run repos:pull` pour avoir les dernières versions des "repos" élèves avant d'utiliser cette commande.