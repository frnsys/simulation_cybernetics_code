const STATE = {
  time: 0,
  lose: false,
  timer: null
}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  STATE.timer = setInterval(function() {
    STATE.time++;
  }, 1000)

  setTimeout(function() {
    STATE.lose = true;

    // stop the interval timer
    clearTimeout(STATE.timer);
  }, 5000);
}

// runs every frame
function draw() {
  background(0,0,255);

  fill(255,255,255);
  textSize(20);
  text(`${STATE.time} seconds`, 200, 200);

  if (STATE.lose) {
    text('you lost!', 300, 300)
  }
}
