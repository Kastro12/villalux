$(document).ready(function () {

   $(document).on('click', '#gallery', function () {
    //  alert('radi');
         showGallery();
         $(document).on('click','#del_img',function () {


             var imgDel = $(this).attr('value');

             if(confirm('Are you sure?'))
             {
                $.ajax({
                url:'http://localhost:8000/admin/delete_img',
                method:'POST',
                contentType: 'aplication/json',
                data: imgDel,
                success: function (result) {
                    console.log('poslato');
                    showGallery();

                },
                error: function (result) {
                    console.log('ne radi');
                }
                });
             } else
             {
                 imgDel = undefined;
             }

         })
   });
});


function showGallery()
{

   $.getJSON('http://localhost:8000/images/json',function (data) {
      var read_img="";
      //button form create new img
      read_img+="<div style='float: right;'>";
       read_img+="<button id='insert_img' class='btn btn-primary btn-lg'>Insert new image</button>";
      read_img+="</div>";

       // start table
       read_img+="<table class='table table-bordered table-hover'>";

       // creating our table heading
       read_img+="<tr>";
       read_img+="<th>Image name</th>";
       read_img+="<th>Category</th>";
       read_img+="<th>Title</th>";
       read_img+="<th style='width: 60px'>Delete</th>";
       read_img+="</tr>";

     $.each(data.images, function (key, val) {

         //change date format for uploadedOn
         /*
         var d = val.uploadedOn;
         var dan = new Date(d);
         var res = (dan.getMonth() +1) + '-' + dan.getDate() + '-' + dan.getFullYear();
        */


         // creating new table row per record
         read_img+="<tr>";
         read_img+="<td>" + val.imgName + "</td>";
         read_img+="<td>" + val.category + "</td>";
         read_img+="<td>" + val.text + "</td>";
         read_img+="<td><button class='btn btn-danger btn-sm' id='del_img' value='"+val.id+"'>x</button></td>";
         read_img+="</tr>";

     });
       $("#show").html(read_img);
       changeAdminTitle('Gallery');

   });

}
