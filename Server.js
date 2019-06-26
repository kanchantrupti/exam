var express = require('express');
var app = express();


var customerController=function (req, res) {
  console.log("Calling rest api");
  var customers=[
            {firstName:'Trupti',lastName:'Adhav',age:24},
            {firstName:'Sumit',lastName:'Kharde',age:23},
            {firstName:'Pradip',lastName:'Kute',age:24},
            {firstName:'Dhanu',lastName:'Kotkar',age:25},
            {firstName:'Kalyani',lastName:'Kotkar',age:24}
      ];
  res.send(customers);
};

// setting router to map requests  with controllers

app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})