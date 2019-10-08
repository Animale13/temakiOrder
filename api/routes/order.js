var express = require('express');
var fs = require('fs');
var router = express.Router();

var orderComplete = new Array(100);
orderComplete.fill(0);

router.post('/', function(req, res, next) {
    console.log('Incoming request');
    var order = req.body.code;
    var sign = req.body.change;
    orderComplete[order] = orderComplete[order] + sign;
    console.log(orderComplete);
    res.json(orderComplete);
});

router.post('/reset/', function(req, res, next) {
    console.log('Incoming request');
    orderComplete.fill(0);
    console.log(orderComplete);
    res.json(orderComplete);
});

module.exports = router;