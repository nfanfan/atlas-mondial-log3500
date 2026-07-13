# Atlas Mondial Interactif

Projet réalisé dans le cadre du cours LOG3500 - Conception et programmation de sites Web I.

## Description

Application web permettant de rechercher un pays et d'afficher ses informations essentielles (drapeau, capitale, population, région, monnaie, langues) via l'API REST Countries (v5).

## Technologies utilisées

- HTML5 sémantique
- CSS3 (Flexbox, Media Queries)
- JavaScript (Fetch API, async/await)
- API : [REST Countries v5](https://restcountries.com/docs)

## Structure du projet
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
## Fonctionnement

L'utilisateur saisit le nom d'un pays dans le formulaire. L'application interroge l'API REST Countries et affiche une carte d'identité du pays (drapeau, nom, capitale, population, région, monnaie, langues).

## Note sur l'API

Ce projet utilise la v5 de l'API REST Countries, qui nécessite une clé d'authentification (Bearer token), suite à la mise hors service de la v3.1.
