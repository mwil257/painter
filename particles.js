function Particles(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(4, 32);
  this.alpha = 0;
  this.update = function() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  this.show = function() {
    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    this.alpha = map(sensor1, 0, 1000, 0, 255);
    fill(col[0], col[1], col[2], this.alpha);
    ellipse(this.x, this.y, this.r, this.r);
  }

}
