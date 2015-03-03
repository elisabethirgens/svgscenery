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
  


function insertcloud(parentID) {
  var cloud = document.createElementNS("http://www.w3.org/2000/svg", "g");
  cloud.setAttribute("fill", "white");
  var x = randy.randInt(0, 900);
  var y = randy.randInt(0, 350);
  cloud.setAttribute("transform", "translate(" + x + " " + y + ")");

  cloud.appendChild(createCircle(randy.randInt(90, 120), randy.randInt(40, 80), randy.randInt(40, 60)));
  cloud.appendChild(createCircle(randy.randInt(160, 190), randy.randInt(40, 80), randy.randInt(40, 60)));
  cloud.appendChild(createCircle(randy.randInt(30, 80), randy.randInt(90, 100), randy.randInt(50, 60)));
  cloud.appendChild(createCircle(randy.randInt(120, 160), randy.randInt(90, 100), randy.randInt(70, 75)));
  cloud.appendChild(createCircle(randy.randInt(200, 250), randy.randInt(90, 100), randy.randInt(50, 60)));
  cloud.appendChild(createCircle(randy.randInt(20, 250), randy.randInt(40, 100), randy.randInt(20, 40)));

  var cloudContainer = document.getElementById(parentID);
  cloudContainer.appendChild(cloud);
}

insertsun("sunContainer");
insertcloud("clouds");
insertcloud("clouds");
