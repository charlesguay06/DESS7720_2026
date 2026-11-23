let cameraMain;
let modeleMain;
let mains = [];
let connexions = [];

let pince = false;
let doigtX = 0;
let doigtY = 0;
let mainVisible = false;
let distancePince = 0;

function demarrerMain() {
  doigtX = width / 2;
  doigtY = height / 2;

  cameraMain = createCapture(VIDEO, function() {
    modeleMain = ml5.handPose({
  maxHands: 2,
  minDetectionConfidence: 0.8,
  minTrackingConfidence: 0.8
}, function()  {
      connexions = modeleMain.getConnections();

      modeleMain.detectStart(cameraMain, function(resultats) {
        mains = resultats;
      });
    });
  });

  cameraMain.size(640, 480);
  cameraMain.hide();
}



function dessinerMain() {
  mainVisible = mains.length > 0;
  if (!mainVisible) return;

  let positionsIndex = [];
  let pinceActive = false;

  // Parcourir toutes les mains détectées
  for (let main of mains) {

    let points = main.keypoints.map(function(point) {
      return {
        x: width - point.x * width / cameraMain.width,
        y: point.y * height / cameraMain.height
      };
    });

    // Position de l'index
    positionsIndex.push({
      x: points[8].x,
      y: points[8].y
    });

    // Détecter la pince
    let distanceDoigts = dist(
      points[4].x, points[4].y,
      points[8].x, points[8].y
    );

    distancePince = distanceDoigts;

    if (distanceDoigts < 30) {
      pinceActive = true;
    }

    // Dessiner les connexions
    push();
    stroke(0, 255, 0);
    strokeWeight(2);

    for (let connexion of connexions) {
      let a = points[connexion[0]];
      let b = points[connexion[1]];
      line(a.x, a.y, b.x, b.y);
    }

    // Dessiner les articulations
    noStroke();
    fill(255);

    for (let point of points) {
      circle(point.x, point.y, 8);
    }

    // Dessiner l'index
    fill(255, 0, 0);
    circle(points[8].x, points[8].y, 16);

    pop();
  }

  // Calculer le milieu entre les deux index
  let sommeX = 0;
  let sommeY = 0;

  for (let position of positionsIndex) {
    sommeX += position.x;
    sommeY += position.y;
  }

  doigtX = sommeX / positionsIndex.length;
  doigtY = sommeY / positionsIndex.length;

  // Détecter la pince
  if (pinceActive && !pince) {
    pince = true;
    doigtPressed();
  }
  else if (!pinceActive && pince) {
    pince = false;
    doigtReleased();
  }
}


