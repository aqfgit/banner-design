( function() {
  var button = document.querySelector( '.c-top-bar__nav-toggler' );
  var socials = document.querySelector('.c-top-bar__socials')
  var siteNav = document.querySelector('.c-top-bar__site-nav');
  var offersSubmenuLabel = document.querySelector('.l-submenu__label');
  var subMenu = document.querySelector('.l-submenu');

  let lastSubmenuEvent;

  function setProperEventToOpenSumbenu() {

    let hoverAddClass = function() {
      subMenu.classList.add('l-submenu--open');
    }

    let hoverRemoveClass = function() {
      subMenu.classList.remove('l-submenu--open');
    }

    let clickToggleClass = function() {
        subMenu.classList.toggle('l-submenu--open');
    }

    if (subMenu.classList.contains('l-submenu--open')) {
      subMenu.classList.remove('l-submenu--open')
    }

    offersSubmenuLabel.removeEventListener('click', clickToggleClass, false);
    offersSubmenuLabel.removeEventListener('mouseenter', hoverAddClass, false);
    offersSubmenuLabel.removeEventListener('mouseleave', hoverRemoveClass, false);
    
    if (window.innerWidth > 1025) {
      console.log('hover')
      offersSubmenuLabel.removeEventListener('click', clickToggleClass, false);

      offersSubmenuLabel.addEventListener('mouseenter', hoverAddClass, false);
      offersSubmenuLabel.addEventListener('mouseleave',  hoverRemoveClass, false);

    } else if (window.innerWidth <= 1025) {
      console.log('click')
      offersSubmenuLabel.removeEventListener('mouseenter', hoverAddClass, false);
      offersSubmenuLabel.removeEventListener('mouseleave', hoverRemoveClass, false);

      offersSubmenuLabel.addEventListener('click', clickToggleClass, false)
    }
    
  }

  setProperEventToOpenSumbenu();

  window.addEventListener('resize', setProperEventToOpenSumbenu, false);
 

	button.addEventListener( 'click', function( evt ) {
		var hasBeenRotaded = button.style.transform === 'rotate(90deg)';
		if (hasBeenRotaded) {
			button.style.transform = 'rotate(180deg)';
		} else {
			button.style.transform = 'rotate(90deg)';
		}
		
		var nav = document.querySelector('.c-top-bar__site-nav');
    nav.classList.toggle( 'c-top-bar__site-nav--nav-open' );
    
    socials.classList.toggle('c-top-bar__socials--open');
		button.setAttribute( 'aria-expanded', String( nav.classList.contains( 'c-top-bar__site-nav--nav-open' ) ) );
  }, false );

}());