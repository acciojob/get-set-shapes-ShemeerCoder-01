//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	getWidth(){
		return this.width;
	}
	getHeight(){
		return this.height;
	}
	getArea(){
		let sum =  this.width * this.height;
		return sum;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		let peri  = 2 * (this.width + this.height);
		return peri;
	}
}

let rectangle1 = new Rectangle(5,5);
rectangle1.getWidth;
rectangle1.getHeight;
rectangle1.getArea();

let square1 = new Square(12,12);
square1.getWidth;
square1.getHeight;
square1.getPerimeter();


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
