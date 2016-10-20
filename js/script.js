
// var equalateral = function(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3)
//   return 1;
// };
// var isoceles = function(side1, side2, side3) {
//   if (side1 === side2 && side2 !== side3 && side1 + side2 > side3 || side1 === side3 && side2 !== side3 && side1 + side3 > side2 || side2 === side3 && side2 !== side1 && side2 + side3 > side1)
//   return 2;
// };
// var notatriangle = function(side1, side2, side3) {
//   if (side1 + side2 < side3 && side2 + side3 > side1 && side1 + side3 > side2 || side1 + side3 < side2 && side2 + side3 > side1 && side1 + side2 > side3 ||
//   side2 + side3 < side1 && side2 + side1 > side3 && side1 + side3 > side2)
//   return 3;
// };
// var scalene = function(side1, side2, side3) {
//   if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1)
//   return 4;
// };
alert("!!");

var triangletype = function(side1, side2, side3) {
 if (side1 === side2 && side2 === side3) {
   return equalateral;
 } else if (side1 === side2 && side2 !== side3 && side1 + side2 > side3 || side1 === side3 && side2 !== side3 && side1 + side3 > side2 || side2 === side3 && side2 !== side1 && side2 + side3 > side1) {
   return isoceles;
 } else if (side1 + side2 < side3 && side2 + side3 > side1 && side1 + side3 > side2 || side1 + side3 < side2 && side2 + side3 > side1 && side1 + side2 > side3 ||
 side2 + side3 < side1 && side2 + side1 > side3 && side1 + side3 > side2) {
   return notatriangle;
 } else (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
   return scalene;
 }
};

$(document).ready(function() {
  $("form").submit(function(event){
  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());

  var test = triangletype(side1, side2, side3);

  if (test = equalateral) {
    $(".solution").text("You've given me an equalateral triangle, you cheeky boy!")
    $(".solution").show();
  } else if  (test = isoceles) {
    $(".solution").text("You've given me an isoceles triangle. What a nice present!")
    $(".solution").show();
  } else if (test = notatriangle) {
      alert("These numbers do not make a triangle. You're not playing fair. Try again.")
  } else if (test = scalene) {
      $(".solution").text("You've given me a scalene triangle, dammit!")
      $(".solution").show();
  } else {

  // if (side1 === side2 && side2 === side3) {
  //   $("#finaltext").text("You've given me an equalateral triangle, you cheeky boy!")
  //   $(".solution").show();
  // } else if (side1 === side2 && side2 !== side3 && side1 + side2 > side3 || side1 === side3 && side2 !== side3 && side1 + side3 > side2 || side2 === side3 && side2 !== side1 && side2 + side3 > side1) {
  //     $("#finaltext").text("You've given me an isoceles triangle. What a nice present!")
  //     $(".solution").show();
  // } else if (side1 + side2 < side3 && side2 + side3 > side2 && side1 + side3 > side2) {
  //     alert("These numbers do not make a triangle. You're not playing fair. Try again.")
  // }    else if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
  //     $("#finaltext").text("You've given me a scalene triangle, dammit!")
  //     $(".solution").show();
  // } else {
  //   alert("These numbers do not make a triangle. You're not playing fair. Try again.");
  // }
}
  event.preventDefault();
});
};
