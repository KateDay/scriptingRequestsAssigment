var https = require('https');                               


function getAndPrintHTMLBuff () {
    var output = "";

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
  https.get(requestOptions, function (response) {
 
    response.setEncoding('utf8');
  
    response.on('data', function (data) {
      output += data.toString();
    });
  
    response.on('end', function() {
    console.log(output);
    console.log('Response stream complete.');
    });
  
});
}
getAndPrintHTMLBuff();