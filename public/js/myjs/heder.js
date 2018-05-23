
$(document).ready(function(){
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 610) {
 		$('.navbar-inverse').css({
 			"background-color": "rgba(0, 204, 204, 0.9)",
 				
 		});
		}else
		{
			$('.navbar-inverse').css({
 			"background-color": "transparent",
 			"border-bottom": " transparent",

 		});
		}
	});
});



$(document).ready(function(){
	$('#sign_up').click(function(){
		$('#login').slideToggle('slow')
	});
});




$(document).ready(function(){

	$('.box_text').hide();
	$('.box_toggle').on('click',function(){
		$(this).next('.box_text').slideToggle('1500');
						
				$('.box_text').click(function(){
					$('.box_text').slideUp('500');

				});


	});
});



