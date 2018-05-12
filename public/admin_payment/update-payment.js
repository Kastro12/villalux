$(document).ready(function () {


    $(document).on('click','#confirm_new_payment',function () {
        var arr = [];
        var id = document.querySelector('#confirm_new_payment').value;
        var form_p = document.querySelector('#new_p').value;
        var p = document.querySelector('#payment_paid').value;
        var n_paid = Number(form_p) + Number(p);
        arr.push({
            id:id,
            paid:n_paid
        });
        var s_arr = JSON.stringify(arr);

        $.ajax({
            url: 'http://localhost:8000/admin/new_payment',
            method: 'POST',
            contentType: 'application/json',
            data: s_arr,
            success: function (data) {
                showPayment();
                showNoSettledDebts();
            },
            error: function (data) {
                console.log('error');
            }
        });

    });


});
