# Suivi de cours

## Préparation

* Demander aux éléves de créer un "repo" de cours
* Ajouter les "repos" et noms des éléves dans `repos_eleves.json`

## Scripts

### `npm run repos:init`

Ce script clone tous les "repos" dans `repos_eleves.json`.

**ATTENTION** ce script prends un peu de temps. À n'utilisez qu'une seule fois pour initializer le cours une fois que vous avez tous les éléves dans `repos_eleves.json`.

### `npm run repos:pull`

Mettre à jour tous les "repos" s'ils ont été modifiés.

### `npm run file:exists`

Voir qui a créé un fichier.

example:

```
npm run file:exists file=exercices/exercice1.md
```

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
```npm run file:exists

* `file=...` est le fichier à télécharger
* `dir=...` est le dossier dans lequel les fichiers vont être sauvés

Cette commande va créer un fichier avec la même extension que `file` dans `dir` pour chaque élève qui a fait l'exercice.

Si nous prenons les élèves ficitifs de l'example pour `npm run file:exists`, nous avons un seul fichier dans `dir`, celui d'Aline.

```
exercice1/aline.md
```

**ATTENTION** utilisez `npm run repos:pull` pour avoir les dernières versions des "repos" élèves avant d'utiliser cette commande.