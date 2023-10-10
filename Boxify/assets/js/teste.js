window.addEventListener("scroll", function () {
    var carousel = document.querySelector(".carousel");
    var carouselOffset = carousel.offsetTop;

    if (window.pageYOffset > carouselOffset) {
        carousel.classList.add("black");
    } else {
        carousel.classList.remove("black");
    }
});
