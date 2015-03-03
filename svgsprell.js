var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
shape.setAttribute("cx", 125);
shape.setAttribute("cy", 125);
shape.setAttribute("r", 50);
shape.setAttribute("fill", "pink");
var popcorn = document.getElementById("popcorn");
popcorn.appendChild(shape);