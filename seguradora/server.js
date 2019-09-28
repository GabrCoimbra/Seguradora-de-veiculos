const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(__dirname + '/src/app')); //aqui você define onde está o index.html da sua aplicação.

 
app.get('/*', (req, res) => {
res.sendFile(path.join(`$/src/$/index.html`));
});
 
app.listen(process.env.PORT || 8080);