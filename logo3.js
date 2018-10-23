/*
LOGO
By Samuel Delacruz
*/

 // global

var mic;
var midi;
var piano;
var tools;
function preload() {
     mic = loadImage("mic.jpg")
    midi = loadImage("midi.jpg")
   piano = loadImage("piano.jpg")
   tools = loadImage("tools.jpg")
}

function setup() {
    createCanvas(700, 700);
    
}

function draw() {
   
	if (mouseIsPressed) {
		var s = (mouseX - pmouseX) + (mouseY - pmouseY); 
		ellipse(mouseX, mouseY, s);
	}
   
    background(0);  
	var r = random(155);
	var g = random(255);
	var b = random(155);
    	
	fill(r, g, b);
	noStroke();
	ellipse(width/2, height/2, 400);
    	
   
    fill('white');
    textAlign(CENTER,CENTER);
    textSize(70);
    textFont("Comic Sans MS");
   
	if (mouseIsPressed) {
		var s = (mouseX - pmouseX) + (mouseY - pmouseY); 
		ellipse(mouseX, mouseY, s);
	}
    if (mouseX > width/2 && mouseY > height/2) {
		image(mic, width/2, height/2, width/2, height/2);
	} else if (mouseX < width/2 && mouseY > height/2) {
		image(piano, 0, height/2, width/2, height/2);
	} else if (mouseX > width/2 && mouseY < height/2) {
		image(tools, width/2, 0, width/2, height/2);
	} else {
		image(midi, 0, 0, width/2, height/2);
	}
    
    	
    
    	translate(width/2, height/2);
	var r = frameCount / 250 * PI;
	shearX(r);

	text('By Samuel Delacruz',100 , 300);
    text('D.L.C. RECORDS',0 , 0);
    
	
}