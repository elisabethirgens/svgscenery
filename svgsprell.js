function insertsun(parentID) {
	var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	shape.setAttribute("cx", 800);
	shape.setAttribute("cy", calc.getSunHeight(19));
	shape.setAttribute("r", 50);
	shape.setAttribute("fill", "orange");
	var sunContainer = document.getElementById(parentID);
	sunContainer.appendChild(shape);
}

insertsun("sunContainer");
