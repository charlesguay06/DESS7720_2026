// DES7720 — EXERCICE 3 — Conditions, animations et sons


let ellipsePosX;
let ellipsePosY;
let distanceMouseEllipse;
let vitesse;


// roule 1 fois au début du script         
function setup() {

    createCanvas(640,640);

    ellipsePosX = width / 2;
    ellipsePosY = height / 2;
}

// Dessiner en boucle.
function draw() {
background(0);

distanceMouseEllipse = dist(mouseX, mouseY, ellipsePosX, ellipsePosY);

// console.log(distanceMouseEllipse);

vitesse = map(distanceMouseEllipse, 0, width, 5, 0.001);

// ellipsePosX = constrain(ellipsePosX, 100, width - 50);
// ellipsePosY = constrain(ellipsePosY, 100, height - 50);

if (mouseX > ellipsePosX) {
    ellipsePosX = ellipsePosX - vitesse;
}

else if (mouseX < ellipsePosX) {
    ellipsePosX = ellipsePosX + vitesse;
}

if (mouseY > ellipsePosY) {
    ellipsePosY = ellipsePosY - vitesse;
}

else if (mouseY < ellipsePosY) {
    ellipsePosY = ellipsePosY + vitesse;
}

if (mouseIsPressed) {
    ellipsePosX = lerp(ellipsePosX, mouseX, 0.1);
    ellipsePosY = lerp(ellipsePosY, mouseY, 0.1);

    push();
    fill(255, 0, 0);
    rect(0,0, width, height);
    pop();
}



noStroke();
// ellipsePosX = ellipsePosX +1;
// ellipsePosY = ellipsePosY +1;
ellipse(ellipsePosX, ellipsePosY, 100);


}

