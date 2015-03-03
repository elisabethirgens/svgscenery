function insertsun(parentID) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  shape.setAttribute("cx", calc.getSunX());
  shape.setAttribute("cy", calc.getSunHeight());
  shape.setAttribute("r", 50);
  shape.setAttribute("fill", "orange");
  var sunContainer = document.getElementById(parentID);
  sunContainer.appendChild(shape);
}

insertsun("sunContainer");

function createCircle(cx, cy, r) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  shape.setAttribute("cx", cx);
  shape.setAttribute("cy", cy);
  shape.setAttribute("r", r);
  return shape;
}
  
function insertcloud1(parentID) {
  var cloud = document.createElementNS("http://www.w3.org/2000/svg", "g");
  cloud.setAttribute("fill", "white");
  cloud.setAttribute("transform", "translate(90 100)");

  cloud.appendChild(createCircle(0, 0, 30));
  cloud.appendChild(createCircle(30, 50, 40));
  cloud.appendChild(createCircle(60, 10, 50));
  cloud.appendChild(createCircle(120, 20, 30));

  var cloudContainer = document.getElementById(parentID);
  cloudContainer.appendChild(cloud);
}

function insertcloud2(parentID) {
  var cloud = document.createElementNS("http://www.w3.org/2000/svg", "g");
  cloud.setAttribute("fill", "white");
  cloud.setAttribute("transform", "translate(490 200)");

  cloud.appendChild(createCircle(0, 0, 60));
  cloud.appendChild(createCircle(-80, -30, 30));
  cloud.appendChild(createCircle(-70, 20, 40));
  cloud.appendChild(createCircle(-130, -20, 50));

  var cloudContainer = document.getElementById(parentID);
  cloudContainer.appendChild(cloud);
}

insertcloud1("clouds");
insertcloud2("clouds");
