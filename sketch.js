var video;
var vScale = 16;
var particle;
var loopHigh = 2;
var slider;
var particles = [200];
var player0;
var player1;
var player2;
var player3;
var player4;
var slider;
var frameCount;
var outByte = 0;
var sensor0 = 0;
var sensor1 = 0;
var sensor2 = 0;
var buttonVal = 0;
var buttonVal1 = 0;
var buttonVal2 = 0;
var buttonVal3 = 0;
var buttonCount = 0;
var outByte = 'x';
var particleCount = 0;
var canvas;
var cam;
var recorder;
function setup() {
  canvas = createCanvas(640, 480);
  pixelDensity(1);
  createCanvas(640, 480);
  slider0 = createSlider(0, 1023, 1);
  slider0.position(0, 510);
  slider0.input(updateSlider);
  slider1 = createSlider(0, 1023, 1023);
  slider1.position(0, 535);
  slider1.input(updateSlider);
  slider2 = createSlider(0, 1023, 1);
  slider2.position(0, 560);
  slider2.input(updateSlider);
  check1 = createCheckbox('Voice 1', false);
  check1.changed(myCheckedEvent);
  check1.position(0, 490);
  check2 = createCheckbox('Voice 2', false);
  check2.changed(myCheckedEvent2);
  check2.position(100, 490);
  check3 = createCheckbox('Voice 3', false);
  check3.changed(myCheckedEvent3);
  check3.position(200, 490);
  check4 = createCheckbox('Voice 4', false);
  check4.changed(myCheckedEvent4);
  check4.position(300, 490);
  updateSlider();
  cam = createImg("camera.png");
  cam.size(35, 35);
  cam.mousePressed(snap);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  particle = new Particle(random(width), random(height), "keys2.wav", "intro.wav", "type.wav", "whistle.wav", "intro.wav");
  particle2 = new Particle(random(width), random(height), "guirro.wav", "glock.wav", "gliss.wav", "melody.wav", "dub2.wav");
  particle3 = new Particle(random(width), random(height), "beat2.wav", "glock2.wav", "synth.wav", "scream.wav", "stun.wav");
  particle4 = new Particle(random(width), random(height), "stun.wav", "feedback.wav", "work.wav", "guitar.wav", "keyboard.wav");
  particle.dawn();
  particle2.dawn();
  particle3.dawn();
  particle4.dawn();
  for (var i = 0; i < 200; i++) {
    particles[i] = new Particles(random(width), random(height));
  }
}

function snap(){
  saveCanvas(canvas, 'myPortrait', 'png');
  serial.write('s');
  print("snap");
}

function draw() {
  particleCount = int(map(sensor0, 0, 1000, 0, 50));
  print(sensor0, sensor1, sensor2, buttonVal, buttonVal1, buttonVal2,buttonVal3);
  video.loadPixels();
  if(buttonVal == 0){
  particle.sleep();
} else if(buttonVal == 1){
  particle.update();
  particle.show();
}
if(buttonVal1 == 0){
particle2.sleep();
} else if(buttonVal1== 1){
particle2.update();
particle2.show();
}
if(buttonVal2 == 0){
particle3.sleep();
} else if(buttonVal2== 1){
particle3.update();
particle3.show();
}
if(buttonVal3 == 0){
particle4.sleep();
} else if(buttonVal3== 1){
particle4.update();
particle4.show();
}
  if(buttonVal == 0){
    particle.sleep();
  }
  for(var i = 0; i < particleCount; i++) {
    particles[i].update();
    particles[i].show();
  }
  frameCount ++;
}
function myCheckedEvent() {
  if (this.checked()) {
  buttonVal = 1;
  } else {
  buttonVal = 0;
  }
}
function myCheckedEvent2() {
  if (this.checked()) {
    buttonVal1 = 1;
  } else {
  buttonVal1 = 0;
  }
}
function myCheckedEvent3() {
  if (this.checked()) {
    buttonVal2 = 1;
  } else {
  buttonVal2 = 0;
  }
}
function myCheckedEvent4() {
  if (this.checked()) {
    buttonVal3 = 1;
  } else {
  buttonVal3 = 0;
  }
}
function updateSlider(){
sensor0 = slider0.value();
print(sensor0);
sensor1 = slider1.value();
print(sensor1);
sensor2 = slider2.value();
print(sensor2);
}
