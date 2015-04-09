// PacNav JS
// Create the instance of the class on dom ready.
jQuery(document).ready(function($) {
    new PacNav();

    /**
     * The PacNav class
     */
    function PacNav(){
        // Variables of usefulness.
        var $window   = $(window);
        var $doc      = $(document);
        var $pacNav   = $('.pac-nav');
        var desktopNavItems = $pacNav.find('.pac-nav--desktop-nav > ul > li');
        var mobileNavItems = $pacNav.find('.pac-nav--mobile-nav > ul > li');

        var firstRun  = true; // run it twice on the first run.

        // mine:
        var viewportWidth = $window.width();


        var desktopItemsRightPos = [];
        var init      = _init();

        /**
         * Initiate the script.
         * - Load all Scroller elements and cache the information ready for the window.scroll event
         * - Load any images if required (in order to pull height info from it)
         * - Add the window.scroll event
         * @return null
         */
        function _init(){
            main();
            $window.load( main );
            $window.resize( main );
        }

        function main() {

            var debug = false;

            $pacNav.removeClass('loaded').addClass('loading');


            var swallowFlag = 0;

            // first check the viewport and add a an offset depending:
            viewportWidth = $window.width();

            if (debug === true) {
                $pacNav.addClass('debug');
            }

            // get the right Anchor position in order to compare vs the menu items
            var rightAnchor = Math.ceil($pacNav.find('.pac-nav--right-anchor').offset().left);
            if (debug === true) {
                $pacNav.find('.pac-nav--right-anchor').attr('data-pos', rightAnchor);
            }

            if (viewportWidth > 0 || firstRun === true) {
                // get the positions of everything:
                desktopItemsRightPos = [];
                $(desktopNavItems).each(function(index) {
                    desktopItemsRightPos.push(Math.floor($(this).offset().left + $(this).width()));
                });
            }
            // console.log(desktopItemsRightPos);

            // run through all of the nav items to get their positions:
            for (var i = 0; i < desktopItemsRightPos.length; i++) {
                if (debug === true) {
                    $(desktopNavItems[i]).attr('data-pos', desktopItemsRightPos[i]);
                }
                // run the functions if it hasn't been swallowed
                if (swallowFlag == 0) {
                    if ( (i + 1 != desktopItemsRightPos.length && (desktopItemsRightPos[i] >= rightAnchor) ) ||
                         (i + 1 == desktopItemsRightPos.length && (desktopItemsRightPos[i] >= rightAnchor + $pacNav.find('.pac-nav--toggle-container').width()) ) ) { // if it's the last one, disregard the size of the nav toggle
                        $(desktopNavItems[i]).addClass('pac-nav--hide');
                        $(mobileNavItems[i]).addClass('pac-nav--show');
                        $pacNav.addClass('running').find('.pac-nav--mobile').attr('style','');
                        swallowFlag = 1;
                        if (i <= 0) {
                            // if it's the first or second item
                            // retroactively force the first one in the list to be hide since it looks weird if it's all alone
                            $(desktopNavItems[0]).addClass('pac-nav--hide');
                            $(mobileNavItems[0]).addClass('pac-nav--show');

                            $pacNav.removeClass('running-desktop').addClass('running-mobile');
                            $('body').removeClass('running-desktop').addClass('running-mobile');
                        } else {
                            $pacNav.removeClass('running-mobile').addClass('running-desktop');
                            $('body').removeClass('running-mobile').addClass('running-desktop');
                        }
                    } else {
                        $(desktopNavItems[i]).removeClass('pac-nav--hide');
                        $(mobileNavItems[i]).removeClass('pac-nav--show');
                        swallowFlag = 0;
                    }
                } else {
                    // earlier guys have already been swallowed so just swallow the next ones without doing the math:
                    $(desktopNavItems[i]).addClass('pac-nav--hide');
                    $(mobileNavItems[i]).addClass('pac-nav--show');
                }
            }
            if (swallowFlag == 0) {
                // after all is done, if nothing is swallowed, clear out any pac-nav stuff
                $pacNav.removeClass('running-desktop').removeClass('running-mobile').removeClass('running');;
            }

            // we're done, so let's declare us loaded:
            $pacNav.removeClass('loading').addClass('loaded');

            // addendum stuff:
            // if ($pacNav.hasClass('running-mobile')) {
            //  $pacNav.find('.pac-nav--nav-toggle').off().removeClass('touch-hover'); // needs to have slide toggle;
            //  flickerboxJS.slideToggle();
            // } else {
            //  $pacNav.find('.pac-nav--nav-toggle').off().addClass('touch-hover');
            // }
            // run it again on first run in case the toggle came in and changed the sizes.
            if (firstRun === true) {
                firstRun = false;
                main();
            }
        }
    }
});