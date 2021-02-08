$(document).on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

$(window).scroll(function() {
    var displayHeight = $(window).scrollTop();
    if (displayHeight > 100) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut(2000);
    }
});
$(document).ready(function() {
    $("#scrollToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({                            // This block of code taken from stackOverflow
            scrollTop: 0
        }, 'slow');                                 
        return false;
    });
});