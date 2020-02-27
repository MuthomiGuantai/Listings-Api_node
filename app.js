const express = require('express');

const app = express();

//Routes
app.get('/', (req, res) => {
    res.send("we are on home");
})

//listen to server
app.listen(3000);