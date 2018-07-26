var l = document.getElementById("lb");
var k = document.getElementById("kg");
var r = document.getElementById("dRange");
var d = document.getElementById("dInput");
var s1 = document.getElementById("sig1");
var s2 = document.getElementById("sig2");
var s3 = document.getElementById("sig3");
var s4 = document.getElementById("sig4");

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



function convenia() {
  var weight = document.getElementById("w").value;
  if (l.checked) {      //convert pounds to kg
    weight /= 2.2;
  }
  else if (k.checked) {
    weight = weight;
  }
  else {
    alert("Specify weight type.");
  }
  
  var conc = 80;      //concentration
  var dose = 8;       //dosage in mg/kg
 
  d.value = dose;  
  r.value = dose;
  r.step = 0.5;
  r.min = 6;
  r.max = 10;

  var amt = (dose*weight/conc);
  
  var a = "Convenia: 80mg/kg "; 
  var b = amt.toFixed(2) + " mL given at";
  var c = dose + " mg/kg";

  setSig(a, b, c);
 
}

