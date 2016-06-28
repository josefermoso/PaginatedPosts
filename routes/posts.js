var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();

var Post = require('../models/post.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Post.find({}, function(err, docs) {
        if (!docs.length) {
            console.log('No hay data');
        } else {
            console.log('Ya hay data');
            res.json({
                "results": docs
            });
        }
    });
});

module.exports = router;