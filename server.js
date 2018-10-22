var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use(express.static(`${__dirname}/dist`));
app.get(/.*/, (req, res) => {
  res.sendfile(`${__dirname}/dist/index.html`);
});

app.listen(port);

