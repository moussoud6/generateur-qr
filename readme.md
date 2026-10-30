# Générateur de QR code

Petite application Node.js qui génère le QR code d'un site à partir de son URL.

## Installation

1. Ouvrir le dossier `generateur-qr` dans le terminal
2. Installer les dépendances : `npm install express qrcode`

## Lancement

1. Démarrer le serveur : `node serveur.js`
2. Ouvrir `http://localhost:3000` dans le navigateur

## Utilisation

1. Taper l'URL d'un site dans le formulaire (ex : https://www.google.com)
2. Cliquer sur "Générer"
3. Le QR code du site s'affiche sous le formulaire

## Technologies

- Node.js
- Express
- qrcode