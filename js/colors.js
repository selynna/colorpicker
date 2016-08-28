var color = localStorage.getItem('_hexColor');
console.log("get" + color);
document.getElementById("crm").style.backgroundColor = color;
document.getElementById("hexcolortext").innerHTML = color;

$.getJSON("https://api.myjson.com/bins/y4h8", function(result){
    // console.log(key);
    var colors = [];
    $.each(result, function(key0, val0) {
        $.each(val0, function(key, val) {
            if (key == 0) {
                return true;
            }
            colors.push(val);
            console.log(colors);
            var newSample = document.createElement("div");
            newSample.className = key0;
            newSample.style.height = "20px";
            newSample.style.padding = "3px";
            var newColorRect = document.createElement("div");
            newColorRect.className = "color-rect";
            newColorRect.style.backgroundColor = val;
            newColorRect.style.height = "100%";
            newColorRect.style.width = "50%";
            newColorRect.style.verticalAlign = "middle";
            newColorRect.style.padding = "3px";
            
            var span = document.createElement("span");
            var hexText = document.createTextNode(val);
            span.appendChild(hexText);
            // span.style.display = "none";
            span.style.fontWeight = "100";
            newColorRect.appendChild(span);
            newSample.appendChild(newColorRect);
            $("."+key0+"1").append(newSample);
        });
        
        // $(".color-containers").append('<br>');
    });
});