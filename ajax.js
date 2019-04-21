$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'https://docs.google.com/forms/d/e/1FAIpQLSfmywee8qxFIrQTY7EOGWBejSrDN3Rt3mgUSJBjHzYTSrQ_WQ/formResponse');
			return false;
		}
	);
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "xml", //формат данных
        //data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        data:{

          "entry.1308696487" : $('#firstInput').val(),
          "entry.474829116" : $('#secondInput').val()

        },
        statusCode: {
                0: function() {
                    //Success message
                    alert("0!")
                },
                404: function() {
                    //Success Message
                  //  alert("404!")
                  $('#result_form').html('Данные отправлены ))');
                },
                200: function() {
                    //Success Message
                    alert("200!")
                }
            },

      //   success: function(response) { //Данные отправлены успешно
      //   	//result = response;
      //     //$('#showresults').replaceWith($('#showresults').html(response));
      //      alert(response.status);
      //   	$('#result_form').html('Данные отправлены ))');
    	// }
      //,
    	// error: function(response) { // Данные не отправлены
      //   alert(response.status);
      //       $('#result_form').html('Данные yt отправлены ))');
    	// }
 	});
}
