var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let studentArray = [
    { id: 1, name: "Ador", address: "Dhaka", roll: "101", group: "science" },
    { id: 2, name: "Basu", address: "Comilla", roll: "102", group: "Arts" },
    { id: 3, name: "Moo", address: "Rajshahi", roll: "103", group: "science" },
    { id: 4, name: "Depu", address: "Khula", roll: "104", group: "Arts" },
    { id: 5, name: "Tom", address: "Fei", roll: "105", group: "Arts" },
    { id: 6, name: "Jerry", address: "Dhamodi", roll: "106", group: "science" },
    { id: 7, name: "Rahat", address: "Sylhet", roll: "106", group: "science" },
    { id: 8, name: "Hasaf", address: "Pochagor", roll: "106", group: "science" },
    { id: 9, name: "Kamal", address: "Rampura", roll: "106", group: "science" },
    { id: 10, name: "July", address: "Kuril", roll: "106", group: "science" }
  ];
  
  
  res.render('index', { title: 'Express Ejs', studentArray :studentArray });
});

module.exports = router;
