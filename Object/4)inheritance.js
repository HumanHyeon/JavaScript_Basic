function Person(name){
	this.name = name;
}
Person.prototype.name = null;	//prototype는 예약어
Person.prototype.introduce = function(){
	return 'My name is ' + this.name;
}

function Programmer(name){
	this.name = name;
}
Programmer.prototype = new Person();	//상속
Programmer.prototype.coding = function(){
	return "do coding";
}

function Designer(name){
	this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = fucntion(){
	return "do design";
}


var p1 = new Programmer('psh');
console.write(p1.introduce() + "<br />");
console.write(p1.coding() + '<br />');

var p2 = new Designer('sh');
console.write(p2.introduce() + "<br />");
console.write(p2.desgin() + "<br />");