//! 1) Création du product router


const productRouter= require("express").Router();
const productControlleur = require("../controllers/product.controller");
const existingProductMiddleware = require("../middlewares/existingProduct.middleware");

//! 2) Setup des routes de product router :
// productRouter
productRouter.get('/',productControlleur.getAll)
productRouter.get('/fruits',productControlleur.getFruit)
productRouter.get('/:name([a-zA-Z]+)',existingProductMiddleware,productControlleur.getProduct),
productRouter.get('/category/:category',productControlleur.getByCategory),
//! 3) Export du product router :

module.exports=productRouter;
