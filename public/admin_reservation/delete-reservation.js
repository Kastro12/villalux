$(document).ready(function () {
   $(document).on('click','#delete_res',function () {

       var delRes = $(this).attr('value');

       if(confirm('Reservation will be delete now.'))
       {

           $.ajax({
              url: 'http://localhost:8000/admin/deleteRes',
              contentType: 'application/json',
              method: 'POST',
              data: delRes,
              success: function (data) {
                  resNoConfirm();
              },
              error: function (data) {
                  console.log('error');
              }
           });

       }

   });

    $(document).on('click','#delete_confirm_res',function () {

        var delConRes = $(this).attr('value');
console.log(delConRes);
        if(confirm('Reservation will be delete now.'))
        {

            $.ajax({
                url: 'http://localhost:8000/admin/deleteRes',
                contentType: 'application/json',
                method: 'POST',
                data: delConRes,
                success: function (data) {
                    resConfirmed();
                },
                error: function (data) {
                    console.log('error');
                }
            });

        }

    });

});