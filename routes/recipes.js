var express = require('express');
var router = express.Router();
const recipesController=require('../controllers/recipesController');
// var id = req.params.id;

/* GET posts listing. */

// router.get('/', function(req, res, next) {
//   res.json('posts loaded!');
// });

router.get('/',recipesController.recipes);
router.get('/:page',recipesController.recipes);
router.get('/single/:slug',recipesController.single);
// router.get('/:page',recipesController.recipes);

// router.get('/',recipesController.recipes);

// router.get('/:page',recipesController.recipes);

// router.get('/:slug',recipesController.getPost);
// router.post('/',recipesController.postPost);

// res.render('error',{});
// GET Post by Slug field

// router.get('/:slug', function(req, res, next) {
//   var slug = req.params.slug;
//   res.json({'post':slug});
// });

// 
module.exports = router;