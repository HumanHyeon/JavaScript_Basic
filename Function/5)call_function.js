//js에서 함수는 일종의 객체
//객체에 속성만 있으면 속성, 함수가 있으면 메소드라 함
function func(){
}
func();

function sum(arg1, arg2){
	return arg1 + arg2;
}
alert(sum.apply(null, [1, 2]))	//apply는 함수의 내장 메소드
						

o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
	var _sum = 0;
	for (name in this){			//key를 꺼냄
		_sum += this[name];		//key를 통해 value를 가져옴
	}
	return _sum;
}
alert(sum.apply(o1))	//6
alert(sum.apply(o2))	//185