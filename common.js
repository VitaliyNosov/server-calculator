$(function() {

// block one 

$('.input-server').click(function () {
	$('.form-price').slideDown();
});

// block two

$('.price').click(function () {
	$('.form-support-system').slideDown();
});

// block three

$('.suport-system').click(function () {
	$('.form-software-about').slideDown();
});

// block four

$('.software-about').click(function () {
	$('.total-amount').slideDown();
});

// выделяем только один чекбокс

$(".group input").on("click", function() {

	if($(".group input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$(".group input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$(".group input:disabled").attr("disabled", false);
	
	}

});

// показывать скрывать разные сервера

// $(function() {
// 	$('#servers-select').change(function(){
// 		$('.servers-wrapper').hide();
// 		$('#' + $(this).val()).show();
// 	});
// });


});