(function($) {
	
	var
		$menu		= $('#Sidebar-menu'),
		$menuItems	= $('a', $menu)
	;
	
	var onClick = function(e) {
		
		e.preventDefault();
		
		var $target = $($(this).attr('href'));
		
		if ($target.length) {
		
			$('html, body').animate({
				scrollTop: $target.offset().top - 90
			}, 400);
			
			$menuItems.closest('li').removeClass('is-active');
			$(this).closest('li').addClass('is-active');
		
			window.location.hash = $(this).attr('href');
		}
		
	};
	
	var init = function() {
		
		$menuItems.on('click', onClick);
		
		if (window.location.hash) {
			
			$('a[href="' + window.location.hash + '"]', $menu).trigger('click');
			
		}
		
	};
	
	init();
	
})(jQuery);