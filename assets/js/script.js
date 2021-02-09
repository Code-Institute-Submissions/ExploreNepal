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


$(' header nav .nav-links .menuitem1').mouseenter(function(){
    $(' header nav .nav-links .menuitem1').css('color', 'var(--red');
});

$(' header nav .nav-links .menuitem2').mouseleave(function(){
    $(' header nav .nav-links .menuitem2').css('color', 'var(--white)');
});


$(' header nav .nav-links .menuitem2').mouseenter(function(){
    $(' header nav .nav-links .menuitem2').css('color', 'var(--red');
});

$(' header nav .nav-links .menuitem2').mouseleave(function(){
    $(' header nav .nav-links .menuitem2').css('color', 'var(--white)');
});

$(' header nav .nav-links .menuitem3').mouseenter(function(){
    $(' header nav .nav-links .menuitem3').css('color', 'var(--red');
});

$(' header nav .nav-links .menuitem3').mouseleave(function(){
    $(' header nav .nav-links .menuitem3').css('color', 'var(--white)');
});
    

$(' header nav .nav-links .menuitem4').mouseenter(function(){
    $(' header nav .nav-links .menuitem4').css('color', 'var(--red');
});

$(' header nav .nav-links .menuitem4').mouseleave(function(){
    $(' header nav .nav-links .menuitem4').css('color', 'var(--white)');
});
 
          
