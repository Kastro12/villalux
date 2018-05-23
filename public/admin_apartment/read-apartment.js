$(document).ready(function () {
   $(document).on('click','#apartment',function () {

       showApartment();
   });
});


function showApartment()
{
    $.getJSON('http://localhost:8000/apartment/apartment/json',function (data) {


    var ap = '';

    //button form create new Apartment
    ap+="<div style='float: right;'>";
    ap+="<button id='insert_ap' class='btn btn-primary btn-lg'>Insert new Apartment</button>";
    ap+="</div>";

    // start table
    ap+="<table class='table table-bordered table-hover'>";

    // creating our table heading
    ap+="<tr>";
    ap+="<th>Apartment</th>";
    ap+="<th>Price per day</th>";
    ap+="<th>About apartment</th>";
    ap+="<th style='width: 60px'>Edit</th>";
    ap+="<th style='width: 60px'>Delete</th>";
    ap+="</tr>";

    $.each(data.apartment, function (key, val) {



    // creating new table row per record
    ap+="<tr>";
    ap+="<td>"+ val.name +"</td>";
    ap+="<td>"+ val.price +"</td>";
    ap+="<td>"+ val.text +"</td>";
    ap+="<td><button class='btn btn-primary btn-sm' id='edit_ap' value='"+ val.id +"'>Edit</button></td>";
    ap+="<td><button class='btn btn-danger btn-sm' id='del_ap' value='"+val.id+"'>Delete</button></td>";
    ap+="</tr>";
    });


    $('#show').html(ap);
    changeAdminTitle('Apartments');

    });
}

