module.exports = function getHTML (requestOptions, callback) {

        /* Add your code here */
        var https = require('https');   

        var output = "";
        https.get(requestOptions, function (response) {
    
            var encode = response.setEncoding('utf8');
            
            response.on('data', function (data) {
            output += data.toString();
            });
        
            response.on('end', function() {
                callback(output);
            // console.log(output);        
        });  
    });    
    
}
    
//     function printHTML (html) {
//         console.log(html);
//         console.log('Response stream complete.');
        
//     }

//     function saveHTML (html) {
//         // callMyOtherFUNCTIONconsole.log(html);
//         console.log("");
//         console.log("saved")
//     }
    
    
//     var requestOptions = {
//         host: 'sytantris.github.io',
//         path: '/http-examples/step5.html'
//     };



//   getHTML(requestOptions,printHTML);
//   getHTML(requestOptions,saveHTML);
