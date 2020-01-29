var express = require('express');
var router = express.Router();


/* publish*/

router.post('/', function(req, res, next) {
  res.status(200).json(
    {
      'title':req.body.title,
      'slug':req.body.slug,
      'type':req.body.type,
      'thumbnail':req.body.thumbnail,
      'tags':req.body.tags,
      'keywords':req.body.keywords,
      'excert':req.body.excert,
      'html':req.body.html,
      'featured':req.body.featured
      
    }
    );
});

module.exports = router;