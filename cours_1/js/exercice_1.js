// DES7720 — EXERCICE 1 — Introduction à p5.js

// Charger les fichiers avant de commencer.
function preload() {
}

// Préparer le sketch une seule fois.
function setup() {
    createCanvas(640, 640);
    background(255,100,100);
    rectMode(CENTER);
    
    circle(320, 320, 200);
    
}

// Dessiner en boucle.
function draw() {
    background(mouseX,mouseY,100);
    rect(mouseX, mouseY, mouseX, mouseY);
    

}
