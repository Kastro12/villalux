$(document).ready(function () {

   html = '';

   html +='<form>';
   html +='<label class="col-form-label">First Name</label>';
   html +='<input type="text" class="form-control" placeholder="First Name" id="first_n" >';
   html +='<br/>';
   html +='<label class="col-form-label">Last Name</label>';
   html +='<input type="text" class="form-control" placeholder="Last Name" id="last_n">';
   html +='<br/>';
   html +='<label class="col-form-label">Email</label>';
   html +='<input type="email" class="form-control" placeholder="Email Address" id="email">';
   html +='<br/>';
   html +='<label class="col-form-label">Phone number</label>';
   html +='<input type="number" class="form-control" placeholder="Phone number" id="phone" />';
   html +='<br/>';
   html +='<label class="col-form-label">Password</label>';
   html +='<input type="password" class="form-control" placeholder="Password" id="pass1">';
   html +='<br/>';
   html +='<label class="col-form-label">Confirm Password</label>';
   html +='<input type="password" class="form-control" placeholder="Confirm" id="pass2">';
   html +='<br/>';
   html +='<button type="submit" class="btn-lg btn-primary" id="register"> Register </button>';
   html +='<form/>';

   $('#registration').html(html);

   var userArr = [];

    var firstName = document.querySelector('#first_n');
    var lastName = document.querySelector('#last_n');
    var email = document.querySelector('#email');
    var phone = document.querySelector('#phone');
    var password = document.querySelector('#pass1');
    var confirm = document.querySelector('#pass2');

    $('#register').click(function (e) {
        e.preventDefault();

                        // VALIDATION

        if(firstName.value.length == 0 || lastName.value.length == 0 || email.value.length == 0 || phone.value.length == 0)
        {
            document.getElementById('info').innerHTML =
                '<p style="color: #ff6666">Fill in all fields.</p>';
            return false;
        }

        else if(password.value.length < 5 || password.value.length > 25)
        {
            document.getElementById('info').innerHTML =
                '<p style="color: #ff6666">Enter the password between 5 and 25 characters.</p>';
            return false;
        }


        else if(password.value != confirm.value)
        {
            document.getElementById('info').innerHTML =
                '<p style="color: #ff0000">Password and confirm password do not match.</p>';
            return false;
        }

        if(firstName.value.match(/[^a-zA-Z]/))
        {
            document.getElementById('info').innerHTML =
                '<p style="color: #ff0000">Not allowed characters for the name.</p>';
            return false;
        } else if(lastName.value.match(/[^a-zA-Z]/))
        {
            document.getElementById('info').innerHTML =
                '<p style="color: #ff0000">Not allowed characters for the name.</p>';
            return false;
        }
                                //VALIDATION END

            userArr.push({
            first_name:firstName.value,
            last_name:lastName.value,
            email:email.value,
            phone:phone.value,
            password:password.value
            });

        var jsonUserArr = JSON.stringify(userArr);

        $.ajax({
            url:'http://localhost:8000/registration/user',
            method:'POST',
            contentType:'application/json',
            data:jsonUserArr,
            success: function (data) {
                if(data === 'Account with this email already exists')
                {
                    alert(data);
                    window.location.reload();
                }else {
                    alert('Welcome ' + data);
                    window.location.replace('http://localhost:8000');
                }
            },
            error: function (data) {
                console.log('error');

            }
        });

    });

});