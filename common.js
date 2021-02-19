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

// показывать скрывать разные сервера

$(function() {
	$('#servers-select').change(function(){
		$('.servers-wrapper').hide();
		$('#' + $(this).val()).show();
	});
});


});