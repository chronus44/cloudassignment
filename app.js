const express = require('express');
const https = require('https');
const coffee = require("./routes/coffee.js");

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {

    // 1. Request Coffee shop list to google places
    data = "";
    const placesReq = https.request(coffee.createPlacesOptions, (placesRes) =>{
        // request

        // get json data
        data = "";
    });
    // 2. Render HTML of data
    var myTitle = "Coffee seeker"
    var htmlOfData = `
        <div id="gmap">

        </div>
    `;
    // 3. Send HTML result to client as response
    res.writeHead(200,{'content-type': 'text/html'});
    res.write(coffee.createPage(myTitle, htmlOfData));
    placesReq.end();
    res.end();
});
app.get('/coffeelist' )

// app.use(coffee); 

app.listen(port, function () {
    console.log(`Express app listening at http://${hostname}:${port}/`);
});
