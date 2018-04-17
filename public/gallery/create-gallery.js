$(document).ready(function () {
   $(document).on('click','#insert_img',function () {

       var imgArr = [];

       var gallery_select='';

       // kreiran selektor
       gallery_select+="<select name='category' id='img_category' class='form-control'>";
       gallery_select+="<label>Images Category</label>";
       gallery_select+="<option value='apartment'>Apartment</option>";
       gallery_select+="<option value='villa'>Villa</option>";
       gallery_select+="<option value='ploce'>Ploce beach</option>";
       gallery_select+="<option value='jaz'>Jaz beach</option>";
       gallery_select+="<option value='trsteno'>Trsteno beach</option>";
       gallery_select+="</select>";

       //kreirana forma za galeriju
       var gallery_form="";
       gallery_form+="<form method='post'>";
       gallery_form+="<table class='table table-hover table-responsive table-bordered'>";

       // Image name
       gallery_form+="<tr>";
       gallery_form+="<td>Image name</td>";
       gallery_form+="<td><input type='text' name='img_name' id='img_name' class='form-control' required/></td>";
       gallery_form+="</tr>";

       // categories of Image
       gallery_form+="<tr>";
       gallery_form+="<td>Category</td>";
       gallery_form+="<td>" + gallery_select + "</td>";
       gallery_form+="</tr>";

       // description field
       gallery_form+="<tr>";
       gallery_form+="<td>Text</td>";
       gallery_form+="<td><textarea id='img_text' class='form-control' required></textarea></td>";
       gallery_form+="</tr>";

       // button to submit form
       gallery_form+="<tr>";
       gallery_form+="<td></td>";
       gallery_form+="<td>";
       gallery_form+="<button type='submit' id='submit' class='btn btn-primary'>";
       gallery_form+="<span class='glyphicon glyphicon-plus'></span> Insert new image";
       gallery_form+="</button>";
       gallery_form+="</td>";
       gallery_form+="</tr>";

       gallery_form+="</table>";
       gallery_form+="</form>";

       $('#show').html(gallery_form);

       $(document).on('click','#submit',function (e) {
           e.preventDefault();
           var imgName = document.querySelector('#img_name');
           var imgCategory = document.querySelector('#img_category');
           var imgText = document.querySelector('#img_text');



                imgArr.push({
                    img_name:imgName.value,
                    category:imgCategory.value,
                    text:imgText.value

                    });

            var imgJson =  JSON.stringify(imgArr);
              //  console.log(imgJson);
                imgName.value="";
                imgCategory.value="";
                imgText.value ="";


                $.ajax({
                   url: 'http://localhost:8000/admin/insert_img',
                   method: 'POST',
                   contentType: 'aplication/json',
                   data: imgJson,
                   success: function (result) {
                       alert('Successfully uploaded image')
                   },
                   error: function (result) {
                       console.log('Error');
                   }
                });
       });

   });
});

