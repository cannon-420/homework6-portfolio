/*
*Title: Homework 1- Landscape of Code
*Author:Desiree Cannon
*Date: 09/08/2025
*Simple Description: A tree in front of a sunset in a valley.
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //sky stuff below is lavender color
  background(225, 138, 242);
  
  //pink
  fill(255, 143, 249)
  rect(0,75,400,150)
  
  //orange
  fill(251, 198, 121,200)
  rect(0,120,400,150)
  
  //purple
  fill(164, 54, 247,50)
  rect(0,0, 400,35)
  
  //deep red
  fill(71, 1, 10,200)
  rect(0,203,400,40)
  
  //sun
  ellipse(150,220,150,150)
  fill(250, 162, 10,250)
  ellipse(150,220,120,120)
  fill(249, 252, 162)
  ellipse(150,220,100,100)
  
  //Skyline
  noStroke()
  fill(9, 33, 16)
  rect(0,243,400,215)
  fill(9, 59, 5)
  quad(200,243,100,243,10,400,350,400)
  
  //tree
  fill(9, 33, 16)
  triangle(130,240,150,200,170,240)
  rect(145,240,10,10)
  
  //tree shadow
  fill(3, 23, 2)
  triangle(130,258,150,310,170,258)
  rect(145,251,10,10)
  
  //mountain
  fill(9, 33, 16)
  triangle(400,70,400,250,230,250)
  triangle(0,100,0,250,70,250)
  
}