//복제(참조 반대 개념)
var a = 1;
var b = a; //복제
b = 2;
console.log(a);	//1


//복제
var a2 = {'id':1};
var b2 = a;	//참조 : 변수에 담긴 데이터가 객체인 경우 자동 참조(데이터가 원시 데이터인 경우에는 복제)
b.id = 2;
console.log(a.id);	//2


//함수
var a3 = 1;
function func3(b3){
	b3 = 2;
}
func3(a3);
console.log(a3);	//1

var a4 = {'id':1};
function func4(b4){
	b4 = {'id':2};
}
func4(a);
console.log(a.id);	//1

var a5 = {'id':1};
function func5(b5){
	b5.id = 2;
}
func5(a5);
console.log(a.id);	//2 (참조 발생)
