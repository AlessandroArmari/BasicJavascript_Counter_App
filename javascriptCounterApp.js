//Using querySelector to select the FIRST
//element on a HTML page wich has
//the .CSS property
var minus = document.querySelector("#minus"); //here I'm looking for the first element which has the id "minus"
var result = document.getElementById("result"); //here, I picked up result by Id

//Here I create the function to reduce the result
var reduceFunction = function reduce() {
  if (result.innerHTML == 0) {
    alert("You're going sub zero!!! BRRRR!!!");
  }
  result.innerHTML--;
};

minus.addEventListener("click", reduceFunction);

//Now I need to target "+"
//I use "getElementsByTagName" and choose "button". I create the variable "buttons" wich has a list all of the buttons
//Indeed, there are 2 buttons in my HTML page
//So I select the second button among 2 available (using "1" I select the second!!!)
var buttons = document.getElementsByTagName("button");
plus = buttons[1];

//Here I didn't create a function outside but just inside the addEventListener
plus.addEventListener("click", function () {
  result.innerHTML++;
});

//Now I target the reset button by the method "document.getElementById" (MOST USEFUL)

var reset = document.getElementById("reset");

//Here I'm using an arrow function
reset.addEventListener("click", () => {
  result.innerHTML = 0;
});
