$.getJSON("https://api.myjson.com/bins/2wfcc", function(result){
    var colors = [];
    $.each(result, function(key, val) {
        colors.push(key + val);
    })
        // $.each(result, function(i, field){
        //     $("div").append(field + "hi ");
        // });
        console.log(colors[0]);
    });