# Asmae_ElHamzaoui-DevBook

## Contexte du projet
DevBook est une application web permettant aux utilisateurs (développeurs) de gérer une collection de livres techniques .
## Fonctionnalités principales


- Ajouter / modifier / supprimer des livres.
- Classer les livres par catégories .
- Suivre le statut de lecture .
- Rechercher et trier les livres .
- Affichage dynamique avec pagination .
- Stockage des livres et utilisateurs en base de données SQL.
- Backend Node.js avec gestion des routes et requêtes.
- Utilisation de la POO avec des classes JavaScript (Livre, Utilisateur…).
- Diagrammes UML pour modéliser les besoins (use case) et la structure (classes).

## Technologies Requises
-   HTML
-   JS  natif
-   express.js et node.js
-   SQL ( base de donnée MySQL)

## Table des matières

-  Lien vers le repository GitHub contenant :[Repo · Asmae_ElHamzaoui-DevBook](https://github.com/Youcode-Classe-E-2024-2025/Asmae_ElHamzaoui-DevBook)



-  Le diagramme du cas d'utilisation :
![Diagramme de cas d'utilisation ](images/UCD.png)

-  Le diagramme de classe :
![Diagramme de classe ](images/CD.png)



## Installation

### Cloner le dépôt

Pour installer et démarrer l'application, commencez par cloner ce dépôt sur votre machine locale :
 

# Installation et Configuration du Projet

## Prérequis

Avant de cloner ce projet, assurez-vous d'avoir les outils suivants installés :

1. **Serveur Web** : Apache (inclus dans XAMPP, WAMP, ou MAMP).
2. **Base de Données** : MySQL.
3. **PHP** : Version compatible avec les scripts utilisés (au minimum PHP 7.4 recommandé).
4. **Git** : Pour cloner le dépôt.

## Installation

### Étape 1 : Cloner le projet

```bash
git clone https://github.com/Youcode-Classe-E-2024-2025/Asmae_ElHamzaoui-DevBook
cd Asmae_ElHamzaoui-DevBook
```

### Étape 2 : Configuration de l'environnement

1. **Serveur Apache et MySQL**  
   - Utilisez un logiciel comme XAMPP, WAMP, ou MAMP pour démarrer Apache et MySQL.  
   - Placez les fichiers du projet dans le répertoire `htdocs` (pour XAMPP) ou dans le répertoire équivalent de votre serveur local.

2. **Base de Données**  
   - Ouvrez phpMyAdmin (accessible via `http://localhost/phpmyadmin`).  
   - Créez une base de données avec le nom  : `devbook`.  
   - Importez le fichier SQL contenant la structure et les données :
     - Si votre fichier SQL n'existe pas, créez-le et ajoutez-le au dépôt pour faciliter l'installation.

3. **Fichier de Configuration**  
   - Vérifiez le fichier `database.js` et mettez à jour les paramètres de connexion à la base de données si nécessaire :
     ```php
     $servername = "localhost";
     $username = "root"; // Nom d'utilisateur MySQL par défaut
     $password = "";     // Mot de passe par défaut (vide pour XAMPP)
     $dbname = "devbook";
     ```

### Étape 3 : Exécution du projet

1. Lancez le serveur Apache et MySQL via votre environnement local (exemple : XAMPP).
2. Accédez à votre projet en ouvrant un navigateur et en allant à l'adresse suivante :
   ```
   http://localhost
   ```

## Fonctionnalités

- **Formulaires dynamiques** : Gestion via PHP et JavaScript.
- **Interaction avec une base de données MySQL** : Stockage et récupération des données.
- **Style et animations** : Ajoutés avec CSS et JavaScript.


## Outils Utilisés

- **Serveur Web Apache** : Hébergement du projet localement.
- **MySQL** : Base de données pour stocker les informations.
- **EXPRESS.JS NODE.JS** : Traitement côté serveur.
- **HTML, CSS, JavaScript** : Frontend du projet.