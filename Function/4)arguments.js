function sum(){
	var i, _sum = 0;
	for (var i = 0; i < arguments.length; i++){
		document.write(i + ' : ' + arguments[i] + '<br />');
		_sum += arguments[i];
	}
	return _sum;
}
document.write('result : ' + sum[1, 2, 3, 4]);	//js는 가변인자 가능, 심지어 매개변수 선언안해도 가능
//arguments는 미리 선언된 키워드로 함수 내부에 있는 배열 같은 것


function zero(){
	console.log(
		zero.length,
		arguments.length
	);
}
zero();	//0 0

function one(arg1){
	console.log(
		one.length,			//함수이름.length는 함수에서 정의한 매개변수 수를 알려줌
		arguments.length 	//arguments.length는 함수에 실제로 들어온 매개변수 수를 알려줌
	);
}
one('val1', 'val2');	//1 2