
console.log(`${__dirname}/../public`);

const path = require('path');
const express = require('express');

let app = express();

const port = process.nextTick.PORT || 3000;

const publicPath = path.join(__dirname, '../public') 

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});