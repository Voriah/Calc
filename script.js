
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
}

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
}

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
}

function info() {
  document.getElementById("doseage").style.display = "flex";
  document.getElementById("times").style.display = "flex";
  document.getElementById("days").style.display = "flex";
  document.getElementById("update").style.display = "flex";
}

function rangeChange() {
  var x = document.getElementById("dInput");
  var y = document.getElementById("dRange");
  y.value = x.value;

}