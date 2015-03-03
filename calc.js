var calc = (function() {
  function getSunHeight(hour) {
    var horizonY = 500;
    var topY = 100;
    var sunriseTime = 7;
    
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
  
  return {
    getSunHeight: getSunHeight
  };
})();
