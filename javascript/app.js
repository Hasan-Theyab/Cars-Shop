var name = prompt('What is your name?');
alert('Hello ' + name);


var age = prompt('What is your age?');
if (age >= 20) {
  alert("Age is over than 20");
} else if (age <= 20) {
  alert("Age is younger than 20");
} else {
  alert("Please,Enter numbers only.");
}

var favouriteCar = prompt("What do like more Mercedes or Ford or Toyota?");
if (favouriteCar == 'Mercedes') {
  document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="250px">');
} else if (favouriteCar === 'Ford') {
  document.write('<img src="https://www.arabgt.com/wp-content/uploads/2020/04/%D9%81%D9%88%D8%B1%D8%AF-F-150-2021-1.jpg" width="250px">');
} else if (favouriteCar === 'Toyota') {
  document.write('<img src="https://1.bp.blogspot.com/-xtIIyB5icWk/Xxn8s2D7lKI/AAAAAAAAHVY/ympfHyUnbowPe2aL-PbOCgACUXvIqajHgCLcBGAsYHQ/s1600/untitled_optimized%2B%25281%2529.jpg" width="250px">');

<<<<<<< HEAD
} else {
  document.write('<h3> please only write Mercedes or Ford or Toyota next time</h3>');
}



var favouriteCar = prompt('What do you like more Mercedes or Ford or Toyota?');

while (favouriteCar === 'Mercedes' || favouriteCar === 'Ford' || favouriteCar === 'Toyota') {
  if (favouriteCar === 'Mercedes') {
    document.write('<h3>Welcome to our website This is Mercedes</h3>');
  }
  else if (favouriteCar === 'Ford') {
    alert('Hello,welcome to our website,here is the Ford section');
  }
  else if (favouriteCar === 'Toyota') {
    alert('Hello,welcome to our website we have Toyota offers');
  }
  else {
    favouriteCar = prompt('Please only answer with Mercedes or Ford or Toyota');
  }

}

var cars = prompt('How many cars do you want to buy?');

if (cars > 5) {
  for (var i = 0; i < cars; i++) {

    document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="50px">');
  }
} else {
  for (var i = 0; i < cars; i++) {
    document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="50px">');
  }
}
=======
}
>>>>>>> 5196ee274f9d16183e38d0a4d8b7fd7533240ab4
