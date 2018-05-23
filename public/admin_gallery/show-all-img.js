$(document).ready(function () {

    window.onload = function () {

        $.getJSON('http://localhost:8000/gallery/img',function (data) {

            var html = '';
            html += '<div class="container">';
            $.each(data, function (key, val) {

                    html += '<a href="/images/' + val.imgName + '" data-fancybox="group">';
                    html += '<div class="col-sm-4">';
                    html += '<div class="fancybox">';
                    html += '<div id="images_apartments">';
                    html += '<img src="/images/' + val.imgName + '" class="img-responsive" />';
                    html += '</div></div></div>';
                    html += '</a>';
            });

            html += '</div>';
            $('#show_gallery').html(html);

        });

    };




});