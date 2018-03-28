
$(document).ready(function(){
	$('#ap_option').change(load_new_content());
});

function load_new_content()
{
	var selected_option_value=$("#ap_option option:selected").val(); //pokupio selektovanu vrednost

//	console.log(selected_option_value);

//	alert(selected_option_value);
//	var jsonString = JSON.stringify(selected_option_value);
	$.ajax({
		url: "lib/reserve/db_price.php",
		type: "POST",
	    dataType: "json",
	    cache: false,
		data: {data: selected_option_value},
		success: function(data){

		$('#price').val(data);
	//	console.log(range);

		},
		error: function(data)
		{
			console.log('error');
		}
	});

}

/*
function load_calendar()
{
	var selected=$("#ap_option option:selected").val(); //pokupio selektovanu vrednost

	console.log(selected);
		

		$.ajax({
		url: "lib/reserve/db_calendar.php",
		type: "POST",
	//	dataType: 'JSON',
		cache: false,
		data: {calendar: selected},
		success: function(data)
		{
		 
		 console.log('work');
		//	$('#lock_days').val();
		
		},
		error: function(data)
		{
			console.log('error');
		}
	});

}  */