(function($) {
	
	var
		$body		= $('body'),
		$toggle		= $('#Sidebar-menuToggle')
	;
	
	var closeSidebar = function() {
		
		$body.removeClass('has-sidebarToggled');
		
	};
	
	var openSidebar = function(e) {
		
		console.log('hello');
		
		e.stopPropagation();
		$body.addClass('has-sidebarToggled');
		
	};
	
	var init = function() {
		
		$body.on('click', closeSidebar);
		$toggle.on('click', openSidebar);
		
	};
	
	init();
	
})(jQuery);