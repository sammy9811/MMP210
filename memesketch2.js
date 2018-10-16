/*
 Meme
By Samuel Delacruz
*/
/*
    Meme v 0
    by Samuel Delacruz
    10.2.2018
    rough draft
    mmp 210 week 5
*/

var dog; // global
var cat; 
function preload() {
    dog = loadImage("dog.png");
    cat = loadImage("cat.jpg");
     
}






function setup() {
	createCanvas(650, 650);
    background("BLACK"); 
}

function draw() {
    fill('RED');
    textSize(50);
    textFont("Comic Sans MS");
    textAlign(CENTER);   
}

function mouseClicked() {
        background("BLACK");
        if (mouseX > 250){
            text("NOO", 150, 500);
            image(cat, width/2, height/2, width/2, height/2);
        } 
    else {
            text("SMILEEEE", 400, 125, 200, 100);
            image(dog, 0, 0, width/2, height/2);
        }
    
    if (mouseX > width/2 && mouseY > height/2) {
        
		Image(cat,width/2, height/2, width, height);
		} 
    
    else if (mouseX < width/2 && mouseY > height/2) {
       
		Image(dog,0, height/2, width/2, height);
	} 
   
    else if (mouseX > width/2 && mouseY < height/2) {
		Image(cat,width/2, 0, width, height/2);
	} 
   
    else {
		image(dog,0, 0, width/2, height/2);
	}
}

