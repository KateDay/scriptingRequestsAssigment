var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
    console.log(html.split("").reverse().join(""));
    console.log('Response stream complete.');
    
    
}

function saveHTML (html) {
    // callMyOtherFUNCTIONconsole.log(html);
    console.log("");
    console.log("saved")
}


getHTML(requestOptions, printHTML);
// getHTML(requestOptions, saveHTML);


//abc.toUpperCase(); 

// return getIt;