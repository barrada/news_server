var express = require('express');
var router = express.Router();
const postController=require('../controllers/postController');

router.get('/:slug',postController.single);
module.exports = router;