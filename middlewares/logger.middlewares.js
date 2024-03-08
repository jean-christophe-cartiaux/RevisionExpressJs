const {request,response} = require("express")
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
const loggerMiddleware = (req,res,next)=>{
    console.log(`[${new Date().toLocaleTimeString()}]Hello Jean-Christophe
    [Info Requête] : ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ 
    [url] :${req.url} 
    [Query]:${JSON.stringify(req.query)}
    [Body]:${req.body}
    ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ \n`);
    next();
    //[Params]:${JSON.stringify(req.params)}

}

module.exports=loggerMiddleware