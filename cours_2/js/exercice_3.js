// DES7720 — EXERCICE 3 — Conditions, animations et sons


let ellipsePosX;
let ellipsePosY;
let distanceMouseEllipse;
let vitesse;
let diametreEllipse;

// variables synth
let osc;
let enveloppe;
let reverb;
let frequency;


// roule 1 fois au début du script         
function setup() {

    createCanvas(640,640);

    ellipsePosX = width / 2;
    ellipsePosY = height / 2;

    demarrerMain();

// SETUP SYNTH 
enveloppe = new p5.Envelope();
reverb = new p5.Reverb(5);
enveloppe.setADSR(0.05, 1.0, 1.0, 1.0);

osc = new p5.Oscillator('sawtooth');
osc.disconnect();        // Retirer la sortie directe
osc.connect(enveloppe);  // Faire passer le son par l’enveloppe
reverb.wet(0.5);          // Mélange : 50 % d’effet

enveloppe.disconnect();
enveloppe.connect(reverb);
osc.amp(0.3);            // Volume du son
osc.start();

}

// Dessiner en boucle.
function draw() {
background(0);

distanceMouseEllipse = dist(doigtX, doigtY, ellipsePosX, ellipsePosY);

diametreEllipse = map(distancePince, 0, 150, 10, 500);
diametreEllipse = constrain(diametreEllipse, 10, 500);

// console.log(distanceMouseEllipse);

vitesse = map(distanceMouseEllipse, 0, width, 5, 0.001);

// ellipsePosX = constrain(ellipsePosX, 100, width - 50);
// ellipsePosY = constrain(ellipsePosY, 100, height - 50);

if (doigtX > ellipsePosX) {
    ellipsePosX = ellipsePosX - vitesse;
}

else if (doigtX < ellipsePosX) {
    ellipsePosX = ellipsePosX + vitesse;
}

if (doigtY > ellipsePosY) {
    ellipsePosY = ellipsePosY - vitesse;
}

else if (doigtY < ellipsePosY) {
    ellipsePosY = ellipsePosY + vitesse;
}

if (pince) {
    ellipsePosX = lerp(ellipsePosX, doigtX, 0.1);
    ellipsePosY = lerp(ellipsePosY, doigtY, 0.1);

    push();
    fill(255, 0, 0);
    rect(0,0, width, height);
    pop();
}


push();
noStroke();
fill(255, 255, 0);
// ellipsePosX = ellipsePosX +1;
// ellipsePosY = ellipsePosY +1;
ellipse(ellipsePosX, ellipsePosY, diametreEllipse);
pop();


dessinerMain();



}

function mousePressed() {

   

}

function mouseReleased() {
    osc.freq(280);
    enveloppe.play();
}

function doigtPressed() {

    frequency = map(distanceMouseEllipse, 0, width, 820, 60); 
    osc.freq(frequency);
    enveloppe.play();
}

function doigtReleased() {
    
}