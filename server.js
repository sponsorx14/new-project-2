const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/dist/`));
const port = 3000;

app.get(/.*/, (req, res) => {
  res.sendfile(`${__dirname}/dist/index.html`);
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.listen(port);
