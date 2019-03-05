// Vars
const express = require('express');
const app = express();
const path = require('path');
const port = 80;


/* ********************************
    Redirection rules
   ***************************** */

// Main Company Branding Kit
app.get('/', function (req, res) {
    res.redirect('/corporate');
});

// Communities Branding Kit
app.get('/corporate', function (req, res) {
    res.redirect(301, 'https://www.lingoapp.com/space/69180/k/6C9C777B-B432-4B4A-991F-B5E6336D7165/?tkn=jz03AMNFFmlESlpeb_XRpyHxDh3IPky_dLmZD0sfJ84');
});

// Communities Branding Kit
app.get('/communities', function (req, res) {
    res.redirect(301, 'https://www.lingoapp.com/space/69180/k/7A050E3B-9B5A-4654-B621-0AF3254FAEFF?kit_token=PHaonH9BzTEtvSkJxlejkp4mba6v1fZmUdRGuG7Rv4g');
});

// Press Kit
app.get('/press', function (req, res) {
    res.redirect(301, 'https://www.lingoapp.com/space/69180/k/0D11FC7D-9358-4698-9268-B9BB8A8742D9?kit_token=sjD33Jr2cumkAMKmwUxRZIbMWoO-t59j0SKwMLsSd8g');
});

// Catchall
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Port listening text
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});