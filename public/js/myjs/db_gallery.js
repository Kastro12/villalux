
// UNOS NOVIH SLIKA



		//BRISANJE SLIKA

$(document).ready(function(){
	$(document).on('click', '#delete_img', function(){
		var element = this;
		var img = $(element).attr('value');

		if (confirm('Are You Sure?')){
   		//	console.log(img);

   		$.ajax({
   			url: '/admin/admin_pages/adminServer/gallery/delete_img.php',
   			method: 'GET',
   			data: {image: img},
   			success: function(data)
   			{
   				
   					window.location.reload();
   			},
   			error: function(data)
   			{
   				alert('greska');
   			}
   		});


			}
			else
			{ 
				img = undefined;
				
				
			}

	}); 
});