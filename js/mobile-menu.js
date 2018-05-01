( function() {
  var button = document.querySelector( '.c-top-bar__nav-toggler' );
  var socials = document.querySelector('.c-top-bar__socials')
	
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