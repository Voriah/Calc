function anti(){
    var x = document.getElementsByClassName("antibiotics");
    for (i = 0; i < x.length; i++) { 
      var y = x[i];

    
      if (y.style.display === "none") {
        y.style.display = "flex";
      } else {
        y.style.display = "none";
      }
    }
    var x = document.getElementsByClassName("analgesics");
    for (i = 0; i < x.length; i++) {
        var y = x[i];
        y.style.display = "none";      
        }
}

function ana() {
  var x = document.getElementsByClassName("analgesics");
  for (i = 0; i < x.length; i++) {
    var y = x[i];

    if (y.style.display === "none") {
      y.style.display = "flex";
    } else {
      y.style.display = "none";
    }
  }
  var x = document.getElementsByClassName("antibiotics");
  for (i = 0; i < x.length; i++) {
    var y = x[i];
    y.style.display = "none";
  }
}

function info() {
  document.getElementById("r1c3").style.display = "flex";
}
