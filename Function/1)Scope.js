var vscope = 'global';
function fscope(){
	var vscope = 'local';
	alert(vscope);
}
function fscope2(){
	alert(vscope);
}
fscope();
fscope2();


funciton a (){
	var i = 0;	//var을 붙여 지역변수 임을 명시
	//i = 0;	//for 내 i (전역변수) 값을 변경
}
for (var i = 0; i < 5; i++){
	a();
	document.write(i);
}


(function (){
	MYAPP = {}
	MYAPP.calculator = {
		'left' : null,
		'right' : null
	}
	MYAPP.coordinate = {
		'left' : null,
		'right' : null
	}
	MYAPP.calculator.left = 10;
	MYAPP.calculator.right = 20;
	function sum(){
		return MYAPP.calculator.left + MYAPP.calculator.right;
	}
	document.write(sum());	
}())


var j = 5;
function a(){
	var j = 10;
	b();
}
function b(){
	document.write(j);	//i == 5 (a함수 내 j가 아닌 전역변수 j 값)
}						//사용될 때가 아닌 정의될 때(정적 유효범위)
a();