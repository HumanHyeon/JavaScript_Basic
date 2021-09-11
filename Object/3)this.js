//this는 함수 호출 맥락을 의미

function func(){
	if(window === this){
		document.write("window === this");
	}
}
//window.func();
func();		//this는 전역 객체를 의미하는 window


var o = {
	func : function() {
		if (o === this){
			console.log("o === this");
		}
	}
}
o.func();	//메소드에서 this를 호출하면 메서드가 소속되어 있는 객체를 의미


//생성자 안에서의 this
var funcThis = null;

function Func(){
	funcThis = this;
}
var o1 = Func();			//함수로 호출시 window
if (funcThis === window){	//실행
	console.log('window </br>');
}
var o2 = new Func();		//생성될 객체를 의미
if (funcThis === o2){		//실행
	console.log('o2 </br>');
}
//생성자 안에서의 this는 호출한 객체


var o3 = {}
var p3 = {}
function func3(){
	switch(this){
		case o3:
			document.write('o3 <br />');
			break;
		case p3:
			document.write('p3 <br />');
			break;
		case window:
			document.write('window <br />');
			break;
	}
}
func3();			//window를 의미
func3.apply(o);		//this는 o
func3.apply(p);
//js는 객체와 함수(메서드)가 master-slave 관계가 아님
//js는 메서드가 한 곳에만 종속되지 않고 원할 때 다른 곳에 종속될 수 있음

