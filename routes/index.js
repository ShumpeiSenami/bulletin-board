var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '掲示板', user: req.user });
});

router.post('/posts', function(req, res, next){
    console.log(req.body);
    handleRedirectPosts(req, res);
  });

function handleRedirectPosts(req, res){
  res.writeHead(303, {
    'Location': '/'
  });
  res.end();
}

module.exports = router;