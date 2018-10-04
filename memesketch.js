/*
Self Portrait
By Samuel Delacruz
*/
/*
    Meme v 0
    by Owen
    10.2.2018
    rough draft
    mmp 210 week 5
*/

var dog; // global

function preload() {
    dog = loadImage("dog.jpg");
}

function setup() {
    createCanvas(700, 700);
}

function draw() {
    background(0);
    
    image(dog, 0, 0, width, height);
    
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(70);
    textFont("Comic Sans MS");
    text("CHESSEEEEEEE", 330, 630);
}