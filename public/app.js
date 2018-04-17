$(document).ready(function () {

var app = "";

    // ovo je naslov
    app+="<div class='page-header'>";
    app+="<h1 id='admin_title'>Admin page</h1>";
    app+="</div>";

    //ovde ce se sve prikazivati
    app+="<div id='show'></div>";

    //salje sve na admin.html.twig u app_html
    $('#app_html').html(app);
});

function changeAdminTitle(adminTitle)
{
    $('#admin_title').text(adminTitle);

    document.title=adminTitle;
}

//  FUNKCIJA KOJA PRETVARA VREDNOST FORMATA U JSON FORMAT
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};