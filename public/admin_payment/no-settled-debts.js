$(document).ready(function () {
   $(document).on('click','#no_settled',function () {
    showNoSettledDebts();
   });
});

function showNoSettledDebts()
{
    $.post('http://localhost:8000/admin/confirmed_res',function(data)
    {

        var html = '';
        // start table
        html += '<table class="table table-bordered table-hover">';
        html += '<tr>';
        html += '<th>Res_N</th>';
        html += '<th>Username</th>';
        html += '<th>Email</th>';
        html += '<th>Apartment</th>';
        html += '<th>Date In</th>';
        html += '<th>Date Out</th>';
        html += '<th>Price</th>';
        html += '<th>Paid</th>';
        html += '<th>Debt</th>';
        html += '<th>New payment</th>';
        html += '</tr>';

        $.each(data, function (key, val) {

            var debt = val.reservationPrice-val.paid;
            if(debt > 0) {
                html += '<tr>';
                html += '<td>' + val.id + '</td>';
                html += '<td>' + val.user.firstName + '</td>';
                html += '<td>' + val.user.email + '</td>';
                html += '<td>' + val.apartment + '</td>';
                html += '<td>' + formatDate(val.dateIn) + '</td>';
                html += '<td>' + formatDate(val.dateOut) + '</td>';
                html += '<td>' + val.reservationPrice + '</td>';
                html += '<td>' + val.paid + '</td>';
                html += '<td>' + debt + '</td>';
                html += '<td><button class="btn btn-success btn-sm" value="' + val.id + '" id="new_payment">new payment</button></td>';
                html += '</tr>';
            }
        });


        $('#p').html(html);
    });
}