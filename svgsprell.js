var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
shape.setAttribute("cx", 800);
shape.setAttribute("cy", 200);
shape.setAttribute("r", 50);
shape.setAttribute("fill", "yellow");
var popcorn = document.getElementById("popcorn");
popcorn.appendChild(shape);