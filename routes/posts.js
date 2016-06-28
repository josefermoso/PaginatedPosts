var express = require('express');
var paginate = require('express-paginate');

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


router.get('/paginated', function(req, res, next) {
    Post.paginate({}, {
        page: req.query.page,
        limit: req.query.limit
    }, function(err, posts, pageCount, itemCount) {

        if (err) return next(err);
        res.json({
            //  has_more: paginate.hasNextPages(req)(pageCount),
            'result': posts.docs,
            'paging': {
                'total': 2,
                'offset': 2,
                'limit': 2
            }
        });
    });
});




module.exports = router;