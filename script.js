//shows antibiotic list if not active: hides any others visible, hides if active
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
    var x = document.getElementsByClassName("sedatives");
      for (i = 0; i < x.length; i++) {
        var y = x[i];
        y.style.display = "none";
      }
    var x = document.getElementsByClassName("steroids");
      for (i = 0; i < x.length; i++) {
        var y = x[i];
        y.style.display = "none";
      }
    var x = document.getElementsByClassName("other");
      for (i = 0; i < x.length; i++) {
        var y = x[i];
        y.style.display = "none";
      }
    var x = document.getElementsByClassName("gastro");
      for (i = 0; i < x.length; i++) {
        var y = x[i];
        y.style.display = "none";
      }
}
//shows analgesic list if not active: hides any others visible, hides if active
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

  var x = document.getElementsByClassName("sedatives");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("steroids");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  
  var x = document.getElementsByClassName("other");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("gastro");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
}
//shows sedative list if not active: hides any others visible, hides if active
function sed() {
  var x = document.getElementsByClassName("sedatives");
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
  var x = document.getElementsByClassName("analgesics");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("steroids");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("other");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("gastro");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
}
//shows steroid list if not active: hides any others visible, hides if active
function ster() {
  var x = document.getElementsByClassName("steroids");
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
  var x = document.getElementsByClassName("analgesics");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("sedatives");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("other");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("gastro");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
}
//shows other list if not active: hides any others visible, hides if active
function othe() {
  var x = document.getElementsByClassName("other");
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
  var x = document.getElementsByClassName("analgesics");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("sedatives");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("steroids");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("gastro");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
}
//shows gastrointestinal list if not active: hides any others visible, hides if active
function gast() {
  var x = document.getElementsByClassName("gastro");
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
  var x = document.getElementsByClassName("analgesics");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("sedatives");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("steroids");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
  var x = document.getElementsByClassName("other");
    for (i = 0; i < x.length; i++) {
      var y = x[i];
      y.style.display = "none";
    }
}
//hides all items in list
function reset() {
 sig1.style.display = "none";
 sig2.style.display = "none";
 sig3.style.display = "none";
 sig4.style.display = "none";
 sig5.style.display = "none";
 sig6.style.display = "none";
}
