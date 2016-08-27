$("input").change(function(readImage) {
  for (var i = 0; i < readImage.originalEvent.srcElement.files.length; i++) {
    var file = readImage.originalEvent.srcElement.files[i];
    var img = document.createElement("img");
    var reader = new FileReader();
    reader.onloadend = function() {
      img.src = reader.result;
      img.width = 250;
      img.style = "margin:auto;display:block";
    }
    reader.readAsDataURL(file);
    $("input").after(img);
  }
});

