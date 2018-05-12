$(document).ready(function () {
   $(document).on('click','#confirmed_res',function () {

    resConfirmed();

   });
});


function resConfirmed()
{
    $.post('http://localhost:8000/admin/confirmed_res',function(data)
    {

        var html = '';
        // start table
        html += '<table class="table table-bordered table-hover">';
        html += '<tr>';
        html += '<th>Res_N</th>';
        html += '<th>Booking date</th>';
        html += '<th>Username</th>';
        html += '<th>Email</th>';
        html += '<th>Apartment</th>';
        html += '<th>Date In</th>';
        html += '<th>Date Out</th>';
        html += '<th>Paid</th>';
        html += '<th>Price</th>';
        html += '<th>Delete</th>';
        html += '</tr>';

        $.each(data, function (key, val) {

            html += '<tr>';
            html +='<td>'+val.id+'</td>';
            html +='<td>'+formatDate(val.reservationDay)+'</td>';
            html +='<td>'+val.user.firstName+'</td>';
            html +='<td>'+val.user.email+'</td>';
            html +='<td>'+val.apartment+'</td>';
            html +='<td>'+formatDate(val.dateIn)+'</td>';
            html +='<td>'+formatDate(val.dateOut)+'</td>';
            html +='<td id="pay">'+val.paid+'</td>';
            html +='<td id="pay">'+val.reservationPrice+'</td>';

            html +='<td><button class="btn btn-danger btn-sm" id="delete_confirm_res" value="'+val.id+'">delete</button></td>';
            html += '</tr>';
        });

        $('#r').html(html);
    });

}