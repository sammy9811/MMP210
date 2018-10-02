/*
Self Portrait
By Samuel Delacruz
*/

var bg;
var y = 0;

function setup() {
  createCanvas(1900, 980);
     
}

function draw() {
	noStroke();
    background(255);
    // defaults
    
	stroke('black');
	fill('white');
	
    // face
	fill("#fdbc89");
// FACEY = 500
    var faceY = mouseY;
    var faceX = mouseX;
	ellipse(faceX, faceY , 500 , 650);
	
 // hair
  fill('black');
  arc(faceX, faceY - 75, 466, 494, PI+.3, -.4, OPEN);


    // eye brows
   stroke('black');
  strokeWeight(10);
  noFill();
    var brows = 410;
    // faceY - 80
    var brows2 = 80;
    // faceY - 420
  arc(faceX + 90, faceY - 80, 80 , brows2, PI+.9, -.9);
  arc(faceX - 80, faceY - 80, 80 , brows2, PI+.9, -.9);
  //arc(990, 410, 80, brows2, PI+.9, -.9);
  //arc(820, 410, 80, brows2, PI+.9, -.9);
   
    //ears
    fill("#fdbc89")
    var ears = 492;
    // faceY - 8
    var ears2 = 10;
    var ears3 = 100;
    // faceY - 400
    
  ellipse(faceX - 260,faceY - 8,ears2,ears3);
  ellipse(faceX + 260,faceY - 8,ears2,ears3);
	
    // eyes
    strokeWeight(5);
	fill("white");
    var eyeSize = 440;
    var eyeSize2 = 50;
    var eyeSize3 = 100;  
ellipse(faceX - 80, faceY-60, eyeSize2, eyeSize3);
ellipse(faceX + 90, faceY-60, eyeSize2, eyeSize3);
	
	// pupil
	fill("black");
    var pupil = 440;
    var pupil2 = 50;
    
    
	ellipse(faceX - 80, faceY-60, pupil2, pupil2);
	ellipse(faceX + 90, faceY-60, pupil2, pupil2);
    
    //nose
    beginShape(TRIANGLES);
    vertex(faceX - 10, faceY + 100);
    vertex(faceX , faceY);
    vertex(faceX + 10, faceY + 100);
    endShape();
  
    //mouth
  fill('white')
  var mouth = 150;
    // faceY - 350
    // facey + 120
  rect(faceX - 50,faceY + 120,mouth,constrain(faceY - 350, 0, 150));
}