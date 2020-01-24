let grid = undefined;
let stroke1 = prompt("Should the snowman's hat be blue, yellow, or red?", "red");
let stroke2 = prompt("What color should the snowman's face be? Red or Black?","black");
let stroke3 = prompt("What color should the snowman's cabin be? Brown or black?", "black");
function setup(){
    createCanvas( 1000, 800);
    background("pink");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
background (grid);
// snowman legs
fill("#f1f1f1");
strokeWeight(20);
stroke(100, 250, 100);
// left
ellipse(350, 650, 200);
//right
ellipse(650, 650, 200);
//body
ellipse(500, 450, 350, 400);
//head
ellipse(500, 200, 200);
// hat brim
strokeWeight(40);
stroke(stroke1);
line(400, 120, 600, 120);
// hat top
fill(0);
quad(400, 50, 600, 50, 550, 120, 450, 120);
//eyes
stroke(stroke2);
strokeWeight(50);
point(425, 200);
point(475, 200);
//mouth
noFill();
strokeWeight(10);
arc (500, 200, 80, 80, 0, HALF_PI);
//House
strokeWeight(10);
stroke(stroke3);
line(175, 175, 175, 115);
triangle(130, 175, 158, 120, 186, 175);
}