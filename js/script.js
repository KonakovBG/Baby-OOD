$(document).ready(function(){
	$('.form').on('submit', function(e){
		e.preventDefault();

		var formData = $('.form').serializeArray();

		$.ajax({
			url: '../php/data.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function(response){
				if(response){
					$('.result').html("Message sent!").css("color","green");								
				} else{
					$('.result').html("Please fill all fields").css("color","red");
				}
				console.log(response);
			}
		})
	})
});