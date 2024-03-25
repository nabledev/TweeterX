const express = require("express")
const app = express()

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


// Connexion pour la base donnees 
  const { Pool } = require('pg');
// a changer avec celui du docker-compose 
  const pool = new Pool({
    user: 'dbuser',
    host: 'db', // Nom du service de la base de données dans Docker Compose
    database: 'dbname',
    password: 'dbpass',
    port: 5432,
  });
    
  // Exemple de requête SQL
  pool.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête:', err);
      return;
    }
    console.log('Résultat de la requête:', result.rows);
    // Traiter les résultats ici
  });
  
  // Gestion des erreurs de connexion à la base de données
  pool.on('error', (err, client) => {
    console.error('Erreur inattendue sur le pool de clients PostgreSQL :', err);
    process.exit(-1);
  });
  
  // Pour garder l'application en vie
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', reason.stack || reason);
  });
  
  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
  });
  

