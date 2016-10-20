
var triangletype = function(side1, side2, side3) {
 if (side1 === side2 && side2 === side3) {
   return "equalateral";
 } else if (side1 === side2 && side2 !== side3 && side1 + side2 > side3 || side1 === side3 && side2 !== side3 && side1 + side3 > side2 || side2 === side3 && side2 !== side1 && side2 + side3 > side1) {
   return "isoceles";
 } else if (side1 + side2 < side3 && side2 + side3 > side1 && side1 + side3 > side2 || side1 + side3 < side2 && side2 + side3 > side1 && side1 + side2 > side3 ||
 side2 + side3 < side1 && side2 + side1 > side3 && side1 + side3 > side2) {
   return "notatriangle";
 } else if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
   return "scalene";
 }
};

$(document).ready(function() {
  $("#help form").submit(function(event){

  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());

  var test = triangletype(side1, side2, side3);
  $(".solution").text(test);
  event.preventDefault();

  });
});
