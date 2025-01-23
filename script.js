const PI = 3.14;
var radius = 6.378e6;
var circumference = (2 * PI * radius);
var surfaceArea = 4 * PI * (radius ** 2);
var volume = (4/3) * PI * (radius ** 3);

document.write('The Radius of the Sphere is ' + '' + radius);
document.write('<br> <br>');
document.write('The Circumference is ' + '' + circumference);
document.write('<br> <br>');
document.write('The Surface Area is ' + '' + surfaceArea);
document.write('<br> <br>');
document.write('The Volume is ' + '' + volume);
