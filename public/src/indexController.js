$(document).ready(function() {
  gen = new Generator();
  $("#generateNumbers").on("click", function() {
    $("#numbers").text(gen.generateNumbers());
  });
});
