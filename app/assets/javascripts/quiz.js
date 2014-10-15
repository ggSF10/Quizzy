$(document).ready(function(){
  $.get('/quizzes', function(data){
  var template = $(".quiz-menu-template").html();
  var uncompiledTemplate = _.template(template);
  var compiledTemplate = uncompiledTemplate({
    content: data
  });
  var $element = $(compiledTemplate);
  $('.showData').append($element);
  });

};

