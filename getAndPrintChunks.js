var https = require('https');
function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    var callback = function(response) {
        console.log('In response handler callback!');

        response.on('data', function(chunk){
            console.log('--CHUNK--' + chunk.length + '--');
            console.log(`${chunk.toString()}\n`);
        })
    }
    console.log("Getting ready to make a request...");
    https.request(requestOptions, callback).end();
    console.log("Request has been made!");
}

console.log(getAndPrintHTMLChunks());
