// TODO
// - coordinate system
// - ellipses and other shapes
// - fills, strokes
// - text
// - images
// - positioning
// - rotation

// runs before everything
// use to load assets
var duck;
function preload() {
  // // load an image
  duck = loadImage('assets/duck.png');
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(200,250,200);

  fill(0,0,255)
  rect(50,50,10,100)
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
