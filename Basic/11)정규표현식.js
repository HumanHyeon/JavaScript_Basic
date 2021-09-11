var pattern = /a/;
var pattern2 = new RegExp('a'); //New RegulatrExpression 약자
//pattern pattern2는 동일

//exec
console.log(pattern.exec('abcdef'));	//["a"] : []는 배열, exec()내부에 있는 정보(문자열)에서 a를 찾음
console.log(pattern2.exec('bcdefg'));	//null : 찾고자 하는 대상에서 찾는 값이 없음

//test
console.log(pattern.test('abcdef'));	//true		리턴 값은 boolean
console.log(pattern2.test('bcdefg'));	//false		test는 있는지 없는지 확인

//match
console.log('abcef'.match(pattern));	//["a"]
console.log('bcdefg'.match(pattern2));	//null

//replace
console.log('abcef'.replace(pattern, 'A'));		//Abcef
console.log('bcdefg'.replace(pattern2, 'A'));	//bcdefg

//option (두 번째 /뒤에 붙임 ex -> /a/i)
//i : 대소문자를 구분하지 않음
var xi = /a/;
console.log("Abcdef".match(xi));	//null
var oi = /a/i;
console.log("Abcdef".match(oi));	//["A"]

//g(global) : 검색된 모든 결과를 리턴
var xg = /a/;
console.log("abcdea".match(xg));	//["a"]
var og = /a/g;
console.log("abcdea".match(og));	//["a", "a"]

var ig = /a/ig;
console.log("AabcdAa".match(ig));	//["A", "a", "A", "a"]

//instance
//capture
var pattern3 = /(\w+)\s(\w+)/;
var str = "coding everbody";
var result = str.replace(pattern3, "$2, $1");	//everbody, coding
console.log(result);							//$는 ()그룹을 의미, "$2, $1"이 치환할 하나의 패턴
