//js의 객체지향을 지탱하고 있는 핵심 개념

function Ultra(){}
Ultra.prototype.ultraProp = true;

function Supe(){}
Super.prototype = new Ultra();	//상속 받고자 하는 객체를 우항에 위치

function Sub(){}
Sub.prototype = new Super();		//Super의 프로토타입을 받음(prototype chain)

var o = new Sub;
console.log(o.ultraProp);	//true

//생성자는 기본적으로 함수
//new를 붙여야 생성자로 작동

//객체의 원형은 prototype에 저장되어 있음

o.ultraProp = 1;
 console.log(o.ultraProp);	//1
