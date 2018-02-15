var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(path.join(__dirname, '../public')));

// app.use(express.static(__dirname + '/../index.html'))

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });



// app.get('/', (req, res) => {
// 	res.send(200);
// })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

