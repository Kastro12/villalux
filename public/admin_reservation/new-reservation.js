$(document).ready(function () {
   $(document).on('click','#res',function () {

   resNoConfirm();

   });
});

function resNoConfirm()
{

    $.post('http://localhost:8000/admin/no_confirmed_res',function(data)
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
        html += '<th>Price</th>';
        html += '<th>Confirm</th>';
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
           html +='<td>'+val.reservationPrice+'</td>';
           html +='<td><button class="btn btn-success btn-sm" value="'+val.id+'" id="confirm">confirm</button></td>';
           html +='<td><button class="btn btn-danger btn-sm" id="delete_res" value="'+ val.id +'">delete</button></td>';
           html += '</tr>';
       });


        $('#r').html(html);
    });

}

function formatDate(date)
{
    var d = new Date(date);
    var b_year = d.getFullYear();
    var b_Month = ("0" + (d.getMonth() + 1)).slice(-2); // +1 to zero based month
    var b_date = ("0" + d.getDate()).slice(-2);
     return (b_year + '-' + b_Month + '-' + b_date);
}
