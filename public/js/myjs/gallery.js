
$(document).ready(function(){
	var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
});

$(document).ready(function(){
	var category = $('#hidden').val();
	//var button = $('button').val();
 	//alert(button);
	$('button[value="'+ category +'"]').addClass('active');


 	/*
	alert(category);
    if( $('input[type="button"][value="'+ category +'"]') )
    {
 $(this).addClass('btn active');
    }*/
});