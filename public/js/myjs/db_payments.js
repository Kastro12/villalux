$(document).ready(function(){
	$(document).on('click', '#paid', function(){
		var element = this;
		 var paid = $(element).attr("value");
		

	
if (confirm('confirm payment.')){


	

			$.ajax({
				url: '/admin/admin_pages/adminServer/payments/confirm_payments.php',
				type: 'POST',
				data:{c: paid},
				success: function(c){
					window.location.reload();
				},
				error: function(c){
					alert('greska');
				}
			});

			}
			else
			{ 
				data = undefined;
				
				
			}
		
	});
	
});
