const express = require("express")
const app = express()


// cors 
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
    user: 'test',
    host: 'local_pgdb', // Nom du service de la base de données dans Docker Compose
    database: 'twitter',
    password: 'test',
    port: 5400,
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
  

// route : req = request / res = response 

app.get("/tweets" , (req,res) => {
  tweetsCollection.find({}).toArray()
  .then(t => {
      t.sort( (a,b) => b.timestamp-a.timestamp)
      res.json(t)
  })
})

// app.post("/post", (req, res) => {
// // Vérifier les données
// // -> pour la sécurité
// const tweet = {
//   user: req.body.user,
//   content: req.body.content,
//   timestamp: Date.now()
// }

// tweetsCollection.insertOne(tweet).then(r => {
//   res.json(r)
// })
// })


// app.post("/login", (req, res) => {

// usersCollection.find({ 
//   login: req.body.login,
//   password: req.body.password
// }).toArray()
//     .then(existingUsers => {
//       if (existingUsers.length == 0) {
//         res.json({ error: true })
//       } else {
//         res.json({ 
//           login: req.body.login,
//           password: req.body.password,
//           name: existingUsers[0].name
//         })
//       }
//     })
// })


console.log("started on port 7410")
app.listen(7410)