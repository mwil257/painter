// inspired by code from Daniel Shiffman
// his code: https://youtu.be/vqE8DMfOajk
// Youtube video for this project: https://www.youtube.com/watch?v=F7T8unw-oYk

function Particle(x, y, filename, filename2, filename3, filename4, filename5) {
  this.filename = filename;
  this.filename2 = filename2;
  this.filename3 = filename3;
  this.filename4 = filename4;
  this.filename5 = filename5;
  this.feedback;
  this.vol = new Tone.Volume(0);
  this.vol2 = new Tone.Volume(0);
  this.vol3 = new Tone.Volume(0);
  this.vol4 = new Tone.Volume(0);
  this.vol5 = new Tone.Volume(0);
  this.pingPong = new Tone.PingPongDelay();
  this.player = new Tone.GrainPlayer({
    "url" : this.filename,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).chain(this.vol, this.pingPong, Tone.Master);
  this.player2 = new Tone.GrainPlayer({
    "url" : this.filename2,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).chain(this.vol2, this.pingPong, Tone.Master);
  this.player3 = new Tone.GrainPlayer({
    "url" : this.filename3,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).chain(this.vol3, this.pingPong,Tone.Master);
  this.player4 = new Tone.GrainPlayer({
    "url" : this.filename4,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).chain(this.vol4, this.pingPong, Tone.Master);
  this.player5 = new Tone.GrainPlayer({
    "url" : this.filename5,
    "overlap" : 0.1,
    "grainSize" : 0.2,
    "drift" : 0,
    "playbackRate" : 1,
    "detune" : 2100,
    "loop" : true,
    "loopStart" : 0,
    "loopEnd" : 1,
    "reverse" : false,
  }).chain(this.vol5, this.pingPong, Tone.Master);
  this.loopX;
  this.loopY;
  this.x = x;
  this.y = y;
  this.r = random(4, 34);
  this.drift;
  this.play;
  this.pitch
  this.colR;
  this.colG;
  this.colB;
  this.grainSize;
  this.delayTime = 0.1;
  this.frequency = 8;
  this.wet= 0;
  this.amp;
  this.amp2;
  this.amp2B;
  this.amp3;
  this.amp4;
  this.amp4B;
  this.amp5;
  this.freq;
  this.freq2;
  this.oct;
  this.wet2;
  this.dawn = function(){
    this.player.start();
    this.player2.start();
    this.player3.start();
    this.player4.start();
    this.player5.start();
    this.vol.mute = true;
    this.vol2.mute = true;
    this.vol3.mute = true;
    this.vol4.mute = true;
    this.vol5.mute = true;

  }
  this.sleep = function(){
    this.vol.mute = true;
    this.vol2.mute = true;
    this.vol3.mute = true;
    this.vol4.mute = true;
    this.vol5.mute = true;
  }
  this.wake = function(){
    this.vol.mute = false;
  }

  this.update = function() {
    this.x += int(random(-10, 10));
    this.y += int(random(-10, 10));
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    this.loopX = map(this.x, 0, 640, 0.1, this.grainSize/2);
    this.loopY = map(this.y, 0, 480, this.grainSize/1.8, this.grainSize);
    this.drift = map(this.x, 0, 640, 0, 2);
    this.play = map(this.y, 0, 1000, 0.2, 2);
    this.playbackRate = map(this.y, 0, 480, 0.1, 3);
    this.player.playbackRate = this.play;
    this.player2.playbackRate = this.play;
    this.player3.playbackRate = this.play;
    this.player4.playbackRate = this.play;
    this.player5.playbackRate = this.play;
    this.player.drift = this.drift;
    this.player2.drift = this.drift;
    this.player3.drift = this.drift;
    this.player4.drift = this.drift;
    this.player5.drift = this.drift;

    // this.amp = int(map(sensor0, 0, 500, 10, -20));
    // this.amp2 = int(map(sensor0, 0, 500, -20, 10));
    // this.amp2B = int(map(sensor0, 500, 1000, 10, -20))
    // this.amp3 = int(map(sensor0, 500, 1000, -20, 10));
    // this.amp3B = int(map(sensor0, 1000, 1500, 10, -20));
    // this.amp4 = int(map(sensor0, 1000, 1500, -20, 10));
    // this.amp4B = int(map(sensor0, 1500, 2000, 10, -20));
    // this.amp5 = int(map(sensor0, 1500, 2000, -20, 10));
    // if(sensor0 > 500){
    //   this.amp2 = this.amp2B;
    //   // print(sensor0, this.amp, this.amp2, this.amp3, this.amp4);
    // }
    // if(sensor0 > 1000){
    //   this.amp3 = this.amp3B;
    //   // print(sensor0, this.amp, this.amp2, this.amp3, this.amp4);
    // }
    // if(sensor0 > 1500){
    //   this.amp4 = this.amp4B;
    // }
    // if(this.amp >= -20){
    //   this.vol.mute = false;
    //   this.vol.volume.value = this.amp;
    // } else if (this.amp < -20) {
    //   this.vol.mute = true;
    // }
    // if(this.amp2 >= -20){
    //   this.vol2.mute = false;
    //   this.vol2.volume.value = this.amp2;
    // } else if (this.amp2 < -20) {
    //   this.vol2.mute = true;
    // }
    // if(this.amp2B  < -20){
    //   this.vol2.mute = true;
    // }
    // if(this.amp3 >= -20){
    //   this.vol3.mute = false;
    //   this.vol3.volume.value = this.amp3;
    // } else if (this.amp3 < -20) {
    //   this.vol3.mute = true;
    // }
    // if(this.amp3B  < -20){
    //   this.vol3.mute = true;
    // }
    // if(this.amp4 >= -20){
    //   this.vol4.mute = false;
    //   this.vol4.volume.value = this.amp4;
    // } else if (this.amp4 < -20) {
    //   this.vol4.mute = true;
    // }
    // if(this.amp4B  < -20){
    //   this.vol4.mute = true;
    // }
    // if(this.amp5 >= -20){
    //   this.vol5.mute = false;
    //   this.vol5.volume.value = this.amp5;
    // } else if(this.amp5  < -20){
    //   this.vol5.mute = true;
    // }
  }

  this.show = function() {
    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    this.colR = col[0];
    this.colG = col[1];
    this.colB = col[2];
    var average = (this.colR + this.colG +this.colB)/3;
    this.pitch = int(map(this.x, 0, windowWidth, -2400, 2400));
    this.player.detune = this.pitch;
    this.player2.detune = this.pitch;
    this.player3.detune = this.pitch;
    this.player4.detune = this.pitch;
    this.player5.detune = this.pitch;
    this.alpha = map(sensor1, 0, 1000, 0, 255);
    fill(this.colR, this.colG, this.colB, this.alpha);
    ellipse(this.x, this.y, this.r, this.r);
    this.delayTime = map(sensor0, 0, 2000, 0.9, 0.1);
    this.pingPong.delayTime.value = this.delayTime;
    this.feedback = map(sensor1, 0, 1000, 0, 0.9);
    this.pingPong.feedback.value  = this.feedback;
    this.wet = map(sensor2, 0, 1000, 0, 1);
    this.pingPong.wet.value =this.wet;
    print(this.pingPong.delayTime.value, this.pingPong.feedback.value, this.pingPong.wet.value);
    this.amp = int(map(average, 0, 63, 10, -20));
    this.amp2 = int(map(average, 0, 63, -20, 10));
    this.amp2B = int(map(average, 63, 126, 10, -20))
    this.amp3 = int(map(average, 63, 126, -20, 10));
    this.amp3B = int(map(average, 126, 189, 10, -20));
    this.amp4 = int(map(average, 126, 189, -20, 10));
    this.amp4B = int(map(average, 189, 255, 10, -20));
    this.amp5 = int(map(average, 189, 255, -20, 10));
    if(average > 63){
      this.amp2 = this.amp2B;
      // print(sensor0, this.amp, this.amp2, this.amp3, this.amp4);
    }
    if(average > 126){
      this.amp3 = this.amp3B;
      // print(sensor0, this.amp, this.amp2, this.amp3, this.amp4);
    }
    if(average > 189){
      this.amp4 = this.amp4B;
    }
    if(this.amp >= -20){
      this.vol.mute = false;
      this.vol.volume.value = this.amp;
    } else if (this.amp < -20) {
      this.vol.mute = true;
    }
    if(this.amp2 >= -20){
      this.vol2.mute = false;
      this.vol2.volume.value = this.amp2;
    } else if (this.amp2 < -20) {
      this.vol2.mute = true;
    }
    if(this.amp2B  < -20){
      this.vol2.mute = true;
    }
    if(this.amp3 >= -20){
      this.vol3.mute = false;
      this.vol3.volume.value = this.amp3;
    } else if (this.amp3 < -20) {
      this.vol3.mute = true;
    }
    if(this.amp3B  < -20){
      this.vol3.mute = true;
    }
    if(this.amp4 >= -20){
      this.vol4.mute = false;
      this.vol4.volume.value = this.amp4;
    } else if (this.amp4 < -20) {
      this.vol4.mute = true;
    }
    if(this.amp4B  < -20){
      this.vol4.mute = true;
    }
    if(this.amp5 >= -20){
      this.vol5.mute = false;
      this.vol5.volume.value = this.amp5;
    } else if(this.amp5  < -20){
      this.vol5.mute = true;
    }
  }

}
