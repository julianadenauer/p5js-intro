var monkey;

function preload() {
  monkey = loadModel('22-monkey-big.obj');
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  ambientMaterial(200, 100, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(20);
  model(monkey);
}