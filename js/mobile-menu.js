( function() {
  const button = document.querySelector( '.c-top-bar__nav-toggler' );
  const socials = document.querySelector('.c-top-bar__socials')
  const siteNav = document.querySelector('.c-top-bar__site-nav');
  const offersSubmenuLabel = document.querySelector('.l-submenu__label');
  const subMenu = document.querySelector('.l-submenu');

  const hoverAddClass = function() {
    subMenu.classList.add('l-submenu--open');
    offersSubmenuLabel.setAttribute( 'aria-expanded', String( subMenu.classList.contains( 'l-submenu--open' ) ) );
  }

  const hoverRemoveClass = function() {
    subMenu.classList.remove('l-submenu--open');
    offersSubmenuLabel.setAttribute( 'aria-expanded', String( subMenu.classList.contains( 'l-submenu--open' ) ) );
  }

  const clickToggleClass = function() {
      subMenu.classList.toggle('l-submenu--open');
      offersSubmenuLabel.setAttribute( 'aria-expanded', String( subMenu.classList.contains( 'l-submenu--open' ) ) );
  }

  function setProperEventToOpenSumbenu() {

    if (subMenu.classList.contains('l-submenu--open')) {
      subMenu.classList.remove('l-submenu--open')
    }

    offersSubmenuLabel.removeEventListener('click', clickToggleClass, false);
    offersSubmenuLabel.removeEventListener('mouseenter', hoverAddClass, false);
    subMenu.removeEventListener('mouseleave', hoverRemoveClass, false);
    
    if (window.innerWidth > 1025) {
      offersSubmenuLabel.addEventListener('mouseenter', hoverAddClass, false);
      subMenu.addEventListener('mouseleave',  hoverRemoveClass, false);
    } else if (window.innerWidth <= 1025) {
      offersSubmenuLabel.addEventListener('click', clickToggleClass, false)
    }
    
  }

  setProperEventToOpenSumbenu();

  window.addEventListener('resize', setProperEventToOpenSumbenu, false);
 

	button.addEventListener( 'click', function( evt ) {
		const hasBeenRotaded = button.style.transform === 'rotate(90deg)';
		if (hasBeenRotaded) {
			button.style.transform = 'rotate(180deg)';
		} else {
			button.style.transform = 'rotate(90deg)';
		}
		
		const nav = document.querySelector('.c-top-bar__site-nav');
    nav.classList.toggle( 'c-top-bar__site-nav--nav-open' );
    
    socials.classList.toggle('c-top-bar__socials--open');
		button.setAttribute( 'aria-expanded', String( nav.classList.contains( 'c-top-bar__site-nav--nav-open' ) ) );
  }, false );

}());