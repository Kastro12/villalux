// click on CONFIRMED RESERVATION - REMOVE

$(document).ready(function(){
	$(document).on('click', '#remove', function(){
		var element = this;
		var reservation = $(element).attr("value");


		if (confirm('Remove  from confirmed reservation?')){


		$.ajax({
			url: '/admin/admin_pages/adminServer/reservation/delete_reservation.php',
			method: 'POST',
			data:{data:reservation},
			success: function(data)
			{

				window.location.reload();
			},
			error: function(data)
			{

			}
			});

			}
			else
			{ 
				data = undefined;
				
				
			}


	});
});

//click on MADE RESERVATION - confirm
$(document).ready(function(){
	$(document).on('click', '#confirm', function(){
		var element = this;
		var c = $(element).attr('value');


			if (confirm(' confirm reservation')){

		$.ajax({
			url: '/admin/admin_pages/adminServer/reservation/delete_reservation.php',
			method: 'POST',
			data:{confirm:c},
			success: function(c)
			{

				window.location.reload();
			},
			error: function(c)
			{

			}
		});

		}
			else
			{ 
				c = undefined;
				
				
			}

	});
});

//click on MADE RESERVATION - delete

$(document).ready(function(){
	$(document).on('click', '#delete', function(){
		var element = this;
		var del = $(element).attr('value');

			if (confirm('Click ok to delete reservation.')){

		$.ajax({
			url: '/admin/admin_pages/adminServer/reservation/delete_reservation.php',
			method: 'POST',
			data:{delete:del},
			success: function(del)
			{

			//	window.location.reload();
			},
			error: function(del)
			{

			}
		});

		}
			else
			{ 
				del = undefined;
				
				
			}

	});
});