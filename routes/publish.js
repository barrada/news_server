var express = require('express');
var router = express.Router();


/* publish*/

router.post('/', function(req, res, next) {
  res.status(200).json({'title':req.body.title,'body':req.body.body});
});

module.exports = router;