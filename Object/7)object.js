//표준 객체 object
//object는 모든 객체의 부모, object의 prototype은 모든 객체의 prototype(원형) -> object가 가지고 있는 기능은 모든 객체가 사용 가능하다. 

var grades = {'math':10, 'korean':6, 'english':15};


Object.prototype.contain = function(needle){
	for (var name in this){
		if (this[name] === needle){
			return true;
		}
	}
	return false;
}

var o = {'name':'psh', 'city':'seoul'};
console.log(o.contain('psh'));
var a = [ 'a', 'b', 'c' ];
console.log(a.contain('c'));


//위험성
for (var name in o){
	console.log(name);	//contain도 포함되어 있음 -> object에 추가했기 때문에 모든 객체에 포함되어 있음
}

for (var name in a){
	if(a.hasOwnProperty(name)){		//name에 대한 proerty를 a가 가지고 있는가 -> 그 객체에 직접적으로 정의되어 있으면 true
		console.log(name);
	}
}