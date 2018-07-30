var l = document.getElementById("lb");
var k = document.getElementById("kg");
var r = document.getElementById("dRange1");
var s1 = document.getElementById("sig1");
var s2 = document.getElementById("sig2");
var s3 = document.getElementById("sig3");
var s4 = document.getElementById("sig4");
var s5 = document.getElementById("sig5");
var s6 = document.getElementById("sig6");
var s7 = document.getElementById("sig7");
var dose = 10;
var conc = 10;
var weight = 10;

function setSig(a, b, c, ) {
  if (s1.style.display === "none") {
    setSig1(a, b, c);
  }
  else if (s2.style.display === "none") {
    setSig2(a, b, c);
  }
  else if (s3.style.display === "none") {
    setSig3(a, b, c);
  }
  else if (s4.style.display === "none") {
    setSig4(a, b, c);
  }
  else if (s5.style.display === "none") {
    setSig5(a, b, c);
  }
  else if (s6.style.display === "none") {
    setSig6(a, b, c);
  }
  else if (s7.style.display === "none") {
    setSig7(a, b, c);
  }
}
function ranges(r) {
  if (s1.style.display === "none") {
    window.r = document.getElementById("dRange1");
  }
  else if (s2.style.display === "none") {
    window.r = document.getElementById("dRange2");
  }
  else if (s3.style.display === "none") {
    window.r = document.getElementById("dRange3");
  }
  else if (s4.style.display === "none") {
    window.r = document.getElementById("dRange4");
  }
  else if (s5.style.display === "none") {
    window.r = document.getElementById("dRange5");
  }
  else if (s6.style.display === "none") {
    window.r = document.getElementById("dRange6");
  }
  else if (s7.style.display === "none") {
    window.r = document.getElementById("dRange7");
  }
}

function setSig1(a, b, c) {
  sigName1.innerHTML = a;
  dose1.innerHTML = b;
  mgkg1.innerHTML = c;
  s1.style.display = "flex";
}
function setSig2(a, b, c) {
  sigName2.innerHTML = a;
  dose2.innerHTML = b;
  mgkg2.innerHTML = c;
  s2.style.display = "flex";
}
function setSig3(a, b, c) {
  sigName3.innerHTML = a;
  dose3.innerHTML = b;
  mgkg3.innerHTML = c;
  s3.style.display = "flex";
}
function setSig4(a, b, c) {
  sigName4.innerHTML = a;
  dose4.innerHTML = b;
  mgkg4.innerHTML = c;
  s4.style.display = "flex";
}
function setSig5(a, b, c) {
  sigName5.innerHTML = a;
  dose5.innerHTML = b;
  mgkg5.innerHTML = c;
  s5.style.display = "flex";
}
function setSig6(a, b, c) {
  sigName6.innerHTML = a;
  dose6.innerHTML = b;
  mgkg6.innerHTML = c;
  s6.style.display = "flex";
}
function setSig7(a, b, c) {
  sigName7.innerHTML = a;
  dose7.innerHTML = b;
  mgkg7.innerHTML = c;
  s7.style.display = "flex";
}

function convenia(dose, conc, weight, r) {
  weight = document.getElementById("icon_weight").value;
  if (l.checked) {      //convert pounds to kg
    weight /= 2.2;
  }
  else if (k.checked) {
    weight = weight;
  }
  else {
    alert("Specify weight type.");
    return;
  }
  
  window.conc = 80;      //concentration
  window.dose = 8;       //dosage in mg/kg
 
  ranges(r);

  
  window.r.value = window.dose;
  window.r.step = 0.5;
  window.r.min = 6;
  window.r.max = 10;

  var amt = (window.dose*window.weight/window.conc);
  
  var a = "Convenia: 80mg/kg:"; 
  var b = calc(window.dose, window.conc, window.weight);
  var c = window.dose;

  setSig(a, b, c);
 
}

function calc(dose, conc, weight) {
  weight = document.getElementById("icon_weight").value;
  if (l.checked) {      //convert pounds to kg
    weight /= 2.2;
  }
  else if (k.checked) {
    weight = weight;
  }
  else {
    alert("Specify weight type.");
    return;
  }
  return (dose*weight/conc).toFixed(2);
};

