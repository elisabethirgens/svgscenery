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

  var colorValue = Math.floor(randy.triangular(200, 256, 250));
  var color = "rgb("+colorValue+", "+colorValue+", "+colorValue+")";
  cloud.setAttribute("fill", color);

  var value = randy.randInt(0.9, 0.95);
  cloud.setAttribute("opacity", value);

  var x = randy.randInt(0, 1000);
  var y = randy.randInt(0, 400);
  var translation = "translate(" + x + " " + y + ")";

  var scaleX = randy.randInt(1.0, 1.5);
  var scaleY = randy.randInt(0.6, 1.0);
  var scale = "scale(" + scaleX + " " + scaleY + ")";

  cloud.setAttribute("transform", translation + " " + scale);

  cloud.appendChild(createCircle(randy.randInt(-50, -20), randy.randInt(-30, 10), randy.randInt(40, 60)));
  cloud.appendChild(createCircle(randy.randInt(20, 50), randy.randInt(-30, 10), randy.randInt(40, 60)));
  cloud.appendChild(createCircle(randy.randInt(-110, -60), randy.randInt(20, 30), randy.randInt(50, 60)));
  cloud.appendChild(createCircle(randy.randInt(-20, 20), randy.randInt(20, 30), randy.randInt(70, 75)));
  cloud.appendChild(createCircle(randy.randInt(60, 110), randy.randInt(20, 30), randy.randInt(50, 60)));
  cloud.appendChild(createCircle(randy.randInt(-110, 110), randy.randInt(-30, 30), randy.randInt(20, 40)));

  var cloudContainer = document.getElementById(parentID);
  cloudContainer.appendChild(cloud);
}

insertsun("sunContainer");

var numClouds = randy.triangular(1, 30, 10);
for (var i=0; i < numClouds; i++) {
  insertcloud("clouds");
}
