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

function insertcloud1(parentID) {
   var cloud = document.createElementNS("http://www.w3.org/2000/svg", "g");
	cloud.setAttribute("fill", "white");
	cloud.setAttribute("transform", "translate(90 100)");

	var shape1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	shape1.setAttribute("cx", 0);
	shape1.setAttribute("cy", 0);
	shape1.setAttribute("r", 30);
	cloud.appendChild(shape1);

	var shape2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	shape2.setAttribute("cx", 30);
	shape2.setAttribute("cy", 50);
	shape2.setAttribute("r", 40);
	cloud.appendChild(shape2);

	var shape3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	shape3.setAttribute("cx", 60);
	shape3.setAttribute("cy", 10);
	shape3.setAttribute("r", 50);
	cloud.appendChild(shape3);

	var shape4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	shape4.setAttribute("cx", 120);
	shape4.setAttribute("cy", 20);
	shape4.setAttribute("r", 30);
	cloud.appendChild(shape4);

	var cloudContainer = document.getElementById(parentID);
   cloudContainer.appendChild(cloud);
}

insertcloud1("clouds");
