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
        $('html, body').animate({                    // This line of code taken from stackOverflow
            scrollTop: 0
        }, 'slow');
        return false;
    });

    // display nav-items when clicked on toggle button of navbar 

    $('.toggle-button').click(function() {
        $('nav').toggleClass('active');
    });

    // Hide Navbar upon clicking on nav-item (On screen below 768px width)

    $('.nav-links').on('click', 'li', function() {
        $('nav').toggleClass('active');
    });
});


// hover effect for Nav-items on the Navbar

$('header nav .nav-links .menuitem').hover(function() {
    $(this).css('color', 'var(--red');
}, function() {
    $(this).css('color', 'var(--white');
});