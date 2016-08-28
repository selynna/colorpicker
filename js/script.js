$("input").change(function(readImage) {
  for (var i = 0; i < readImage.originalEvent.srcElement.files.length; i++) {
    var file = readImage.originalEvent.srcElement.files[i];
    var uploadedPic = document.createElement("img");
    var reader = new FileReader();
    reader.onloadend = function() {
      uploadedPic.src = reader.result;
      uploadedPic.width = 250;
      uploadedPic.style = "margin:auto;display:block";
    }
    reader.readAsDataURL(file);
    $("input").after(uploadedPic);
    $("input").attr("id","new-pic");
    console.log("testing!");
  }
});

$(".text").hover(detectTyping());

function detectTyping() {
  var one = document.getElementById("u1");
  var two = document.getElementById("u2");
  var three = document.getElementById("u3");
  var four = document.getElementById("u4");
  var five = document.getElementById("u5");
  var six = document.getElementById("u6");
  var content = [];
  //learn how to count with content arrays!!!!!!!!!!!!11!!111
  
  document.onkeypress = function(e) {
    console.log(e.keyCode); 
    if (e.keyCode < 48 || e.keyCode > 57 && e.keyCode < 97 || e.keyCode >= 103) {
      return false;
    }
    var hexChar = String.fromCharCode(e.keyCode);
    console.log(hexChar);
    if (content.length < 6) {
      content.push(hexChar);
      document.getElementById("u" + (content.length)).innerHTML = hexChar;
    }
    if (content.length > 6) {
      return false;
    }
    if (content.length == 6) {
      console.log("flag");
      var color = "#" + content.join(""); 
      console.log(color);
      var doms = document.querySelectorAll(".underscore");
      for (var i = 0; i < content.length; i++) {
        doms[i+1].style.color = color;
      }
    }
    
  }
  
  document.onkeydown = function(e) {
    if (e.keyCode == 8) {
      content.pop();
      document.getElementById("u" + (content.length + 1)).innerHTML = "";
    }
    var doms = document.querySelectorAll(".underscore");
      for (var i = 0; i < content.length; i++) {
        doms[i+1].style.color = "#575757";
      }
  }
  
}

function getHex(){
  // document.getElementById("test").innerHTML = "hello!"
  // var el, i, image, len, ref, swatch, swatches, vibrant;
  // // var image = new Image(200,200);
  // // image.src = event.target.result;
  // // document.getElementById("image").innerHTML = "<img src='" + event.target.result + "' />";
  // vibrant = new Vibrant("#new-pic");
  // swatches = vibrant.swatches();
  

  // for (swatch in swatches) {
  //   if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
  //     ref = document.querySelectorAll(".color" + swatch);
  //     for (i = 0, len = ref.length; i < len; i++) {
  //       el = ref[i];
  //       el.style.backgroundColor = swatches[swatch].getHex();
  //     }
  //   }
  // }
  
  var img = document.getElementById('new-pic');
  img.setAttribute('src', 'examples/octocat.png')
  img.addEventListener('load', function() {
    document.getElementById("test").innerHTML = "hello!"
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()
    for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
            console.log(swatch, swatches[swatch].getHex())

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
});
  
}