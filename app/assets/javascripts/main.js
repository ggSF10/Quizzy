
var getData = function(callback){
	$.ajax({
		url: '/quizzes',
		success: function(data){
			callback(data);
		},
		error: function(res){
			callback(res);
		}
	});
};

var callBack = function(data){
	for(i=0; i<data.length; i++){
		$("#quizDiv").append(data[i].title);
		// console.log(data[i])
	};
};

getData(callBack);

// document ready