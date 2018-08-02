//calculates weight and converts to kilograms if set in pounds
function calcWeight() {
  var weight = icon_weight.value;
  if (lb.checked) {      //convert pounds to kg
    weight /= 2.2;
  }
  else if (kg.checked) {
    weight = weight;
  }
  else {
    alert("Specify weight type.");
    return;
  }
  return weight;
}

//finds next available list item to populate
function setSig(a, b, c) {
  if (sig1.style.display === "none") {
    setSig1(a, b, c);
  }
  else if (sig2.style.display === "none") {
    setSig2(a, b, c);
  }
  else if (sig3.style.display === "none") {
    setSig3(a, b, c);
  }
  else if (sig4.style.display === "none") {
    setSig4(a, b, c);
  }
  else if (sig5.style.display === "none") {
    setSig5(a, b, c);
  }
  else if (sig6.style.display === "none") {
    setSig6(a, b, c);
  }
}
//checks the next available range object
function ranges() {
  if (sig1.style.display === "none") {
    return dRange1;
  }
  else if (sig2.style.display === "none") {
    return dRange2;
  }
  else if (sig3.style.display === "none") {
    return dRange3;
  }
  else if (sig4.style.display === "none") {
    return dRange4;
  }
  else if (sig5.style.display === "none") {
    return dRange5;
  }
  else if (sig6.style.display === "none") {
    return dRange6;
  }
}
//assigns values to list items
function setSig1(a, b, c) {
  sigName1.innerHTML = a;
  dose1.innerHTML = b;
  mgkg1.innerHTML = c;
  sig1.style.display = "flex";
}
function setSig2(a, b, c) {
  sigName2.innerHTML = a;
  dose2.innerHTML = b;
  mgkg2.innerHTML = c;
  sig2.style.display = "flex";
}
function setSig3(a, b, c) {
  sigName3.innerHTML = a;
  dose3.innerHTML = b;
  mgkg3.innerHTML = c;
  sig3.style.display = "flex";
}
function setSig4(a, b, c) {
  sigName4.innerHTML = a;
  dose4.innerHTML = b;
  mgkg4.innerHTML = c;
  sig4.style.display = "flex";
}
function setSig5(a, b, c) {
  sigName5.innerHTML = a;
  dose5.innerHTML = b;
  mgkg5.innerHTML = c;
  sig5.style.display = "flex";
}
function setSig6(a, b, c) {
  sigName6.innerHTML = a;
  dose6.innerHTML = b;
  mgkg6.innerHTML = c;
  sig6.style.display = "flex";
}

