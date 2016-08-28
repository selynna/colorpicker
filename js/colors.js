$.getJSON("https://api.myjson.com/bins/y4h8", function(result){
    console.log(result);
    console.log(result.color_scheme);
    var colors = [];
    $.each(result, function(key0, val0) {
        $.each(val0, function(key, val) {
            if (key == 0) {
                return true;
            }
            colors.push(val);
            var newSample = document.createElement("div");
            newSample.className = "sample";
            newSample.style.height = "20px";
            var newColorRect = document.createElement("div");
            newColorRect.className = "color-rect";
            newColorRect.style.backgroundColor = val;
            newColorRect.style.height = "100%";
            newColorRect.style.width = "12%";
            newColorRect.style.verticalAlign = "middle";
            
            var span = document.createElement("span");
            var hexText = document.createTextNode(val);
            span.appendChild(hexText);
            // span.style.display = "none";
            span.style.fontWeight = "100";
            newColorRect.appendChild(span);
            newSample.appendChild(newColorRect);
            $(".color-containers").append(newSample);
        })
        
        $(".color-containers").append('<br>');
    })
});
