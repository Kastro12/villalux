

$(document).ready(function(){
	$(document).on('click', '#delete_user', function(){
		var element = this;
		 var nameUser = $(element).attr("value");
		
	
		$('.modal').modal();

		$('#close').on('click', function(){
			 nameUser = undefined;	
		//	$('.modal').modal('hide');
		
		
		//	console.log(nameUser);
		});
			$('#delete_user').unbind('click');


		$('#confirm').on('click', function(){

			$('.modal').modal('hide');
			console.log(nameUser);
			$.ajax({
				url: '/admin/admin_pages/adminServer/users/delete_users.php',
				type: 'GET',
				data:{user: nameUser},
				success: function(data){
					window.location.reload();
				},
				error: function(){
					alert('greska');
				}
			});
$('#confirm').unbind('click');

		});
		
	});
	
});








