const express = require('express');

const app = express();

app.use(express.static('./dist/electric-landing'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/electric-landing/'}),
);

app.listen(process.env.PORT || 8080);