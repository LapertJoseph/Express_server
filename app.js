const express = require('express');
const app = express();
const routes = require('./routes/user_routes');
app.use(express.json());

// Résoud le problème de Bigint
BigInt.prototype.toJSON = function() { return this.toString() }; 

app.get('/', (req, res) => {
    res.send('Hello World');
    
});

const PREFIX = '/api'
app.use(PREFIX, routes);
const port = 8000;
app.listen(port, () => {
    console.log(`server listening on ${port}`);
});