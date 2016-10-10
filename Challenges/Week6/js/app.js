//#Week 6 JQuery Code Challenge

//Objects

//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
var box = function(h, w){
	this.height = h; 
	this.width = w; 
	//this.volume: 0, 
}; 
box.prototype.area = function(h = this.height, w = this.width) {
	return h * w;
};
box.prototype.areaIecrease: function() {
	this.height ++;
	this.width ++;
};

box.prototype.areaDncrease: function() {
	this.height --;
	this.width --;
};
box.prototype.heightIncrease: function() {
	this.height ++;
	this.width ++;
};
box.prototype.heightDncrease: function() {
	this.height --;
	this.width --;
};


//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.

//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume