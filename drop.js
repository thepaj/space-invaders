function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;
  
  this.show = function() {
    fill(150, 0, 255);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }
  
   this.move = function() {
    this.y = this.y - 5;
  }
  
  this.evaporate = function() {
    this.toDelete = true;
  }
  
  this.hits = function(flower) {
    let d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  }
}