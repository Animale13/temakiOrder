var express = require('express');
var fs = require('fs');
var router = express.Router();

var orderComplete = new Array(100);
var usersOrder = new Map();

router.post('/', function(req, res, next) {
    console.log('Incoming request');
    var orderUpdate = req.body;
    console.log(orderUpdate.user);
    usersOrder.set(orderUpdate.user, orderUpdate.items);
    orderComplete.fill(0);
    for( var value of usersOrder.values()){
        for (let i = 0; i < orderComplete.length; i++) {
            orderComplete[i] = orderComplete[i] + value[i];
        }
    }
    console.log(orderComplete);
    res.json(orderComplete);
});

router.post('/reset/', function(req, res, next) {
    console.log('Incoming request');
    orderComplete.fill(0);
    console.log(orderComplete);
    res.json(orderComplete);
});

router.post('/userMenu/', function(req, res, next){
    console.log(req.body.user);
    let user = req.body.user;
    console.log(usersOrder.has(user));
    if(usersOrder.has(user)){
        console.log("Found");
        res.json(usersOrder.get(user));
    }

});

module.exports = router;