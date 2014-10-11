
var getData = function(callback){
	$.ajax({
		url: '/quizzes',
		success: function(data){
			callback(data);
		},
		error: function(response){
			callback(response);
		}
	});
};

var callBack = function(data){
	for(i=0; i<data.length; i++){
		$('body').append(data[i].title);
	};

	$('body').append('<button id="create-quiz-button">Create Quiz</button>');
	$('#create-quiz-button').on('click')
};

getData(callBack);




