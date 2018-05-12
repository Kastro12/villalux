$(document).ready(function () {
   $(document).on('click','#confirm',function () {
      var resId = $(this).attr('value');

      $.ajax({
          url: 'http://localhost:8000/admin/no_confirm_res_find_by_id',
          method: 'POST',
          contentType: 'application/json',
          data: resId,
          success: function (data) {
              confirmReservation(data);

          },
          error: function (data) {
              console.log('error');
          }
      });
   });

});
function confirmReservation(d) {
    var html = '';

    $.each(d, function (key, val) {

        html += '<input type="hidden" id="id_res" value="' + val.id + '"/>';
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
        html += '<td><input type="number" class="form-group" id="paid"></td>';
        html += '</tr><br/>';
        html += '</table>';
        html += '<button class="btn btn-success" id="confirm_confirm_res">Confirm Reservation</button>';

    });
    $('#show').html(html);

}

$(document).on('click','#confirm_confirm_res',function () {

    var arr = [];
    var resId = document.querySelector('#id_res').value;
    var paid = document.querySelector('#paid').value;

    arr.push({
        paid:paid,
        id:resId
    });
    var arrStr = JSON.stringify(arr);
    $.ajax({
        url: 'http://localhost:8000/admin/create_confirm',
        method: 'POST',
        contentType: 'application/json',
        data: arrStr,
        success: function (data) {

            showReservation();
            resNoConfirm();

        },
        error: function (data) {
            console.log('error');
        }
    });
    resNoConfirm();
});



