let scrollToTopButton = document.querySelector("#scrollToTop");
window.addEventListener("scroll", scrollEffect);

function scrollEffect(){
    if(window.pageYOffset > 100){
        scrollToTopButton.style.display = "block";
    }
    else{
        scrollToTopButton.style.display ="none";
    }
}

scrollToTopButton.addEventListener("click", scrollToTop);
function scrollToTop(){
    window.scrollToTop (0, 0);
}