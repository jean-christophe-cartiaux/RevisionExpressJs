

const {request,response}=require("express")
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {*} next 
 */
const existingProductMiddleware = (req,res,next)=>{
    const existingProducts =['banane','pêche','pomme','patate','melon','tomate'];
    if(existingProducts.includes(req.params.name)){


        next();
    }
    else{
        res.send("<h1>Ce produit n'est pas en stock </h1>");
    }
}
module.exports=existingProductMiddleware