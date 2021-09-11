//prototype-based programming

var person = {}		//비어 있는 Object
person.name = 'psh';
person.introduce = function(){				//property에 담겨져 있는 함수 == 메서드
	return 'My name is ' + this.name;
}
document.write(person.introduce());
 
 var person2 = {
 	'name' : 'psh',
 	'introduce' : function(){
 		return 'My name is ' + this.name;
 	}
 }
document.write(person2.introduce());
//같은 방법


//new
function Person() {}
var p = new Person();		//객체의 생성자, p => Person{}
p.name = 'psh';
p.introduce = function(){
	return 'My name is ' + this.name;
}
document.write(p.introduce());
//생성자는 함수일 뿐, 리턴 값은 객체 (class 존재 x)

function Person2(name){
	this.name = name;
	this.introduce = fucntion(){
		return 'My name is ' + this.name;
	}
}

var p1 = new Person2('psh');
document.write(p1.introduce() + "<br />");

var p2 = new Person2('sh');
document.write(p2.introduce());
//생성자는 객체에 대한 초기화(중복성 제거)