require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/user_routes');
const cors = require('cors')
app.use(express.json());

// Résoud le problème de Bigint
BigInt.prototype.toJSON = function() { return this.toString() }; 

const PREFIX = process.env.NODE_ENV == 'dev' ? '/api' : '/' ;

if (process.env.NODE_ENV === "dev") {
    if (process.env.NODE_ENV === 'dev') {
        app.use(cors({
            origin : "http://localhost:3000",
            credentials: true
        }))
    }
}

app.get(PREFIX, (_req, res) => {
    res.status(200).json({
        success: 'Vous etes connecté !',
    });
});

app.use(PREFIX, routes);

app.listen(process.env.PORT, () => {
    console.log(`server listening on ${process.env.PORT}`);
});