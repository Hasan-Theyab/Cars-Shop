var name = prompt('What is your name?');
alert('Hello '+ name);


var age =prompt('What is your age?');
if(age>=20){
  alert("Age is over than 20");
}else if (age<=20){
  alert ("Age is younger than 20");
}else{
  alert("Please,Enter numbers only.");
}

var favouriteCar = prompt("What is your favourite car?");
if(favouriteCar=='Mercedes'){
  document.write('<img src="https://www.arabgt.com/wp-content/uploads/2019/12/2021-mercedes-s-class.jpg" width="250px">');
}else if(favouriteCar === 'Ford'){
  document.write('<img src="https://www.arabgt.com/wp-content/uploads/2020/04/%D9%81%D9%88%D8%B1%D8%AF-F-150-2021-1.jpg" width="250px">');
}else if(favouriteCar === 'Toyota'){
  document.write('<img src="https://1.bp.blogspot.com/-xtIIyB5icWk/Xxn8s2D7lKI/AAAAAAAAHVY/ympfHyUnbowPe2aL-PbOCgACUXvIqajHgCLcBGAsYHQ/s1600/untitled_optimized%2B%25281%2529.jpg" width="250px">');

}else{
  document.write('<h3> Please only write Mercedes or Ford or Toyota next time</h3>');
  confirm("Wrong Input. Please write Mercedes or Ford or Toytoa only. Other cars are not allowed");
}

