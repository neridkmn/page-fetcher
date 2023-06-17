/**
 * It should take two command line arguments:

a URL
a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message 
like Downloaded and saved 1235 bytes to ./index.html.
 */

const request = require('request');
const fs = require('fs');

request(process.argv[2], (error, response, body) => {
  fs.writeFile(process.argv[3], body, (error) => {
    if (error) throw error;
    console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}.`);
  })
})



