const express = require("express"); 
const bodyParser = require('body-parser');
const massive = require("massive");
require("dotenv").config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
    console.log("Database connected");
})

app.post('/api/properties', controller.create);
app.get('/api/properties', controller.getAll);
app.delete('/api/properties/id', controller.deleteProp);

app.listen(4000, () => {
    console.log("Listening on 4000")
});