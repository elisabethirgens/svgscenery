function insertsun(parentID) {
  var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  shape.setAttribute("cx", calc.getSunX());
  shape.setAttribute("cy", calc.getSunHeight());
  shape.setAttribute("r", 50);
  shape.setAttribute("fill", "orange");
  var sunContainer = document.getElementById(parentID);
  sunContainer.appendChild(shape);
}

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
  var x = randy.randInt(0, 950);
  var y = randy.randInt(0, 200);
  cloud.setAttribute("transform", "translate(" + x + " " + y + ")");

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
  var x = randy.randInt(80, 1000);
  var y = randy.randInt(200, 350);
  cloud.setAttribute("transform", "translate(" + x + " " + y + ")");

  cloud.appendChild(createCircle(0, 0, 60));
  cloud.appendChild(createCircle(-80, -30, 30));
  cloud.appendChild(createCircle(-70, 20, 40));
  cloud.appendChild(createCircle(-130, -20, 50));

  var cloudContainer = document.getElementById(parentID);
  cloudContainer.appendChild(cloud);
}

insertsun("sunContainer");
insertcloud1("clouds");
insertcloud2("clouds");
