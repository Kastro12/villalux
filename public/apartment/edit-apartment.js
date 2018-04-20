$(document).ready(function () {
   $(document).on('click',"#edit_ap",function () {

       var editAp = $(this).attr('value');

        $.getJSON('http://localhost:8000/admin/apartment/'+editAp,function (data) {

            var name =data.name;
            var price = data.price;
            var text = data.text;


            showApInfo(name,price,text);

            $('#update_ap').click(function(e){
                e.preventDefault();
                var apArr =[];

               var apPrice = document.querySelector('#price').value;
               var apName = document.querySelector('#ap_name').value;
               var apText = document.querySelector('#ap_text').value;

                if(apName === "" || apPrice ==="" || apText ==="" )
                {
                    alert('Fill in all filds');
                    return false;
                }

               apArr.push({
                  name:apName,
                  price:apPrice,
                  text:apText
               });

            var jsonAp = JSON.stringify(apArr);


            $.ajax({
               url: 'http://localhost:8000/admin/apartment/'+editAp,
               method: 'POST',
               contentType: 'aplication/json',
               data: jsonAp,
               success: function (data) {
                   alert('Success updated. New name: ' +data['name']+' New price: '+data['price']);
                   showApartment();
               },
               error: function (data) {
                   console.log('greska');
                   return false;
               }

            });

            });

        });



   }) ;
});

function showApInfo(n,p,t)
{

    var html = '';

    html+="<form method='post'>";
    html+="<table class='table table-hover table-responsive table-bordered'>";

    // Ap name
    html+="<tr>";
    html+="<td>Apartment name</td>";
    html+="<td><input type='text' id='ap_name' value='"+n+"' class='form-control' required/></td>";
    html+="</tr>";

    // Ap price per day
    html+="<tr>";
    html+="<td>Price per day € </td>";
    html+="<td><input type='number' id='price' value='"+p+"' class='form-control' required/></td>";
    html+="</tr>";

    // description field
    html+="<tr>";
    html+="<td>Text</td>";
    html+="<td><textarea id='ap_text' class='form-control' required>"+t+"</textarea></td>";
    html+="</tr>";

    // button to submit form
    html+="<tr>";
    html+="<td></td>";
    html+="<td>";
    html+="<button type='submit' id='update_ap' class='btn btn-primary'>";
    html+="<span class='glyphicon glyphicon-plus'></span> Update apartment ";
    html+="</button>";
    html+="</td>";
    html+="</tr>";

    html+="</table>";
    html+="</form>";

    $('#show').html(html);

}