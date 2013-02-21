;(function ( $, window, document, undefined ) {

	// Menu responsivo
	$("#nav").addClass("none").before('<div id="responsive-menu">☰</div>');
	$("#responsive-menu").click(function(){
		$("#nav").toggle();
	});

})( jQuery, window, document );