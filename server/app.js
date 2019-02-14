// Vars
const express = require('express');
const app = express();
const path = require('path');
const port = 4000;


/* ********************************
    Redirection rules
   ***************************** */

// Main Company Branding Kit
app.get('/', function (req, res) {
    res.redirect(302, 'https://www.lingoapp.com/space/69180/k/6C9C777B-B432-4B4A-991F-B5E6336D7165/?tkn=jz03AMNFFmlESlpeb_XRpyHxDh3IPky_dLmZD0sfJ84');
});

// Communities Branding Kit
app.get('/communities', function (req, res) {
    res.redirect(302, 'https://www.lingoapp.com/space/69180/k/7A050E3B-9B5A-4654-B621-0AF3254FAEFF?kit_token=PHaonH9BzTEtvSkJxlejkp4mba6v1fZmUdRGuG7Rv4g');
});

// Catchall
app.get('*', function (req, res) {
    // res.send('<h1>This is the Neighborly Brand Kit url redirection service.</h1><p>This is the default endpoint, but you can reach other places from:</p><ul><li><a href="/neighborly">/neighborly</a> (Default company branding)</li><li> <a href="/communities">/communities</a> (Branding for various communities)</li></ul>');
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});