function getAndPrintHTML (options) {

    /* Add your code here */
    var https = require('https');   

    function getAndPrintHTMLBuff () {
        var output = "";
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
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  
getAndPrintHTML(requestOptions);