//constructs injectable objects
function Injectable(n, d, c, min, max, ste) {
  this.str = n;
  this.dose = d;
  this.conc = c;
  this.mi = min;
  this.ma = max;
  this.st = ste;
}
// Name, Dose, Concentration, Minimum Range, Maximum Range, Range Step
var acep = new Injectable("Acepromazine: 1 mg/ml", 0.05, 1, 0.03, 0.1, 0.01);
var adeq = new Injectable("Adequan: 100 mg/ml", 4.4, 100, 4, 5, 0.1);
var amik = new Injectable("Amikacin: 250 mg/ml", 10, 250, 8, 12, 0.5);
var amin = new Injectable("Aminophylline: 25 mg/ml", 7, 25, 3, 11, 0.5);
var amox = new Injectable("Amoxicillin: 50 mg/ml", 22, 50, 18, 24, 0.5);
var ampi = new Injectable("Ampicillin: 100 mg/ml", 22, 100, 18, 24, 0.5);
var ante = new Injectable("Antesedan: 5 mg/ml", 1, 5, 1, 1, 1);
var apom = new Injectable("Apomorphine: 3 mg/ml", 0.03, 3, 0.01, 0.05, 0.01);
var atro = new Injectable("Atropine: 0.54 mg/ml", 0.05, 0.54, 0.01, 0.1, 0.01);
var bupi = new Injectable("Bupivicaine: 5 mg/ml", 1.5, 5, 1, 2, 0.01);
var bupr = new Injectable("Buprenorphine: 0.3 mg/ml", 0.015, 0.3, 0.01, 0.02, 0.001);
var buto = new Injectable("Butorphanol: 10 mg/ml", 0.4, 10, 0.2, 0.6, 0.05);
var cefa = new Injectable("Cefazolin: 100 mg/ml", 22, 100, 18, 26, 1);
var cere = new Injectable("Cerenia: 10 mg/ml", 1, 10, 0.5, 1.5, 0.5);
var clin = new Injectable("Clindamycin: 150 mg/ml", 12.5, 150, 10, 15, 0.5);
var conv = new Injectable("Convenia: 80 mg/mL:", 8, 80, 6, 10, 0.5);
var depo = new Injectable("Depo-Medrol: 20 mg/mL:", 1, 20, 1, 1, 1);
var dexd = new Injectable("Dexdomitor: 0.5 mg/mL:", 1, 0.5, 1, 1, 1);
var dexa = new Injectable("Dexamethasone: 2 mg/mL:", 0.1, 2, 0.05, 0.15, 0.01);
var dexaSP = new Injectable("Dexamethasone SP: 4 mg/mL:", 0.25, 4, 0.2, 0.3, 0.01);
var diaz = new Injectable("Diazepam: 5 mg/mL:", 0.2, 5, 0.1, 0.4, 0.01);
var diph = new Injectable("Diphenhydramine: 50 mg/mL:", 2.2, 50, 2, 2.4, 0.1);
var dopa = new Injectable("Dopamine: 40 mg/mL:", 1, 40, 1, 1, 1);
var doxa = new Injectable("Doxapram: 20 mg/mL:", 5.5, 20, 1, 11, 1);
var enro = new Injectable("Enrofloxacin: 22.7 mg/mL:", 5, 22.7, 4, 6, 0.1);
var epin = new Injectable("Epinephrine: 1 mg/mL:", 0.2, 1, 0.1, 0.3, 0.01);
var famo = new Injectable("Famotidine: 10 mg/mL:", 0.5, 10, 0.3, 0.7, 0.1);
var flum = new Injectable("Flumazenil: 1 mg/mL:", 1, 1, 1, 1, 1);
var furo = new Injectable("Furosemide: 50 mg/mL:", 2.2, 50, 2, 2.4, 0.1);
var gent = new Injectable("Gentamicin: 100 mg/mL:", 10.5, 100, 9, 12, 0.5);
var hydr = new Injectable("Hydromorphone: 2 mg/mL:", 0.075, 2, 0.05, 0.1, 0.01);
var iron = new Injectable("Iron Dextran: 100 mg/mL:", 15, 100, 10, 20, 1);
var kena = new Injectable("Kenalog: 10 mg/mL:", 0.16, 10, 0.11, 0.22, 0.01);
var keta = new Injectable("Ketamine: 100 mg/mL:", 1, 100, 1, 1, 1);
var lido = new Injectable("Lidocaine: 20 mg/mL:", 2, 20, 1, 3, 0.1);
var mani = new Injectable("Mannitol: 200 mg/mL:", 550, 200, 250, 1000, 50);
var melo = new Injectable("Meloxicam: 5 mg/mL:", 0.2, 5, 0.1, 0.3, 0.01);
var metho = new Injectable("Methocarbamol: 100 mg/mL:", 1, 100, 1, 1, 1);
var meto = new Injectable("Metoclopramide: 5 mg/mL:", 0.3, 5, 0.2, 0.4, 0.01);
var metro = new Injectable("Metronidazole: 250 mg/mL:", 1, 250, 1, 1, 1);
var mida = new Injectable("Midazolam: 5 mg/mL:", 0.2, 5, 0.1, 0.3, 0.01);
var nalo = new Injectable("Naloxone: 0.4 mg/mL:", 0.25, 0.4, 0.01, 0.04, 0.005);
var onda = new Injectable("Ondansetron: 2 mg/mL:", 0.75, 2, 0.5, 1, 0.05);
var pant = new Injectable("Pantoprozole: 1 mg/mL:", 1, 1, 1, 1, 1);
var perc = new Injectable("Percorten-V: 25 mg/mL:", 1.8, 25, 1.65, 2.2, 0.05);
var praz = new Injectable("Praziquantel: 56.8 mg/mL:", 1, 56.8, 1, 1, 1);
var prop = new Injectable("Propofol: 10 mg/mL:", 4, 10, 2, 6, 0.5);
var soluD = new Injectable("Solu-Delta-Cortef: 1 mg/mL:", 1, 1, 1, 1, 1);
var soluM = new Injectable("Solu-Medrol: 62.5 mg/mL:", 1, 62.5, 1, 1, 1);
var vitb = new Injectable("Vitamin B-12: 1 mg/mL:", 0.025, 1, 0.02, 0.03, 0.001);


//calculates dosage and sets values to next list item that is not visible
function calc(inject) {
  var w = calcWeight();  
  
  return (inject.dose * w / inject.conc).toFixed(2);
}

function calcInjectable(inject) {
  var r = ranges();

  r.value = inject.dose;
  r.step = inject.st;
  r.min = inject.mi;
  r.max = inject.ma;

  var a = inject.str; 
  var b = calc(inject);
  var c = inject.dose;

  setSig(a, b, c);
}
