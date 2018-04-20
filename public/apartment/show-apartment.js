$(document).ready(function () {

    var category = 'apartment';
    var jsonC = JSON.stringify(category);


    $.ajax({
        url:'http://localhost:8000/gallery/img',
        method:'POST',
        contentType: 'aplication/json',
  //      dataType: 'json',
        data:jsonC,
        success: function (data) {
            showImgAp(data);

        },
        error: function (data) {
            console.log('greska');
        }
    })


    function showImgAp(g)
    {
        var html ='';

        html += '<div>';
        for(var i = 0;i<g.length;i++)
        {

            html += '<div class="col-sm-12">';
            html += '<div id="slike">';
            html += '<img src="/images/'+ g[i]["imgName"] +'" class="img-responsive"/>';
            html += '</div>';
            html += '</div>';
            html += '<br/>';

        }
        html += '</div>';

        $('#show_img').html(html);
    }

    function showApInfo()
    {


      $.getJSON('http://localhost:8000/admin/apartment/json', function (data) {

          var  html = '';

          $.each(data.apartment, function (key, val) {

              html +='<div class="col-sm-12" style="height: 250px;">';

              html +='<tr><b>' + val.name + '</b></tr>';
              html +='<br/>';
              html +='<tr>' + val.price + '€ per day.' + '</tr>';
              html +='<br/>';
              html +='<tr>' + val.text + '</tr>';

              html +='</div>';
              html +='<br/>';
          });



          $('#show_info').html(html);
      });

    }

    showApInfo();

});