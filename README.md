# Introduction to Programming with p5.js

## Resources
- [p5.js Reference](https://p5js.org/reference/)
- [The Coding Train](https://www.youtube.com/user/shiffman/playlists?view=50&sort=dd&shelf_id=14) – YouTube Tutorials von Daniel Shiffman
- Book (and Website) [Generative Gestaltung](http://www.generative-gestaltung.de/2/) von Benedikt Groß, Hartmut Bohnacker und Julia Laub

## Inspriration
- [Zach Lieberman - Daily Sketches](https://www.instagram.com/zach.lieberman/)
- [Lauren Mccarthy - us+](http://www.lauren-mccarthy.com/us)
- [onformative - Porsche Backbox](https://onformative.com/work/porsche-blackbox)
- [Kyle McDonald - Sharing Faces](https://vimeo.com/96549043)
- [Andreas Nicolas Fischer - VOID VIII 01](http://studioanf.com/v0id-8/)
- [Waltz Binaire - Soap and Milk](http://waltzbinaire.com/work/soap-and-milk/), openframeworks + vvvv
- [Facadeprinter](http://sonicedevelopment.com/vamos-rafa/)
- [So Kanno - Lasermice](http://kanno.so/lasermice/)
- [Benjamin Maus - Jller](https://vimeo.com/167126696)

## Sessions
### N°1 08.12.2018
- Introduction Round 
	- background, programming experience, interests
- Overview of what we're going to do
- Intro to p5.js
	- [what is p5.js](http://hello.p5js.org)
	- [Web Editor](https://editor.p5js.org)
	- setup() and draw()
 	- comments
	- createCanvas()
	- ellipse()
	- [coordinate system](https://p5js.org/learn/coordinate-system-and-shapes.html)
	- rect()
	- stroke, fill
	- mouseX, mouseY
	- if/else, mouseIsPressed
	- background -> difference between setup and draw
- Additional Topics 
	- [more interactivity](https://p5js.org/learn/interactivity.html)
		- keyIsPressed
		- pmouseX, pmouseY
	- binary logic 
	- arrays
	- translate/rotate/scale
		- push/pop
	- print
	- [colors](https://p5js.org/learn/color.html) / hsb
	- random & noise
	- variables
		- global vs lokal
	- functions
	- javascript objects 
	- classes
	- conditionals
	- bouncing balls
	- loops
		- loop-in-loop
	- images
	- sound
	- 3d
	- APIs
	- running p5js locally
	- serving from a server
	- [backend-stuff](https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io)
	- libraries
	- [p5.dom library](http://p5js.org/reference/#/libraries/p5.dom), [beyond the canvas](https://github.com/processing/p5.js/wiki/Beyond-the-canvas)

	
	
	
	





function setup() {
	createCanvas(400, 400);
	background(225, 0, 100);
}

function draw() {
	if (mouseIsPressed) {
		ellipse(mouseX, mouseY, 50, 50);
	} 
	else {
		background(225, 200, 100);	
	}
}