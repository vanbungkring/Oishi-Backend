var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Categories = require('../models/bikeCategories.js');
var paginate = require('mongoose-pagination');
var mongoosePaginate = require('mongoose-paginate');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
	var perPage = req.query.perPage;
	if(perPage==null)
		perPage=10;
	var page = req.query.page;
	Categories.find().sort('-createdAt').paginate(page, perPage, function(err, categories, total) {
		if (err) return next(err);
		res.json({
			pageNumber:page,
			totalPage: total/10,
			data: categories,
			perPage:parseInt(perPage),
		});
	});
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
	Categories.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* POST /todos */
router.post('/', function(req, res) {
	console.log(req.body);
	Categories.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
	Categories.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
