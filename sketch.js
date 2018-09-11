/*
Self Portrait
By Samuel Delacruz
*/
function setup() {
	createCanvas(1890, 980);
}

function draw() {
	background("brown");
	noStroke();
     
    // defaults
	stroke('black');
	fill('white');
	
    // face
	fill("#fdbc89");
	ellipse(900, 500, 500, 650);
	
    // hair
  fill('black');
  arc(width/2.1, height/2.3, 466, 500, PI+.3, -.4, OPEN);

    // eye brows
   stroke('black');
  strokeWeight(10);
  noFill();
  arc(990, 410, 80, 80, PI+.9, -.9);
  arc(820, 410, 80, 80, PI+.9, -.9);
   
    //ears
    fill("#fdbc89")
  ellipse(640,492,10,100);
  ellipse(1160,492,10,100);
	
    // eyes
    strokeWeight(5);
	fill("white");
	ellipse(820, 440, 50, 100);
	ellipse(990, 440, 50, 100);
	
	// pupil
	fill("black");
	ellipse(820, 440, 50, 50);
	ellipse(990, 440, 50, 50);
    
    //nose
    beginShape(TRIANGLES);
    vertex(890, 600);
    vertex(900, 500);
    vertex(910, 600);
    endShape();
  
    //mouth
  fill('white')
  rect(850,620,150,150);
}