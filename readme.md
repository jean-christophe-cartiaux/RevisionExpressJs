# Créer un projet Express
## 1) Initialiser un projet node
### Créer le projet Node
```
    npm init
```
### Créer le fichier app.js (ou index.js)

## 2) Installer Express et créer le serveur
### Installation :
```
    npm i express
```
### Création du serveur :
Dans le app.js :
```js
//! 1) Importer express :
const express = require("express");

//! 2) Créer le serveur :
const app = express();

//! 3) Le lancer sur un port :
app.listen(8080 , () => {
    console.log(`[STARTED] Server on port 8080`);
})
```

## 3) Setup du lancement de l'app :
### Installation de Nodemon
Permet de lancer l'application en tâche de fond. On peut alors modifier notre code, et à chaque sauvegarde, il est recompilé et notre serveur se relance tout seul.
Il ne nous sert qu'en développement, du coup, on rajoute l'option -D pour le mettre dans les dépendances de dev
```
    npm i -D nodemon
```

### Création du script start pour lancer l'app :
Dans le fichier package.json, on rajoute le script start
* nodemon -> pour lancer l'app avec nodemon
* --file-env=.env -> Pour indiquer que le fichier d'environnement qu'il doit charger au lancement est celui qui s'appelle .env
```json
"scripts": {
    "start" : "nodemon --env-file=.env app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## 4) ⚠ Mise sur GIT : Créer un fichier gitignore
* Installer extension gitignore de Code Zombie
* Appuyer sur F1 ou Ctrl+Maj+P ou > dans la barre de cherche
* Add gitignore
* Choisir projet Node
```
    git init
```

## 5) Le routing
On va devoir indiquer à notre serveur, les url qu'il connait avec avec quelles méthodes les consulter, pour qu'il puisse répondre en conséquence
### Première option : Directement dans l'app :
```js
    app.get('/pouet', (req, res) => {})
```
Ceci rajoute la possibilité de consulter avec la méthode get, la route localhost:8080/pouet.
</br>

**Inconvénient** : Une application, au bout d'un moment commence à avoir beaucoup de routes, si on met tout dans l'app, ça devient un joyeux bazar.
### Deuxième option : Dans des fichiers de routing :
#### Créer un fichier qui sera le point d'entrée (index.js)
```js
//! 1) Création du router :
const router = require("express").Router();

// import des sous routers
const productRouter = require("./product.router");

//! 2) Setup du router :
// router.use('/users', 'userRouter');
router.use('/products', productRouter);

//! 3) Export du router :
module.exports = router;
```
### Créer un fichier pour chaque catégorie de sous-routes que nous aurons (productRouteur)
```js
//! 1) Création du product router
const productRouter = require("express").Router();

//! 2) Setup des routes de product router
//productRouter.method
    // get (récupérer des données)
    // post (envoyer des données)
productRouter.get('/', (req, res) => {
    res.send('<h1>Tous les produits</h1>')
})

//! 3) Export du product router
module.exports = productRouter;

```
### Pour rajouter un paramètre à une route :
Il faudra rajouter un segment dynamique (représenté par les :) à notre route
Ainsi, nous avons maintenant disponible
* localhost:8080/products/banane
* localhost:8080/products/patate
* localhost:8080/products/pomme
* ...
```js
    productRouter.get('/:name', (req, res) => {})

```

## 6) Les controlleurs 
Pour ne pas mettre toute la logique dans les fichiers de route, on externalise cette logique dans des controlleurs. Notre routeur va ensuite appeler la méthode à exécuter en fonction de la route.

Le controlleur reçoit la requête, fait un traitement (cela peut être contacter une api externe, consulter une DB etc...) et renvoie une réponse (Cette réponse peut être sous format string, fichier, json (api), render (view) etc...)

## 7) Les middlewares
De son joli (non) nom français "intergiciel" (nom que personne n'utilise à part les monsieurs de l'académie française)
Un middleware intercepte une requête, effectue un traitement et soit il continue la requête, soit il met fin à la requête.

On compte 3 grands types de middlewares :
* Application level middleware : un middleware qui sera sur toute l'application, il intercepte donc TOUTES les requêtes qui passent **voir loggerMiddleware**

* Router level middleware : un middleware qu'on va utiliser sur une (ou plusieurs) route(s) et qui va donc intercepter seulement la (ou les) route(s) sur la(les)quelle(s) on a mis notre middleware **voir existingProductMiddleware**

* Error middleware : un middleware un peu à part, qui intercepter toutes les erreurs de notre serveur (⚠ on devra toujours le mettre avant le listen de notre app, mais après tout ce qu'on a setup sur l'app) **voir errorMiddleware**