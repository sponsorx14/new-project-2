var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/dist/`));
var port = 3000;

app.get(/.*/, (req, res) => {
  res.sendfile(`${__dirname}/dist/index.html`);
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.post('/send-email', function (req, res) {

});


app.listen(port, function () {
  console.log('Server is running at port: ', port);
});