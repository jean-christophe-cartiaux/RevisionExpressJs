//! Point d'entrer de mes routes : Va définir tous les fichier de routing à consulter 


//! 1) création du routeur : 
const router=require("express").Router();

// import des sous routers
const productRouter = require("./product.router");
//! 2) Setup du router :
//router.use('users','userRouter')
router.get('/',(req, res)=>{
    res.send(`
    <h1>Bienvenue sur la page d'accueil</h1>
    <p>Testez les requêtes suivantes : </p>
    <ul>
        <li> <a href="http://localhost:8080/products">localhost:8080/products</a> </li>
    </ul>`)
})
router.use('/products',productRouter);


//! 3) Export du router :

module.exports=router;