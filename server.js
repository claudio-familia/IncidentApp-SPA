const express = require('express');

const app = express();

app.use(express.static('./dist/incidentapp'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/incidentapp' });
});

app.listen(process.env.PORT || 8080);