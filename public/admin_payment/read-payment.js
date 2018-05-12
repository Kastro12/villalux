$(document).ready(function () {
 $(document).on('click','#payment',function () {

     changeAdminTitle('Payments');

    showPayment();

 });
});


function showPayment()
{
    var html='';

    html +='<div class="row">';
    html +='<input type="button" class="btn btn-danger" id="no_settled" value="Not settled debts"/>&nbsp;&nbsp;&nbsp;&nbsp;';
    html +='<input type="button" class="btn btn-primary" id="settled" value="Settled debts"/>';
    html +='</div><br/>';


    html +='<div id="p"></div>';
    $('#show').html(html);
}