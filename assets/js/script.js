
// Navbar collapse function

$(document).on('click', function () {
            $('.navbar-collapse').collapse('hide');
        })

// ScrollTop behaviour

$(window).scroll(function() {
    var displayHeight = $(window).scrollTop();
    if (displayHeight > 90) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut(2000);
    }
});
$(document).ready(function() {
    $("#scrollToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");    // This line of code taken from stackOverflow
        return false;
    });
});
