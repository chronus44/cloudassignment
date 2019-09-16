const places = {         
    key: "AIzaSyBxURENJ3cs1GvFxrvNnagmXS5Aryrh-fo",     
    input: "coffee",
    inputtype: "textquery",
    fields: "formatted_address,rating"
}; 

module.exports.createPlacesOptions = function (query,number) {     
    const options = {         
        hostname: 'maps.googleapis.com',         
        port: 443,         
        path: 'maps/api/place/findplacefromtext/json?',         
        method: 'GET'
    } 
 
    const str = 'input=' + places.input +
                '&inputtype=' + places.inputtype +
                '&fields=' + places.fields +
                '&key=' + places.key
    ;     
    options.path += str;     
    return options; 
}

module.exports.createPage = function (myTitle, dataToShow){
    return `<!DOCTYPE html>
            <html>

            <head>
                <title>${myTitle}</title>
                <link rel="stylesheet" href="./src/styles.css" />
                <meta charset="UTF-8" />
            </head>

            <body>
                <h1>${myTitle}</h1>
                <div>
                <a href="coffeelst"
                ${dataToShow}
                </div>
                <script src="src/index.js">
                </script>
            </body>

            </html>`
}

