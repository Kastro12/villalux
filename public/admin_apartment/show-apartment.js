$(document).ready(function () {
    window.onload = function() {
    $.getJSON('http://localhost:8000/gallery/img',function (data) {
        var html = '';
        $.each(data, function (key, val) {
            if(val.category==='apartment') {
                console.log(val);

               html +='<div class="col-sm-4">';
        //       html +='<h3>Apartment</h3>';
               html +='<div class="hovereffect">';
               html +='<img class="img-responsive" src="images/'+ val.imgName +'"/>';
               html +='<div class="overlay"><h4 style="float: left">'+val.ap.name +'</h4>';
               html +='<a class="info">'+ val.ap.text +'</a>';
               html +='</div>';
               html +='</div>';
               html +='</div>';

            }
        });

        $('#dr').html(html);

    });
    };

    AOS.init();
});