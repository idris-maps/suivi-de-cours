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

