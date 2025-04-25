const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
console.log("Body parsing middleware (urlencoded) added."); // Add this log
app.use(express.json()); // Also good practice to add this for JSON APIs
console.log("Body parsing middleware (json) added."); // Add this log

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour les sessions
app.use(session({
  secret: 'votre_clé_secrète',
  resave: false,
  saveUninitialized: true
}));

// Configuration de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

