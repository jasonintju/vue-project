var express = require('express');
var proxy = require('express-http-proxy');
var md5 = require('md5');
var config = require('./config/index');

var port =process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
  req.url = './index.html';
  next();
})

app.use(router);

// 请求接口签名
app.use('/api', function(req, res, next) {
  'use strict'
  const appSecret = config.build.apiSecret; // 密钥
  let apiParams = Object.assign({}, {appSecret: appSecret}, req.query);
  let apiParamsKeys = Object.keys(apiParams).sort();
  let apiParamsValues = [];
  let sign;

  for (var i = 0, l = apiParamsKeys.length; i < l; i++) {
    apiParamsValues.push(apiParams[apiParamsKeys[i]]);
  }

  sign = md5(apiParamsValues.join(''));
  req.url += '&sign=' + sign;

  next();
});

app.use('/api', proxy(config.build.api, {
  forwardPath: (req, res) => {
    return require('url').parse(req.url).path;
  }
}));


app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('App is running on port %s', port);
})
