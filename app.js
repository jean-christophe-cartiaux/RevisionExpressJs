//! 1) Importer express :
const express = require('express');

//! 2) Créer le serveur : 
const app = express();
const loggerMiddleware=require("./middlewares/logger.middlewares");
app.use(loggerMiddleware);
//! pas cool on va faire un fichier routing pour indiquer toute no route de façon lisible :-) 
// app.get('/pouet',()=>{})
// app.get('/cacahuete',()=>{})

// .. et indiquer à notre app, qu'elle doit l'utiliser
const router = require("./routes");
app.use(router);


const errorMiddleware = require('./middlewares/error.middlware');
app.use(errorMiddleware)
//! 3) Le lancer sur un port :
//? processe.env.PORT => variable d'environement
//? On aura besoin d'indiquer lors du lancement de notre application (npm start) le fichier  .env qu'il devra aller mettre dans les variables
app.listen(process.env.PORT,()=>{
    console.log(`[STARTED] Server on port ${process.env.PORT} `);
})
