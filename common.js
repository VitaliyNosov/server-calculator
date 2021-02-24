$(function() {

// Открываем блок по клику на кнопку	

$('#button-click').click(function () {
	$('#content-block').slideToggle(500);
});
$(window).resize(function () {
	if ($(window).width() > 500) {
		$('#content-block').removeAttr('style');
	}
});

// Украина	

// block one 

$('.input-server-ukr').click(function () {
	$('.form-price-ukr').slideDown();
});

// block two

$('.price-ukr').click(function () {
	$('.form-support-system-ukr').slideDown();
});

// block two .1

// $('.price-users').click(function () {
// 	$('.total-amount-ukr').slideDown();
// });

// block three

$('.suport-system-ukr').click(function () {
	$('.form-software-about-ukr').slideDown();
});

// block four

$('.software-about-ukr').click(function () {
	$('.total-amount-ukr').slideDown();
});



// выделяем только один чекбокс

$(".group-ukr input").on("click", function() {

	if($(".group-ukr input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$(".group-ukr input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$(".group-ukr input:disabled").attr("disabled", false);
	
	}

});

// Украина


// Европа

// block one 

$('.input-server-eur').click(function () {
	$('.form-price-eur').slideDown();
});

// block two

$('.price-eur').click(function () {
	$('.form-support-system-eur').slideDown();
});

// block three

$('.suport-system-eur').click(function () {
	$('.form-software-about-eur').slideDown();
});

// block four

$('.software-about-eur').click(function () {
	$('.total-amount-eur').slideDown();
});

// выделяем только один чекбокс

$(".group-eur input").on("click", function() {

	if($(".group-eur input:checked").length >= 1) { // Не больше 2-х checkbox
		
		$(".group-eur input:not(:checked)").attr("disabled", true);
	
	} else {
		
		$(".group-eur input:disabled").attr("disabled", false);
	
	}

});

// Европа


// выпадающий список показывать скрывать разные сервера

$(function() {
	$('#servers-select').change(function(){
		$('.servers-wrapper').hide();
		$('#' + $(this).val()).show();
	});
});


});