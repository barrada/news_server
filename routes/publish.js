var express = require('express');
var router = express.Router();


/* publish*/

router.post('/', function(req, res, next) {
  res.status(200).json(
    {
      'title':req.body.title,
      'slug':req.body.slug
    }
    );
});

module.exports = router;