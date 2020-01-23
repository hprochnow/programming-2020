function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(255, 204, 1);

  }
  ellipse (mouseX, mouseY, 80, 80);
}

let question = prompt("Would you like to try something neat?");