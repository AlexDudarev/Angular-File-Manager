var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/index.html', function(req, res) {
  fs.readFile(__dirname + '/app/public/index.html', 'utf8', function(err, text){
    res.send(text);
  });
});

module.exports = router;
