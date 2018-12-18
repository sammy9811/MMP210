var serial;
var portName = "/dev/cu.usbmodem14131";
var sensorValue;
var cloudOne = 200;
var cloudSpeed = 2;

var runwayX = 2200;
var runwayY = 720;
var runwayW = 1000;
var runwayH = 400;

var planeSound;
 
function preload() {
    dog = loadImage("airplane.png");
    port = loadImage("airport.png");
    
    planeSound = loadSound('Airplane-landing.wav');
     
}


function setup() {
    createCanvas(2130, 1050);
    
    planeSound.play();

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open("/dev/cu.usbmodem14131");
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.')
}

function portClose() {
    console.log('The serial port closed.');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
	var c = map(sensorValue, 0, 800, 0, 180);

	// sky
    fill('');
	background(c, c, c + 55);
    

	// sun
	var y = map(sensorValue, 100, 1023, height,0);
    
//    var runwayW = map(sensorValue, 100, 1023, height,0);
        
    var faceY = mouseY;
    var faceX = mouseX;

	// ground
	fill(c, c + 0, c);
	//rect(0, height * 0.75, c, c, c, y, width, height * 0.25);
    fill('grey');
    

    
    image(port, runwayX, runwayY, runwayW, runwayH);
    
    runwayX--;
    
    if(runwayX < 1200) {
        runwayX = 1200;
    }
    
    
    
    
    if (mouseX > runwayX && mouseX < runwayX + runwayW && y > runwayY && y < runwayY + runwayH) {
        
        noLoop();
        fill('red')
        textSize(45);
        text("YOU HAVE SUCCESSFULLY LANDED THE PLANE! PRESS SPACE TO TRY AGAIN.", 200, 400);
    }
    
    


	fill('GOLD');
	noStroke();
    image(dog, mouseX , y + 50, 500);
	ellipse(width/1.1, c, c, c, y, 400);
    
    
  
  // cloud
    fill("white");
      ellipse(cloudOne, 100, 100, 50)
    ellipse(cloudOne - 100, 200, 100, 50)
    ellipse(cloudOne + 200, 150, 100, 50)
    ellipse(cloudOne + 300, 100, 100, 50)
    
    cloudOne = cloudOne + cloudSpeed;


    if (cloudOne > 2100) {
        cloudOne = 0;
    }
    
  
    }
function button(x, y, s) {
	var d = dist(mouseX, mouseY, x, y);
	if (d < s / 2) {
		fill('gold');
	} else {
		fill('plum');
	}
	ellipse(x, y, s);
}


function keyPressed() {
    if(keyCode == 32) {
        location.reload();
    }
}