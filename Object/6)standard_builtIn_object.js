//example = object, function, array, string, boolean, number, math, date, regExp


//내장 객체의 기능 확장
var arr = new Array(1, 2, 3, 4, 5);

function getRandomValueFromArray(arr){
	var index = Math.floor(arr.length * Math.random());
	return arr[index];
}
console.log(getRandomValueFromArray(arr));

Array.prototype.random = function(){	//표준 내장 객체 prototype에 추가
	var index = Math.floor(this.length * Math.random());
	return this[index];
}
console.log(arr.random());