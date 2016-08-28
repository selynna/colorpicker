var color = localStorage.getItem('_hexColor');
console.log("get" + color);
document.getElementById("crm").style.backgroundColor = color;
document.getElementById("hexcolortext").innerHTML = color;

$.getJSON("https://8d2da254.ngrok.io/color/" + color.substring(1), function(result){
    // console.log(key);
    var colors = [];
    $.each(result, function(key0, val0) {
        $.each(val0, function(key, val) {
            if (key == 0) {
                return true;
            }
            colors.push(val);
            var newSample = document.createElement("div");
            newSample.className = key0;
            // newSample.style.height = "30px";
            newSample.style.padding = "5px";
            var newColorRect = document.createElement("div");
            newColorRect.className = "color-rect";
            newColorRect.style.backgroundColor = val;
            newColorRect.style.height = "100%";
            newColorRect.style.width = "50%";
            newColorRect.style.verticalAlign = "middle";
            newColorRect.style.padding = "5px";
            
            var span = document.createElement("span");
            var hexText = document.createTextNode(val);
            span.appendChild(hexText);
            // span.style.display = "none";
            span.style.fontWeight = "100";
            newColorRect.appendChild(span);
            newSample.appendChild(newColorRect);
            $("."+key0+"1").append(newSample);
        });
        if(val0[0] == undefined) {
            $("."+key0+"1").hide();
        }
        if(key0 == "contrast") { 
            $.each($("#contrast1 .color-rect"),function(index, val) {
                val.style.color = color;
            });
        }
        // $(".color-containers").append('<br>');
    });
});

$(".backbutton").click(function() {
    console.log("click");
    window.location.href = 'index.html';
})