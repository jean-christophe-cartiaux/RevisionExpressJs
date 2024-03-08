const productControlleur ={
    getAll:(req,res)=>{
        if(!req.query.category){
        res.send(`<h1>tous les produits (aucun filtre selectionné)</h1>`)}
        else{
            res.send(`<h1>Tous les produits triés avec la query ${JSON.stringify(res.query)}</h1>`)
        }},
        getProduct:(req,res) =>{
            //! :/name => segement dynamique
            //! Quand je vais taper localhost:8080/products/banane:
            //localhost:8080/products => partie statique
            // /banane => partie dynamique : je peux mettre le nom que je veux ici, il se retrouvera stocké dans mon paramètre name

            //! pour récupérer la valeur qyu a été tapée dans le segment dynamique,il se trouve dans req.prams.nomDuSegment
            //! req.params est un objet avec tous es parametre (segemnt dyn) de la route 
            res.send(`
            <h1> Affichage du produit ${req.params.name}</h1>
            `) 
        },
        getByCategory : (req,res)=> {
            res.send(`<h1> Affichage des produits de la category </h1>`)
        },
        getFruit : (req,res) =>{
            res.send(`<h1> Affichage des fruits </h1>`)

            //! pour générer une erreur on utilise le throw pour s'assuré que cela fonctionne :-) 
            // throw Error('impossible d\'accéder aux fruits');
        }

}

module.exports=productControlleur;