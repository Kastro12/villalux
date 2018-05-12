$(document).ready(function () {
   $(document).on('click','#user_no_res',function () {
       userNoRes();
   }) ;
});

function userNoRes() {
    $.post('http://localhost:8000/admin/user_no_res',function(data)
    {

        var html = '';
        // start table
        html += '<table class="table table-bordered table-hover">';
        html += '<tr>';
        html += '<th>First Name</th>';
        html += '<th>Last Name</th>';
        html += '<th>Email</th>';
        html += '<th>Phone</th>';


        html += '</tr>';

        $.each(data, function (key, val) {

            html += '<tr>';
            html +='<td>'+val.firstName+'</td>';
            html +='<td>'+val.lastName+'</td>';
            html +='<td>'+val.email+'</td>';
            html +='<td>'+val.phone+'</td>';
            html += '</tr>';
        });

        $('#u').html(html);
    });
}