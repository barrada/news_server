var express = require('express');
var router = express.Router();
const postsController=require('../controllers/postsController');

router.get('/:type',postsController.posts);
router.get('/:type/:page',postsController.posts);


module.exports = router;