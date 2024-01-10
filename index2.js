const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

const password = 'ramil';

app.get('/encode/:text', (req, res) => {
    const textToEncode = req.params.text;
    const encodedText = Vigenere.Cipher(password).crypt(textToEncode);
    res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const textToDecode = req.params.text;
    const decodedText = Vigenere.Decipher(password).crypt(textToDecode);
    res.send(decodedText);
});

app.listen(port, () => {
    console.log('Server online ' + port);
});

