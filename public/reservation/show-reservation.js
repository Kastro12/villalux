$(document).ready(function () {

            // ISPISIVANJE FORME ZA REZERVACIJU
    $.getJSON('http://localhost:8000/admin/apartment/json', function (data) {
        var html_ap = '';
        html_ap += '<select class="form-control" id="choose_ap" onchange="rezInfo()">';
        html_ap += '<option>...</option>';
        $.each(data.apartment, function (key, val) {
            html_ap += '<option value="' + val.name + '">' + val.name + '</option>';
        });
        html_ap += '</select>';

    var html = '';

    html += '<div class="container">';
    html += '<form id="reservation_apartment">';

        // ODABIR APARTMANA
    html += '<div class="col-sm-3">';
    html += '<p style="float: left"><b>Choose apartment</b></p>'+ html_ap +'</div>';

        // ODABIR DATUMA
    html += '<div class="col-sm-3">';
    html += '<p style="float: left"><b>Day of arrival</b></p>';
    html += '<input type="text" class="form-control" id="d_in" readonly></div>';

    html += '<div class="col-sm-3">';
    html += '<p style="float: left"><b>Departure day</b></p>';
    html += '<input type="text" class="form-control" id="d_out" readonly></div>';

        //CENA
    html += '<div class="col-sm-1">';
    html += '<p style="float: left"><b>€ per day</b></p>';
    html += '<input type="text" style="font-size: 20pt" class="form-control" id="pricePerDay" value="" readonly></div>';

        // DUGME ZA REZERVACIJU
    html += '<div class="col-sm-2"><br/>';
    html += '<button class=" btn btn-dark btn-lg" type="submit" id="reserve">Book it</button></div>';
    html += '</form>';
    html += '</div>';

    $('#reservation_form').html(html);

        // DATAPICKER STOJI ODMA ISPOD ISPISIVANJA FORME



    });
    var email = document.querySelector('#email').value;

        // NA KLIK DUGMETA ZA REZERVACIJU
   $(document).on('click','#reserve',function (e) {
       e.preventDefault();

       var ap = document.querySelector('#choose_ap').value;
       var dateIn = document.querySelector('#d_in').value;
       var dateOut = document.querySelector('#d_out').value;
       var price = document.querySelector('#pricePerDay').value;
       var reservationArr =[];

       if( dateIn > dateOut)
       {
           alert('Greska - dan odlaska upisan posle dana dolaska');
           return false;
       }

        var date = new Date();
        var b_year =date.getFullYear();
        var b_Month =("0" + (date.getMonth() + 1)).slice(-2); // +1 to zero based month
        var b_date =("0" + date.getDate()).slice(-2);
        var currentDay = (b_year +'-'+b_Month+'-'+b_date );

               reservationArr.push({
               date_in: dateIn,
               date_out: dateOut,
               reservation_day: currentDay,
               apartment: ap,
               reservation_price: price,
               user: email
            });

           var jsonArr = JSON.stringify(reservationArr);

                 $.ajax({
                    url: 'http://localhost:8000/reserve',
                    method: 'POST',
                    contentType: 'application/json',
                    data: jsonArr,
                    success: function (data) {
                        console.log('salje');
                    },
                    error: function (data) {
                        console.log('error')
                        }
                 });
   });





});

