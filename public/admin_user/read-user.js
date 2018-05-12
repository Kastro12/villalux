$(document).ready(function () {
    $(document).on('click','#user',function () {

        changeAdminTitle('Users');

        var html='';

        html +='<div class="row">';
        html +='<input type="button" class="btn btn-primary" id="user_confirmed" value="User with confirmed reservation"/>&nbsp;&nbsp;&nbsp;&nbsp;';
        html +='<input type="button" class="btn btn-primary" id="user_res" value="User with reservation"/>&nbsp;&nbsp;&nbsp;&nbsp;';
        html +='<input type="button" class="btn btn-primary" id="user_no_res" value="Other user"/>';
        html +='</div><br/>';


        html +='<div id="u"></div>';
        $('#show').html(html);

    });
});