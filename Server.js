var express = require('express');
var app = express();


var customerController=function (req, res) {
  console.log("Calling rest api");
  var customers=[
            {firstName:'Trupti',lastName:'Adhav',location:'Mumbai',position:'Manager',salary:95000,age:24},
            {firstName:'Sumit',lastName:'Kharde',location:'Mumbai',position:'Admin',salary:75000,age:23},
            {firstName:'Pradip',lastName:'Kute',location:'Pune',position:'Employee',salary:60000,age:24},
            {firstName:'Dhanu',lastName:'Kotkar',location:'Mumbai',position:'Project Manager',salary:55000,age:25},
            {firstName:'Kalyani',lastName:'Kotkar',location:'Pune',position:'Sales Lead',salary:50000,age:24}
      ];
  res.send(customers);
};


app.get('/customers',customerController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})