
$(document).ready(function() {
  $("form").submit(function(event){

  var side1 = parseInt($("input#side1").val());
  var side2 = parseInt($("input#side2").val());
  var side3 = parseInt($("input#side3").val());

  if (side1 === side2 && side2 === side3) {
    $("#finaltext").text("You've given me an equalateral triangle, you cheeky boy!")
    $(".solution").show();
  } else if (side1 === side2 && side2 !== side3 && side1 + side2 > side3 || side1 === side3 && side2 !== side3 && side1 + side3 > side2 || side2 === side3 && side2 !== side1 && side2 + side3 > side1) {
      $("#finaltext").text("You've given me an isoceles triangle. What a nice present!")
      $(".solution").show();
  } else if (side1 + side2 < side3 && side2 + side3 > side2 && side1 + side3 > side2) {
      alert("These numbers do not make a triangle. You're not playing fair. Try again.")
  }    else if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
      $("#finaltext").text("You've given me a scalene triangle, dammit!")
      $(".solution").show();
  } else {
  //   alert("These numbers do not make a triangle. You're not playing fair. Try again.");
  }
  event.preventDefault();
});
});
