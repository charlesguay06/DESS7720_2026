

let refletImage

function preload() {

refletImage = loadImage("./assets/images/reflet.jpg")
refletVideo = loadVideo("./assets/videos/Comp.mp4")

}





function setup() {
    createCanvas(refletImage.width *2, refletImage.height);
    background(0);

    
}

function draw() {
    
    image(refletImage, 0, 0);
    noFill();
    stroke(255, 0, 0);
    rect(mouseX, mouseY, 50, 50);
}


function mouseDragged() {
    copy(refletImage, mouseX, mouseY, 1, 1, mouseX + refletImage.width, mouseY, 50, 50);

}

function mousePressed() {
    mouseDragged();
}
/*
Pistes d’exploration — choisissez une idée ou suivez la vôtre.

- Changez la photo pour dessiner avec une image de votre choix.
- Changez la taille du fragment que vous prélevez dans la photo. Essayez un carré de 20 × 20 pixels, puis de 100 × 100 pixels.
- Dessinez avec un GIF animé pour prélever des fragments à différents moments.
- Remplacez la photo par une vidéo et dessinez avec des fragments de cette vidéo.
- Dessinez avec des formes au clic ou au glisser.
- Ajoutez deux états au sketch : un double-clic (doubleClicked()) pourrait faire passer de la photo aux formes.
*/
