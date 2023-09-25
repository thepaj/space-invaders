function Flower(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  
  this.show = function() {
    fill(255, 0, 200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.grow = function() {
    this.r += 2;
  }
}