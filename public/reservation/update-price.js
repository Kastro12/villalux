$(document).ready(function () {

$('#choose_ap').change(rezInfo());
});

function rezInfo()
{
    calendar();
    takePrice();
}

function takePrice() {
    var selectAp = $('#choose_ap option:selected').val();

    $.getJSON('http://localhost:8000/admin/apartment/json',function (data) {

        $.each(data.apartment, function (key, val) {
           if(selectAp === val.name)
           {
             $('#pricePerDay').val(val.price);
           }
        });

    });
}

function calendar()
{
    var selectAp = $('#choose_ap option:selected').val();

    if(selectAp === undefined || selectAp === '...')
    {
        return false;
    }

    var jsonAp = JSON.stringify(selectAp);

    $.ajax({
    url: 'http://localhost:8000/dates',
    method: 'POST',
    contentType: 'application/json',
    data: jsonAp,
    success: function (data) {

        initComponent(data);

    },
    error: function (data) {
        console.log('error')
    }
    });


}

function initComponent(availableDates){

    if(availableDates === null)
    {
        return true;
    }

    var d = new Date();
    $("#d_in ,#d_out").datepicker("destroy");
    $("#d_in, #d_out").datepicker({
        minDate: d,
        dateFormat: 'yy-mm-dd',
        beforeShowDay: function(date)
        {

            var b_year =date.getFullYear();
            var b_Month =("0" + (date.getMonth() + 1)).slice(-2); // +1 to zero based month
            var b_date =("0" + date.getDate()).slice(-2);

            var dmy = (b_year +"-"+b_Month+"-"+ b_date );



                if ($.inArray(dmy, availableDates) == -1) {

                    return [true, "", "Book Now"];
                } else {

                    return [false, "", "Booked Out"];

                }


     }


    });

}