//VALIDATION OF DATEPICKER - BOOK IT page

$(document).ready(function(){	
var unavailableDates=["2018-03-04"];


//var datumi = $('#lock').val();
//$('#book_it').click(function(){
//	alert(datumi);
//});

var d = ["2018-03-03","2018-03-06","2018-03-12"];
//var d =$('#lock_days').val();
//unavailableDates.push(d);
Array.prototype.push.apply(unavailableDates, d);
//console.log(unavailableDates);


function unavailable(date)
{
    
	var b_year =date.getFullYear();
	var b_Month =("0" + (date.getMonth() + 1)).slice(-2); // +1 to zero based month
	var b_date =("0" + date.getDate()).slice(-2);

	var dmy = (b_year +"-"+b_Month+"-"+ b_date );

    if ($.inArray(dmy, unavailableDates) < 0) {
        return [true,"","Book Now"];
    } else {
        return [false,"","Booked Out"];
    }
}
	
$('#dp1').datepicker({ beforeShowDay: unavailable, dateFormat: 'yy-mm-dd' });

$('#dp2').datepicker({ beforeShowDay: unavailable, dateFormat: 'yy-mm-dd' });


$('.book_it').click(function(){

	// UZIMANJE VREDNOSTI IZ INPUTA - MOZE I NA OVAJ NACIN->var date1 = dp.date1.value; 
	var date1 = $('#dp1').val();
	var date2 = $('#dp2').val();

 	// pretvaranje trenutnog datuma u format isti poput unesenih
	var d = new Date();
	var curr_year =d.getFullYear();
	var curr_Month =("0" + (d.getMonth() + 1)).slice(-2); // +1 to zero based month
	var curr_date =("0" + d.getDate()).slice(-2);

	var todayDate =   (curr_year +"-"+curr_Month+"-"+ curr_date );

	

	if(date1==0 || date2==0)
	{
		document.getElementById('book_it_info').innerHTML = 
		"<h3 style='color:red'><b>Fill in the date fields.</b></h3>";
	
		return false;
	}

	else if(todayDate >= date1 || todayDate >= date2)
	{
		document.getElementById('book_it_info').innerHTML = 
		"<h3 style='color:red'><b>You did not enter dates correctly. proslost</b></h3>";


		return false;
	}

	else if(date1 >= date2)
	{
		document.getElementById('book_it_info').innerHTML = 
		"<h3 style='color:red'><b>You did not enter dates correctly.</b></h3>";
	//	alert('Datum odlaska mora biti posle datuma dolaska');
		return false;
	}

//	else 
//	{
//		document.getElementById('book_it_info').innerHTML = 
//		"<h3 style='color:orange'><b>booking successful.</b></h3>";
//	}

});

});

