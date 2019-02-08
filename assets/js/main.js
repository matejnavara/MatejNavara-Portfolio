/*
	Miniport by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

	// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Fix: Placeholder polyfill.
		$('form').placeholder();

	// Prioritize "important" elements on mobile.
		skel.on('+mobile -mobile', function() {
			$.prioritize(
				'.important\\28 mobile\\29',
				skel.breakpoint('mobile').active
			);
		});

	// CSS polyfills (IE<9).
		if (skel.vars.IEVersion < 9)
			$(':last-child').addClass('last-child');

	// Scrolly.
		$window.load(function() {

			var x = parseInt($('.wrapper').first().css('padding-top')) - 100;

			$('#nav a, .scrolly').scrolly({
				speed: 1000,
				offset: x
			});

		});

	//Gridify and W3
		w3.includeHTML();
		var app = new App();
		app.init();
		if(app){

			var imgs = document.images,
			len = imgs.length,
			counter = 0;

			alert("Images length is "+ len);

			[].forEach.call( imgs, function( img ) {
				img.addEventListener( 'load', incrementCounter, false );
			} );

			function incrementCounter() {
				counter++;
				if ( counter === len ) {
					app.refreshGrid();
					$('#asc').val("z_a");
					console.log( 'All images loaded!' );
				}
			}
			setTimeout(function(){
				app.refreshGrid();
				$('#asc').val("z_a");
				alert("New images length is "+ document.images.length);
			}, 3000);		
		}

		
	});

})(jQuery);