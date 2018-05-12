$(document).ready(function () {
   $(document).on('click','#new_payment',function () {
     var resId = $(this).attr('value');


       $.post('http://localhost:8000/admin/confirmed_res',function(data)
       {

           var html = '';
           $.each(data, function (key, val) {

        if(val.id == resId){

            var debt = val.reservationPrice - val.paid;
            html += '<input type="hidden" id="id_res" value="' + val.id + '"/>';
            html += '<input type="hidden" id="payment_paid" value="' + val.paid + '"/>';
            html += '<table class="table table-bordered table-hover">';
            html += '<tr>';
            html += '<th style="width: 50%;">First Name</th>';
            html += '<td style="width: 50%">' + val.user.firstName + '</td>';
            html += '</tr><tr>';
            html += '<th>Last Name</th>';
            html += '<td>' + val.user.lastName + '</td>';
            html += '</tr><tr>';
            html += '<th>Email</th>';
            html += '<td>' + val.user.email + '</td>';
            html += '</tr><tr>';
            html += '<th>Apartment</th>';
            html += '<td>' + val.apartment + '</td>';
            html += '</tr><tr>';
            html += '<th>Date In</th>';
            html += '<td>' + formatDate(val.dateIn) + '</td>';
            html += '</tr><tr>';
            html += '<th>Date Out</th>';
            html += '<td>' + formatDate(val.dateOut) + '</td>';
            html += '</tr><tr>';
            html += '<th>Price</th>';
            html += '<td>' + val.reservationPrice + '</td>';
            html += '</tr><tr>';
            html += '<th>Paid</th>';
            html += '<td>' + val.paid + '</td>';
            html += '</tr><tr>';
            html += '<th>Debt</th>';
            html += '<td>' + debt + '</td>';
            html += '</tr><tr>';
            html += '<th>New payment</th>';
            html += '<td><input type="number" class="form-group" id="new_p"></td>';
            html += '</tr><br/>';
            html += '</table>';
            html += '<button class="btn btn-success" id="confirm_new_payment" value="'+val.id+'">Submit</button>';
        }
           });
           $('#show').html(html);
       });

   });


});





