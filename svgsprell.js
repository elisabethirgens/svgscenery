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

  function createCircle(cx, cy, r) {
    var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    shape.setAttribute("cx", cx);
    shape.setAttribute("cy", cy);
    shape.setAttribute("r", r);
    return shape;
  }
  
  cloud.appendChild(createCircle(0, 0, 30));
  cloud.appendChild(createCircle(30, 50, 40));
  cloud.appendChild(createCircle(60, 10, 50));
  cloud.appendChild(createCircle(120, 20, 30));

  var cloudContainer = document.getElementById(parentID);
  cloudContainer.appendChild(cloud);
}

insertcloud1("clouds");
