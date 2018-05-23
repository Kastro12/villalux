$(document).ready(function () {

      $(document).on('click','.btn-warning',function () {
          var c = $(this).attr('data-category');

          $.getJSON('http://localhost:8000/gallery/img',function (data) {

              var html = '';
              html += '<div class="container">';
                $.each(data, function (key, val) {
             if(val.category === c) {
                 html += '<a href="/images/' + val.imgName + '" data-fancybox="group">';
                 html += '<div class="col-sm-4">';
                 html += '<div class="fancybox">';
                 html += '<div id="images_apartments">';
                 html += '<img src="/images/' + val.imgName + '" class="img-responsive" />';
                 html += '</div></div></div>';
                 html += '</a>';
             }
                });

               html += '</div>';
              $('#show_gallery').html(html);

          });

    });




});


