/*
Self Portrait
By Samuel Delacruz
*/
function setup() {
    createCanvas(1890, 980);
}

function draw() {
	noStroke();
     
    // defaults
	stroke('black');
	fill('white');
	
    // face
	fill("#fdbc89");
    var face = 500;
	ellipse(900, face, face, 650);
	
    // hair
  fill('black');
  arc(width/2.1, height/2.3, 466, 500, PI+.3, -.4, OPEN);

    // eye brows
   stroke('black');
  strokeWeight(10);
  noFill();
    var brows = 410;
    var brows2 = 80;
  arc(990, brows, brows2, brows2, PI+.9, -.9);
  arc(820, brows, brows2, brows2, PI+.9, -.9);
   
    //ears
    fill("#fdbc89")
    var ears = 492;
    var ears2 = 10;
    var ears3 = 100;
    
  ellipse(640,ears,ears2,ears3);
  ellipse(1160,ears,ears2,ears3);
	
    // eyes
    strokeWeight(5);
	fill("white");
    var eyeSize = 440;
    var eyeSize2 = 50;
    var eyeSize3 = 100;  
ellipse(820, eyeSize, eyeSize2, eyeSize3);
ellipse(990, eyeSize, eyeSize2, eyeSize3);
	
	// pupil
	fill("black");
    var pupil = 440;
    var pupil2 = 50;
    
    
	ellipse(820, pupil, pupil2, pupil2);
	ellipse(990, pupil, pupil2, pupil2);
    
    //nose
    beginShape(TRIANGLES);
    vertex(890, 600);
    vertex(900, 500);
    vertex(910, 600);
    endShape();
  
    //mouth
  fill('white')
  var mouth = 150;
  rect(850,620,mouth,mouth);
}