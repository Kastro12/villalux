// VALIDATION OF REGISTRATION

$(document).ready(function(){
	$('#sub').click(function(){

		var pass1 = reg_form.pass1.value;
		var pass2 = reg_form.pass2.value;
		 var firstName = reg_form.first_name.value;
		 var lastName = reg_form.last_name.value;
		 var emailName = reg_form.email_name.value;

	if(firstName.length == 0 || lastName.length == 0 || emailName.length == 0)
		{
		document.getElementById('info').innerHTML =
		'<p style="color: #ff6666">Fill in all fields.</p>';
		return false;
		}

		else if(pass1.length < 5 || pass1.length > 25)
		{
			document.getElementById('info').innerHTML =
			'<p style="color: #ff6666">Enter the password between 5 and 25 characters.</p>';
			return false;
		}


		else if(pass1 != pass2)
		{
		document.getElementById('info').innerHTML =
	'<p style="color: #ff0000">Password and confirm password do not match.</p>';
		return false;
		}

		 if(firstName.match(/[^a-zA-Z]/))
		{
		document.getElementById('info').innerHTML =
	'<p style="color: #ff0000">Nedozvoljeni karakteri za ime.</p>';	
	return false;
		} else if(lastName.match(/[^a-zA-Z]/))
		{
			document.getElementById('info').innerHTML =
	'<p style="color: #ff0000">nedozvoljeni karakteri za prezime.</p>';	
	return false;
		}

	});

	//$('#sub').unbind();
});



