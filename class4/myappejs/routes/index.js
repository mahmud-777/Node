var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let studentArray =[
    { id: 1, name: "Kasem", address: "Dhaka", roll: "101", group: "science" },
    { id: 2, name: "Basu", address: "Borishal", roll: "102", group: "Arts" },
    { id: 3, name: "Chameli", address: "Comilla", roll: "103", group: "science" },
    { id: 3, name: "Deep", address: "Rumpura", roll: "104", group: "Arts" },
    { id: 3, name: "Epti", address: "Chittagog", roll: "105", group: "Arts" },
    { id: 3, name: "Fahad", address: "Kuril", roll: "106", group: "science" }
  ];
  res.render('index', { title: 'Expressejs', studentArray:studentArray });
});

module.exports = router;
