function outter(){
	var title = 'coding';
	function inner(){	// var inner = function(){}
		alert(title);
	}
	inner();
}
outter();


function outter(){
	var title = 'coding';
	return function(){
		alert(title);
	}
}
inner = outter();	//outter의 실행 결과를 담음
inner();
//외부 함수가 종료되었을 지라도 내부함수를 통해 외부함수의 값들에 접근할 수 있다.


function factory_movie(title){		//title은 외부 함수의 지역변수(private)
	return {		// {} = 객체
		get_title : function(){
			return title;
		}
		set_title : function(_title){
			title = _title
		}
	}
}
ghost = factory_movie('Ghost');		//변수에 get,set 함수들이 담긴 객체가 반환됨
matrix = factory_movie('Matrix');
alert(ghost.get_title());
alert(matrix.get_title());
ghost.set_title('new title');
alert(ghost.get_title());
//private 접근 지정자를 위해 사용
//class 개념


var arr = []
for (var i = 0; i < 5; i ++){
	arr[i] = function(id){
		return function(){
			return id;		//내부함수가 외부함수의 id에 접
		}
	}(i);	//return된 값이 arr[i]에 담김
}
for (var index in arr){
	console.log(arr[index]());
}