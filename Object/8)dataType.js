//크게 두가지로 분류 : 원시 데이터 타입(기본) vs 객체 데이터 타입(참조)
//원시 데이터 타입 : 숫자, 문자열, 불리언, null, undefined

//레퍼 객체
var str = 'coding';			//str = new String('Coding');
console.log(str.length)		//6		
console.log(str.charAt(0));	//"C"
//. === object access operator

str.prop = 'everday';		//이 순간에는 객체가 만들어 졌음. 끝나면 객체를 제거하고 원시 데이터타입으로 변경
console.log(str.prop);		//undefined
//wrapper object : 임시로 원시데이터를 객체로 감싸주는 객체 (자동으로 처리)
//숫자 -> Numer, 문자열 -> String, 불리언 -> Boolean, null -> x, undefined -> x