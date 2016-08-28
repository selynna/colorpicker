var express = require('express');
var storage = require('node-persist');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');


var app = express();

  // var i = 1000;
  // while(i <= 1000) {
// var url = 'http://stuffgate.com/stuff/website/top-' + 1000 + '-sites';
var url = "http://stuffgate.com/";
request(url, function(error, response, html){
  console.log(html);
    if(!error){
      var $ = cheerio.load(html);
      $('.bordered-table.zebra-striped').filter(function(){
        var data = $(this);
        console.log(data);
      });
    }
});
  //   i++;
  // }
