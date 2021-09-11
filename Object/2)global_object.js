function func(){
	alert('Hello World!');
}

func();
window.func();	//객체.속성(메서드)
//동일 -> default 객체는 window


var o = {'func':function(){
	alert('H');
}}
o.func();
window.o.func();