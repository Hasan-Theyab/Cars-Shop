var name = prompt('What is your name?');
alert('Hello ' + name);


var age = prompt('What is your age?');
if (age >= 20) {
  alert("Age is over than 20");
} else if (age <= 20) {
  alert("Age is younger than 20");
} else {
  alert("Please,enter numbers only.");
}
//This code to print the car's image on screen
// var favouriteCar = prompt("What do you like more Mercedes or Ford or Toyota.\nNote: This question is to show your favourite car's picture in the bottom of the site?");
// if (favouriteCar == 'Mercedes') {
//   document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="250px">');
// } else if (favouriteCar === 'Ford') {
//   document.write('<img src="https://www.arabgt.com/wp-content/uploads/2020/04/%D9%81%D9%88%D8%B1%D8%AF-F-150-2021-1.jpg" width="250px">');
// } else if (favouriteCar === 'Toyota') {
//   document.write('<img src="https://1.bp.blogspot.com/-xtIIyB5icWk/Xxn8s2D7lKI/AAAAAAAAHVY/ympfHyUnbowPe2aL-PbOCgACUXvIqajHgCLcBGAsYHQ/s1600/untitled_optimized%2B%25281%2529.jpg" width="250px">');
// } else {
//   alert('Please, only write Mercedes or Ford or Toyota next time');
// }



//This code to loop entering until we gain acceptable value

var favouriteCar = prompt('What is your favourite car: Mercedes or Ford or Toyota?\nNote: This question is to check your input is correct or not.');

while (favouriteCar !== 'Mercedes' && favouriteCar !== 'Ford' && favouriteCar !== 'Toyota') {
  favouriteCar = prompt('Please only answer with Mercedes or Ford or Toyota');
}

var cars = prompt('How many cars do you want to buy?');

if (cars > 0) {
  for (var i = 0; i < cars; i++) {

    if (favouriteCar == 'Mercedes') {
  document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="250px">');
} else if (favouriteCar === 'Ford') {
  document.write('<img src="https://www.arabgt.com/wp-content/uploads/2020/04/%D9%81%D9%88%D8%B1%D8%AF-F-150-2021-1.jpg" width="250px">');
} else if (favouriteCar === 'Toyota') {
  document.write('<img src="https://1.bp.blogspot.com/-xtIIyB5icWk/Xxn8s2D7lKI/AAAAAAAAHVY/ympfHyUnbowPe2aL-PbOCgACUXvIqajHgCLcBGAsYHQ/s1600/untitled_optimized%2B%25281%2529.jpg" width="250px">');
} else {
  alert('Please, only write Mercedes or Ford or Toyota next time');
}
  }
} if (cars < 0) {
  alert('Please,enter a positive number only.');
}


// document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="50px">');
