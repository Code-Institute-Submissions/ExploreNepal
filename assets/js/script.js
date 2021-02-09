// Scrolling Option

$(window).scroll(function() {
    var displayHeight = $(window).scrollTop();
    if (displayHeight > 100) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut(2000);
    }
});
$(document).ready(function() {
    $('#scrollToTop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({              // This line of code taken from stackOverflow
            scrollTop: 0
        }, 'slow');                                 
        return false;
    });
    
// Navbar Toggler Icon

    $('.toggle-button').click(function(){
        $('nav').toggleClass('active');
    })
});


$('header nav .nav-links .menuitem').hover(function(){
    $(this).css('color', 'var(--red');
   }, function(){
     $(this).css('color', 'var(--white');
   });




