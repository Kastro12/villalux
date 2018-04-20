$(document).ready(function () {

      $(document).on('click','.btn-warning',function () {
         var k = $(this).attr('data-category');
         var j = JSON.stringify(k);

         $.ajax({
             url:'http://localhost:8000/gallery/img',
             method:'POST',
             contentType: 'aplication/json',
             dataType: 'json',
             data:j,
             success: function (data) {
                console.log(data);

                showImg(data);
             },
             error: function (result) {
                 console.log('greska');
             }
         })

    });


      function showImg(g)
      {

          html ='';
            html += '<div class="row">';
            for(var i = 0;i<g.length;i++)
            {

                html += '<div class="col-sm-4">';
                html += '<div id="slike">';
                html += '<img src="/images/'+ g[i]["imgName"] +'" class="img-responsive"/>';
                html += '</div>';
                html += '</div>';

            }
            html += '</div>';

         $('#show_gallery').html(html);
      }


});