//Declaring varibles
const express = require('express')
const bp = require('body-parser')
const fs = require('fs')
const countryData = require('./index.js');

//Creating new instance of express
const app = express();
app.use(bp.urlencoded({extended: false})); //NOT SURE ABOUT THIS LINE
app.use(bp())

//got rid of the config file stuff here
const PORT = 9000;

//Get call
app.get('/homepage', (request, response) => {
    response.status(200).send({message: countryData})
})

//

//Turning on server
app.listen(PORT, () => console.log(`Server is running at part ${PORT}`))