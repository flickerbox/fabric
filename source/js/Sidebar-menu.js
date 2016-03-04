(function($) {
	
	var
		$menu			= $('#Sidebar-menu'),
		$menuItems		= $('a', $menu),
		$menuTargets	= null,
		$window			= $(window)
	;
	
	var isElementInViewport = function(el) {

		if (typeof jQuery === 'function' && el instanceof jQuery) {
			el = el[0];
		}
			
		var rect = el.getBoundingClientRect();
			
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		);
	}
	
	var setHash = function(hash) {
		history.replaceState(null, null, hash);
	};
	
	var onClick = function(e) {
		
		var
			$target			= $($(this).attr('href')),
			documentHeight	= $(document).height(),
			windowHeight	= $window.height()
		;
		
		e.preventDefault();
		
		if ($target.length) {
			
			var closenessToBottom = 1 - ((documentHeight - $target.offset().top) / windowHeight);
			var offset = 0;
			
			if (closenessToBottom > 0) {
				offset = Math.pow(2 - closenessToBottom, -2) * (windowHeight - 90);
			}
			
			$menuItems.closest('li').removeClass('is-active');
			$(this).closest('li').addClass('is-active');
		
			$('html, body').animate({
				scrollTop: $target.offset().top - offset - 90
			}, 400);
		
			setTimeout(function() {
				setHash($(this).attr('href'));
			}.bind(this), 400);
		}
		
	};
	
	var onLoad = function() {
		
		// Trigger click on load based on hash
		if (window.location.hash) {
			
			$('a[href="' + window.location.hash + '"]', $menu).trigger('click');
			
		} else {
			
			$menuItems.first().trigger('click');
			
		}
		
	};
	
	var onScroll = function() {
		
		var
			$closestToTop	= null,
			documentHeight	= $(document).height(),
			distanceToTop	= 0,
			scrollTop		= $window.scrollTop(),
			windowHeight	= $window.height()
		;
		
		$menuTargets.each(function() {
			
			var closenessToBottom = 1 - ((documentHeight - $(this).offset().top) / windowHeight);
			var windowOffset = 90;
			
			if (closenessToBottom > 0) {
				windowOffset += Math.pow(2 - closenessToBottom, -2) * (windowHeight - 90);
			}
			
			var thisDistanceToTop = Math.abs((($(this).offset().top - windowOffset) / documentHeight) - (scrollTop / documentHeight));
			
			if ($closestToTop && thisDistanceToTop > distanceToTop) {
				return;
			}
		
			$closestToTop	= $(this);
			distanceToTop	= thisDistanceToTop;
			
		});
		
		if ($closestToTop) {
			
			$menuItems.closest('li').removeClass('is-active');
			$('[href="#' + $closestToTop.attr('id') + '"]', $menu).closest('li').addClass('is-active');
			
			setHash('#' + $closestToTop.attr('id'));
		
		}
		
	};
	
	var init = function() {
		
		// Setup targets array
		var targets = [];
		
		$menuItems.each(function() {
			
			targets.push($(this).attr('href'));
			
		})
		
		$menuTargets = $(targets.join(', '));
		
		// Setup callbacks
		$menuItems.on('click', onClick);
		$window.on('load', onLoad);
		$window.on('scroll', onScroll);
		
	};
	
	init();
	
})(jQuery);