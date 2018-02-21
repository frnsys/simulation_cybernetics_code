// - using and updating state
// - interactivity (mouse click, key presses)
// - conditionals
// - click on objects
//   - track clicks on object, change color or something


// to keep track of clickable objects
const clickable = [];

// to keep track of the game state
const STATE = {
  score: 0
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // create some clickable objects
  clickable.push(new Circle(200, 200, 50));
  clickable.push(new Rect(50, 50, 50, 100));
}

// runs every frame
function draw() {
  background(0,0,255);

  // change fill color depending on score
  if (STATE.score < 50) {
    fill(255, 204, 0);
  } else {
    fill(37, 204, 107);
  }

  // change circle radius depending on score
  [centerX, centerY] = [width/2, height/2];
  ellipse(centerX, centerY, 80 + STATE.score);

  // show score
  textSize(32);
  text(`your score is ${STATE.score}`, 0, 32);

  // draw the clickable objects
  clickable.forEach(function(obj) {
    obj.draw();
  });
}


function keyPressed() {
  // lookup keycodes here: http://keycode.info/
  if (keyCode === 65) { // a
    STATE.score += 20;
  } else if (keyCode === 87) { // w
    STATE.score -= 20;
  }
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// handles mouse clicks for the entire page
function mouseClicked() {
  // increment score by 1
  STATE.score += 1;

  // check if any clickable objects were clicked on
  clickable.forEach(function(obj) {
    if (obj.inside(mouseX, mouseY)) {
      obj.onClick();
    }
  });
}

// define a Rect class
class Rect {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // colors
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }

  draw() {
    // draw the rectangle
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
  }

  inside(x, y) {
    // check if the given (x,y) position
    // is inside the rectangle.
    // assumes no rotation!
    let in_x = x > this.x && x < this.x + this.w;
    let in_y = y > this.y && y < this.y + this.h;
    return in_x && in_y;
  }

  onClick() {
    this.r = 0;
  }
}

// define a Circle class
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;

    // colors
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }

  draw() {
    // draw the circle
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.radius);
  }

  inside(x, y) {
    // check if the given (x,y) position
    // is inside the circle.
    return dist(x, y, this.x, this.y) < this.r;
  }

  onClick() {
    this.r = 0;
  }
}


