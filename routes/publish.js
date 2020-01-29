var express = require('express');
var router = express.Router();


/* publish*/

router.post('/', function(req, res, next) {
  res.status(200).json(
    {
      'title':req.body.title,
      'slug':req.body.slug,
      'slug':req.body.type,
      'slug':req.body.thumbnail,
      'slug':req.body.tags,
      'slug':req.body.keywords,
      'slug':req.body.excert,
      'slug':req.body.html
    }
    );
});

module.exports = router;