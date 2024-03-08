

const errorMiddleware=(error,req,res,next)=>{
    console.log(`
    [${new Date().toLocaleTimeString()}] Une erreur est survenue ! 
    ${error.message}
    `);
    res.send(`<h1> Une erreur est survenue ! </h1>
    <p>${error.message}</p>
    `)
    
}

module.exports=errorMiddleware