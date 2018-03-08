// - click on specific objects
// - classes and objects
// - arrays
// - mouse positions


// to keep track of clickable objects
const clickable = [];

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // create some clickable objects
  var circle = new Circle(200, 200, 50);
  clickable.push(circle);

  var rect = new Rect(50, 50, 50, 100);
  clickable.push(rect);
}

// runs every frame
function draw() {
  background(0,0,255);

  // draw the clickable objects
  clickable.forEach(function(obj) {
    obj.draw();
  });
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

// handles mouse clicks for the entire page
function mouseClicked() {
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
    return dist(x, y, this.x, this.y) < this.radius;
  }

  onClick() {
    this.r = 0;
  }
}
