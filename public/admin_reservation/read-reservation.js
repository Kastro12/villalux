$(document).ready(function () {

   $(document).on('click','#reservation',function () {

   changeAdminTitle('Reservation');
    showReservation();


   });
});

function showReservation()
{
    var html='';

    html +='<div class="row">';
    html +='<input type="button" class="btn btn-primary" id="res" value="New Reservation"/>&nbsp;&nbsp;&nbsp;&nbsp;';
    html +='<input type="button" class="btn btn-primary" id="confirmed_res" value="Confirmed Reservation"/>';
    html +='</div><br/>';


    html +='<div id="r"></div>';
    $('#show').html(html);
}



