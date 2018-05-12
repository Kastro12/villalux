$(document).ready(function () {
   $(document).on('click','#insert_ap',function () {

        var apArr = [];

       var insert_ap="";
       insert_ap+="<form method='post'>";
       insert_ap+="<table class='table table-hover table-responsive table-bordered'>";

       // Ap name
       insert_ap+="<tr>";
       insert_ap+="<td>Apartment name</td>";
       insert_ap+="<td><input type='text' id='ap_name' class='form-control'/></td>";
       insert_ap+="</tr>";

       // Ap price per day
       insert_ap+="<tr>";
       insert_ap+="<td>Price per day € </td>";
       insert_ap+="<td><input type='number' id='price' class='form-control'/></td>";
       insert_ap+="</tr>";

       // description field
       insert_ap+="<tr>";
       insert_ap+="<td>Text</td>";
       insert_ap+="<td><textarea id='ap_text' class='form-control'></textarea></td>";
       insert_ap+="</tr>";

       // button to submit form
       insert_ap+="<tr>";
       insert_ap+="<td></td>";
       insert_ap+="<td>";
       insert_ap+="<button type='submit' id='create_ap' class='btn btn-primary'>";
       insert_ap+="<span class='glyphicon glyphicon-plus'></span> Insert new Apartment";
       insert_ap+="</button>";
       insert_ap+="</td>";
       insert_ap+="</tr>";

       insert_ap+="</table>";
       insert_ap+="</form>";

       $('#show').html(insert_ap);

       $(document).on('click','#create_ap',function (e) {
           e.preventDefault();

           var apName = document.querySelector('#ap_name');
           var price = document.querySelector('#price');
           var apText = document.querySelector('#ap_text');

           if(apName.value === "" || price.value ==="" || apText.value ==="" )
           {
               alert('Fill in all filds');
               return false;
           }


           apArr.push({
            name:apName.value,
            price:price.value,
            text:apText.value
           });

           var apJson = JSON.stringify(apArr);

           apName.value="";
           price.value="";
           apText.value="";

            $.ajax({
               url: 'http://localhost:8000/admin/insert_apartment',
               method: 'POST',
                contentType: 'application/json',
               data: apJson,
               success: function (data) {
                   alert('Success insert new Apartment!');
               },
               error: function (data) {
                   console.log('Ne salje');
                   return false;
               }

            });

       });

   });
});