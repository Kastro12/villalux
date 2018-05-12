$(document).ready(function () {
    $(document).on('click','#settled',function () {
        showSettledDebts();
    });
});

function showSettledDebts()
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
        html += '<th>Debt</th>';
        html += '</tr>';

        $.each(data, function (key, val) {

            if(val.reservationPrice === val.paid) {
                html += '<tr>';
                html += '<td>' + val.id + '</td>';
                html += '<td>' + val.user.firstName + '</td>';
                html += '<td>' + val.user.email + '</td>';
                html += '<td>' + val.apartment + '</td>';
                html += '<td>' + formatDate(val.dateIn) + '</td>';
                html += '<td>' + formatDate(val.dateOut) + '</td>';
                html += '<td>' + val.reservationPrice + '</td>';
                html += '<td><button style="pointer-events: none" class="btn btn-warning">PAID!</button></td>';
                html += '</tr>';
            }
        });


        $('#p').html(html);
    });
}