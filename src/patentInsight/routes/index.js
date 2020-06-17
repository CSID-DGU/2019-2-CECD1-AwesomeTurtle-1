var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var multer = require('multer');
var preprocessor = require('../module/preprocess')


router.get('/', function(req, res, next) {
  res.render('main.html');
});

//파일입력
router.post('/file', multer({ dest: '../../data/'}).single('patent'), async function(req,res){

  var csvpath = await preprocessor.readToCsv(req.file.path)
  var patent_arr = fs.readFileSync(csvpath, 'utf-8').toString().split("\n");

  const options = {
    method: "POST",
    url: "http://1de42408ebf2.ngrok.io/post",
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

    var dependent_arr = await preprocessor.getDependent(body.body, csvpath)
    res.render('result.html', {dependent: dependent_arr, patent: patent_arr});
  })


});


module.exports = router;
