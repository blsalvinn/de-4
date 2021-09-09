// $(document).ready(function() {
//     $('.contracts-small-mobile').click(function() {
//         $('.nav-menu').toggleClass('show');
//     })
// });
jQuery(document).ready(function() {
    $('.menu-toggle').click(function(e) {
        $('.nav-menu').toggleClass('active');
        e.preventDefault();
    })

    // 
    let slidePosition = 0;
    const slides = $('.carousel-item');
    const dots = $('.dots');
    const totalDot = dots.length;
    document.getElementById("dot-event").addEventListener("click", function() {
        moveDotSilde();
    });

    function updateSlidePosition() {
        for (let slide of slides) {
            slide.classList.remove('active');
            slide.classList.add('carousel-item--hidden');
        }
        for (let dot of dots) {
            dot.classList.remove('active');
            dot.classList.add('dots-opacity');
        }
        slides[slidePosition].classList.add('active');
        dots[slidePosition].classList.add('active');
    }

    function moveDotSilde() {
        if (slidePosition === totalDot - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        updateSlidePosition()
    }
    //
    let slidePosition_brand = 0;
    const slides_brand = $('.mySlides');
    const totalSlides_brand = slides_brand.length;
    document.getElementById("prev").addEventListener("click", function() {
        movetoPrevSlide();
    });
    document.getElementById("next").addEventListener("click", function() {
        movetoNextSlide();
    });

    function updateSlidePosition_brand() {
        for (let slide_brand of slides_brand) {
            slide_brand.classList.remove('active');
            slide_brand.classList.add('mySlides--hidden');
        }
        slides_brand[slidePosition_brand].classList.add('active');
    }

    function movetoNextSlide() {
        if (slidePosition_brand === totalSlides_brand - 1) {
            slidePosition_brand = 0;
        } else {
            slidePosition_brand++;
        }
        updateSlidePosition_brand()
    }

    function movetoPrevSlide() {
        if (slidePosition_brand === 0) {
            slidePosition_brand = totalSlides_brand - 1;
        } else {
            slidePosition_brand--;
        }
        updateSlidePosition_brand()
    }
    // var slideIndex = 1;
    // showSlides(slideIndex);

    // function plusSlidess(n) {
    //     showSlides(slideIndex += n);
    // }

    // function showSlides(n) {
    //     var i;
    //     var slides_brand = $('.mySlides');
    //     if (n > slides_brand.length) {
    //         slideIndex = 1
    //     }
    //     if (n < 1) {
    //         slideIndex = slides_brand.length
    //     }
    //     for (i = 0; i < slides_brand.length; i++) {
    //         slides_brand[i].style.display = "none";
    //     }
    //     slides_brand[slideIndex - 1].style.display = "block";
    // }
    // var slideIndex = 1;
    // showDivs(slideIndex);

    // function plusDivs(n) {
    //     showDivs(slideIndex += n);
    // }

    // function showDivs(n) {
    //     var i;
    //     var x = $('.items-brand');
    //     if (n > x.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = x.length }
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     x[slideIndex - 1].style.display = "block";
    // }

});