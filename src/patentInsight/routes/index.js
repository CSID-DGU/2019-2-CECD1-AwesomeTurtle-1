var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var multer = require('multer');
var preprocessor = require('../module/preprocess')


router.get('/', function(req, res, next) {
  res.render('main.html');
});

router.get('/accomplishment', function(req, res, next) {
  res.render('accomplish.html');
});

//파일입력
router.post('/file', multer({ dest: '../../data/'}).single('patent'), async function(req,res){

  var csvpath = await preprocessor.readToCsv(req.file.path)
  var patent_arr = fs.readFileSync(csvpath, 'utf-8').toString().split("\n");

  const options = {
    method: "POST",
    url: "http://3e1cd7bf0240.ngrok.io/post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    formData : {
      "test" : fs.createReadStream(csvpath)
    }
  };


  request(options, async function (err, body) {
    if(err) console.log(err);
    console.log(body.body);
    console.log("la?");

    var dependent_arr = await preprocessor.getDependent(body.body, csvpath);
    var render_data = {
      dependent: dependent_arr,
       patent: patent_arr
    };

    console.log(render_data);
    res.render('result.html',render_data);
  });


});


module.exports = router;
