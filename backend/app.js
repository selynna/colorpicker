var express = require('express');
var storage = require('node-persist');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var path = require('path');
var url = require('url');

var app = express();

//Allow CSS and IMAGES to bypass app.all
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/persist', function(req, res) {
  res.redirect('/');
});

app.use('/color/*', function(req,res) {
  storage.initSync();
  var color = /^[a-zA-Z0-9]{6}$/.test(req.originalUrl.substring(7)) ? req.originalUrl.substring(7) : false;
  storage.getItem('colors',
    function(err,value) {
      if(value[color] == undefined) {
        var url = 'http://www.colorhexa.com/' + color;
        request(url, function(error, response, html){
            if(!error){
              var $ = cheerio.load(html);
              $('.schemes').filter(function(){
                value[color] = {};
                console.log("Request to Color Hexa - Success");
                var data = $(this);
                var colors_arr = data.toString().match(/#[a-zA-Z0-9]{6}/g);
                var colors = colors_arr.filter(function(elem, index, self) {
                    return index == self.indexOf(elem);
                })
                value[color]["color_scheme"] = colors;
                // storage.setItem('colors', value);
                // res.send(scheme);
              });
            }
            var url = 'http://contrast-finder.tanaguru.com/result.html?foreground=%23' + color + '&background=%23' + color;
            request(url, function(error, response, html){
              if(!error){
                var $ = cheerio.load(html);
                if(value[color]["color_scheme"] == undefined) value[color] = {};
                console.log("Request to Tanaguru - Success");
                var data = $('.color-value-hexa')
                var colors_arr = data.toString().match(/#[a-zA-Z0-9]{6}/g);
                var colors = colors_arr.filter(function(elem, index, self) {
                    return index == self.indexOf(elem);
                })
                value[color]["contrast"] = colors.slice(0,5);
                storage.getItem('website_data', function(err,website_data) {
                  value[color]["similarColors"] = findColors(website_data, color);
                  for(var i = 0; i < value[color]["similarColors"].length; i++) {
                    value[color]["similarColors"][i] = "#" + value[color]["similarColors"][i];
                  }
                  storage.setItem('colors', value);
                  res.send(value[color]);
                });
              }
            });
        });
        // value[color] = {"contrast": ["#111111","#222222"]}
        // storage.setItem('colors', value);
      } else {
        res.send(value[color]);
      }
    }
  );
});

function findColors(data, color) {
  for(var i in data){
    for(var j = 0; j < data[i].length; j++) {
      if(data[i][j] == color) {
        console.log(data[i]);
        return data[i];
      }
    }
  }
  return [];
}

app.listen(process.env.PORT || 3000, function () {
  console.log('Colors running.');
});
