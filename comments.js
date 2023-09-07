// Create web server

var express = require('express');
var router = express.Router();
var commentModel = require('../models/commentModel');
var db = require('../models/db');

router.get('/', function(req, res) {
    var comments = commentModel.getAllComments();
    res.render('comments', {comments: comments});
});

router.post('/add', function(req, res) {
    var name = req.body.name;
    var comment = req.body.comment;
    var date = new Date();
    var time = date.getTime();
    var commentObj = {
        name: name,
        comment: comment,
        time: time
    };
    commentModel.addComment(commentObj);
    res.redirect('/comments');
});

module.exports = router;

