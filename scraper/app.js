'use strict';

var storage = require('node-persist');
var ColorThief = require('color-thief');
var csv = require('csv');
var path = require('path');

var fs = require('fs');

var util = require('util'),
    exec = require('child_process').exec;
var csv = require("fast-csv");

// storage.initSync();
// var websites = storage.getItem("website");
// var stream = fs.createReadStream("data.csv");
// var csvStream = csv()
//   .on("data", function(data){
//     exec('images/script.zsh ' + data[1], (err, stdout, stderr) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       fs.exists("images/" + data[1] + "-clipped.png", function(exists) {
//         if (exists) {
//           var colorThief = new ColorThief();
//           var colors = colorThief.getPalette("images/" + data[1] + "-clipped.png", 6);
//           websites[data[1]] = colors;
//           console.log(data[1] + " colors: " + colors);
//           storage.setItem("website",websites);
//         }
//       });
//     });
//   })
//   .on("end", function(){
//        console.log("All websites - DONE");
//   });

// stream.pipe(csvStream);

const rgbHex = require('rgb-hex');
storage.initSync();
var websites = storage.getItem("website");
for(var i in websites){
  var new_arr = [];
  for(var j = 0; j < websites[i].length; j++) {
    new_arr.push(websites[i][j][0]);
  }
  websites[i] = new_arr;
}
storage.setItem("website",websites);
