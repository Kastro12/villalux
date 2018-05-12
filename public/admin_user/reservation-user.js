$(document).ready(function () {
   $(document).on('click','#user_res',function () {
        userRes();
   });
});

function userRes()
{
    $.post('http://localhost:8000/admin/no_confirmed_res',function(data)
    {

        var html = '';
        // start table
        html += '<table class="table table-bordered table-hover">';
        html += '<tr>';
        html += '<th>First Name</th>';
        html += '<th>Last Name</th>';
        html += '<th>Email</th>';
        html += '<th>Phone</th>';
        html += '<th>Res_Id</th>';
        html += '<th>Price</th>';

        html += '</tr>';

        $.each(data, function (key, val) {

            html += '<tr>';
            html +='<td>'+val.user.firstName+'</td>';
            html +='<td>'+val.user.lastName+'</td>';
            html +='<td>'+val.user.email+'</td>';
            html +='<td>'+val.user.phone+'</td>';
            html +='<td>'+val.id+'</td>';
            html +='<td>'+val.reservationPrice+'</td>';
            html += '</tr>';
        });

        $('#u').html(html);
    });

}