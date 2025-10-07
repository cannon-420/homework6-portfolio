/*
 *Title: Homework 3- Form Generator
 *Author: Desiree Cannon
 *Date: AU2025
 *Description: A tree changing colors through the seasons.
 *Instructions: Drag you mouse across the screen to have the sun changes the seasons.
 */

function setup() {
  createCanvas(400, 400);
  noCursor();
}

function draw() {
  background(255);
  //blue background gradient
  colorMode(HSB);
  let from = color(203, 85, 90);
  let to = color(205, 62, 100);

  let interA = lerpColor(from, to, 0.66);
  let interB = lerpColor(from, to, 0.33);

  fill(from);
  noStroke();
  triangle(mouseX, mouseY, 0, 400, 400, 400);

  fill(interB);
  triangle(mouseX, mouseY, 0, 0, 400, 0);

  fill(interA);
  triangle(mouseX, mouseY, 0, 0, 0, 400);

  fill(200, 60, 90);
  triangle(mouseX, mouseY, 400, 0, 400, 400);

  //leaves and grass color
  let color1 = color(344, 55, 98);
  let color2 = color(124, 60, 80);
  let amt = 0;
  amt = map(mouseX, 0, 250, 0, 1);
  let colormix = lerpColor(color1, color2, amt);

  //mouse control
  fill(64, 73, 96);
  circle(mouseX, mouseY, 50);

  //grass
  fill(colormix);
  quad(0, 250, 0, 400, 400, 400, 400, 250);

  //base tree
  colorMode(HSB);
  fill(33, 71, 22);
  beginShape();
  stroke(0);
  vertex(25, 297);
  vertex(43, 259);
  vertex(50, 200);
  vertex(37, 145);
  vertex(15, 139);
  vertex(15, 117);
  vertex(0, 115);
  vertex(0, 109);
  vertex(15, 109);
  vertex(15, 104);
  vertex(22, 104);
  vertex(22, 130);
  vertex(46, 128);
  vertex(46, 97);
  vertex(33, 97);
  vertex(33, 89);
  vertex(46, 89);
  vertex(46, 82);
  vertex(54, 82);
  vertex(56, 126);
  vertex(72, 170);
  vertex(93, 128);
  vertex(93, 105);
  vertex(78, 105);
  vertex(78, 97);
  vertex(81, 87);
  vertex(86, 87);
  vertex(86, 97);
  vertex(93, 97);
  vertex(97, 87);
  vertex(104, 87);
  vertex(106, 128);
  vertex(125, 125);
  vertex(125, 89);
  vertex(132, 89);
  vertex(136, 97);
  vertex(157, 97);
  vertex(157, 103);
  vertex(136, 104);
  vertex(136, 128);
  vertex(149, 129);
  vertex(150, 124);
  vertex(166, 114);
  vertex(167, 105);
  vertex(170, 106);
  vertex(170, 114);
  vertex(170, 123);
  vertex(145, 139);
  vertex(105, 147);
  vertex(97, 197);
  vertex(109, 259);
  vertex(125, 297);
  vertex(65, 320);
  endShape();

  //leaves
  noStroke();
  fill(colormix);
  ellipse(80, 90, 180, 110);
  ellipse(25, 93, 85);
  ellipse(75, 100, 120, 95);
  ellipse(145, 93, 85);
}
