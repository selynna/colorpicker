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

function getHex() {
  var img = document.getElementById('new-pic');
  // img.setAttribute('src', 'examples/octocat.png')

  img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    for (var swatch in swatches) {
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
            console.log(swatch, swatches[swatch].getHex());
        }
    }
});
}
  }


});