const PI = 3.14;
var  radius = 6.378e6;
var circumference = 2 * PI * radius;
var surfaceArea = 4 * PI * radius ** 2;
var volume = (4/3) * PI * radius ** 3;

document.write("The Radius of the sphere is " + "" + radius + "<br> <br>");
document.write("The Circumference is " + "" + circumference + "<br> <br>");
document.write("The Surface Area is " + "" + surfaceArea + "<br> <br>");
document.write("The volume is " + "" + volume + "<br> <br>");
