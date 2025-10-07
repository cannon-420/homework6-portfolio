/*
 * Title: Homework 2
 * Author: Desiree Cannon
 * Date: AU2025
 * Simple Description: Generates 50 random purple scale dots
 * Instructions: Click to generate new dots.
 */

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(random(50, 155), random(80, 155), random(200, 255));
  noStroke();

  //for loop function
  let n = 50;

  for (var i = 0; i < n; i++) {
    
    //variables for ellipse
    let x = random(8, 500);
    let y = random(50, 500);
    let diameter = random(8, 80);
    let color = random(0, 255);

    //the ellipse
    ellipse(x, y, diameter);
    fill(color, 2, color, color);
    //fill(red value, green value, blue value, alpha/transpararency)
  }
}
//stuff to make mouse change it
function mousePressed() {
  redraw();
}
