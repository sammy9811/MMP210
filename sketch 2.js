/*
    final project presentation slides
*/
var slide = 0;

var bird, fish;

function preload() {
    bird = loadImage("landing22.jpg");
    fish = loadImage("takingoff.jpg");
    pote = loadImage("potentiometer.jpg")
}

function setup() {
    createCanvas(900, 700);
    textSize(40);
    textFont('sans-serif');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}

function draw() {
    background("beige");
    
    if (slide == 0) {
        text("Final Project Presentation", width/2, height/2);
    } else if (slide == 1) {
        textSize(30);
        text("We will be using a potentiometer.", 450, 100);
        
        // fsr graphic
       
        image(pote, 230, 200, width/2, height/2);
    } else if (slide == 2) {
        text("Theme: Plane taking off and landing", 400, 30);
        image(bird, 400, 200);
        image(fish, 50, 200);
    }
}

function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}

