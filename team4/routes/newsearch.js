var express = require('express')
var router = express.Router()
const query_find = require('../middleware/query_params');
const {findAlldata,insertdata,findDataBasedOnSearchItem} = require('../../team4/controllers/newsearch')

const Books = require('../../models/book');

router.route('/')
.get(query_find(Books),findAlldata)
.post(insertdata)

router.route('/CommonSearch/:searchitem')
.get(findDataBasedOnSearchItem)

// router.route('/:id')
// .get(findDataBasedOnSearchItem)

module.exports = router
