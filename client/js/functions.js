$(document).ready(function(){
	$('#palindrome-form').submit(function() {
		$.ajax({
			url: '/api/palindrome',
			method: 'POST',
			data: {
				content: $('#palindromeInput').val()
			},
			success: function(data){
				showMessage(data.message, 'alert-success');
			},
			error: function(data){
				showMessage(data.responseJSON.message, 'alert-danger');
			}
		})
		return false;
	})

});

function showMessage(message, alertClass) {
	$('#response-container').html('<div class="alert ' + alertClass + '">' + message + '</div>');
}