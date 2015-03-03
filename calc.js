var calc = (function() {
  var sunriseTime = 7;
  
  function getSunHeight(hour) {
    var horizonY = 500;
    var topY = 100;
    
    if (!hour) {
      var d = new Date();
      hour = d.getHours() + d.getMinutes() / 60;
    }
    
    var normalizedHour = ((hour - sunriseTime) + 24) % 24;
    var sunriseOffset = normalizedHour / 24;
    var heightRel = Math.sin(sunriseOffset * 2 * Math.PI);
    
    var posScale = (horizonY - topY) * heightRel;
    var posY = horizonY - posScale;
    
    return posY;
  }

  function getSunX(hour) {
    if (!hour) {
      var d = new Date();
      hour = d.getHours() + d.getMinutes() / 60;
    }

    var sunriseX = 100;
    var sunsetX = 900;
    var normalizedHour = (((hour - sunriseTime) + 24) % 24) / 12;
    
    console.log(normalizedHour);
    return sunriseX + (sunsetX - sunriseX) * normalizedHour;
  }
  
  return {
    getSunHeight: getSunHeight,
    getSunX: getSunX
  };
})();
