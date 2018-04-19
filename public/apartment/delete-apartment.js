$(document).ready(function () {
   $(document).on('click','#del_ap',function () {

       var idAp = $(this).attr('value');

       if(confirm('You will delete all information about this apartment'))
       {
           $.ajax({
              url: 'http://localhost:8000/admin/delete_apartment',
              method: 'POST',
              contentType: 'aplication/json',
              data: idAp,
              success: function (data) {
                  console.log('salje');
                  showApartment();
              },
              error: function (data) {
                  console.log('Error');
              }
           });


       }else
       {
           delAp=undefined;
       }


   });
});