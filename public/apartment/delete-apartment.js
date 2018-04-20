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
                  showApartment();
              },
              error: function (data) {
                  console.log('Error');
                  return false;
              }
           });


       }else
       {
           delAp=undefined;
       }


   });
});