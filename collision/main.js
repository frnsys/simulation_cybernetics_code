var ball;
var ball2;

var pause = false;

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  ball = new Rect(100, 100, 50, 100, 1, 0);
  ball2 = new Rect(600, 100, 40, 20, -1, 0);
}

// runs every frame
function draw() {
  background(0,0,255);

  ball.x = mouseX;
  ball.y = mouseY;
  imageMode(CENTER);

  ball.draw();
  ball2.draw();

  if (!pause) {
    // ball.move();
    ball2.move();
  }

  if (ball.collided(ball2)) {
    fill(255,255,255);
    text('they collided', 200, 200)
    pause = true;
  }
}

class Ball {
  constructor(x, y, radius, velocity_x, velocity_y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
  }

  draw() {
    ellipse(this.x, this.y, this.radius*2);
  }

  move() {
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }

  collided(otherBall) {
    var distance = dist(this.x, this.y, otherBall.x, otherBall.y);
    return distance <= this.radius + otherBall.radius;
  }
}


// collisions are slightly different for rectangles
class Rect {
  constructor(x, y, w, h, velocity_x, velocity_y) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity_x = velocity_x;
    this.velocity_y = velocity_y;
  }

  draw() {
    // important that rectMode is CENTER!
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.velocity_x;
    this.y += this.velocity_y;
  }

  collided(otherRect) {
    var d_x = Math.abs(this.x - otherRect.x);
    var d_y = Math.abs(this.y - otherRect.y);
    return d_x <= (this.w/2 + otherRect.w/2) && d_y <= (this.h/2 + otherRect.h/2);
  }
}

