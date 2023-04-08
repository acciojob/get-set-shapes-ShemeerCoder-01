//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get Width(){
		return this.width;
	}
	get Height(){
		return this.height;
	}
	getArea(){
		return  this.width * this.height;
		
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	
	getPerimeter(){
		return 4 * this.Width;
	}
}

let rectangle1 = new Rectangle(5,10);
rectangle1.getWidth;
rectangle1.getHeight;
rectangle1.getArea();

let square1 = new Square(7);
square1.getWidth;
square1.getHeight;
square1.getPerimeter();


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
