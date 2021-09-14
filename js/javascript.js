jQuery(document).ready(function() {
    $('.menu-toggle').click(function(e) {
        $('.nav-menu').toggleClass('active');
        e.preventDefault();
    });
    //text-search
    $('.site-search-wrapper .fas.fa-search').click(function(e) {
        $('.border-text').toggleClass('active');
        e.preventDefault();
    });
    // client-say
    var stt = 0;
    var endImg = $(".slide:last").attr("idx");
    var changeImg = function(stt) {
        $(".slide").hide();
        $(".slide").eq(stt).show();
        $(".btn-client button").removeClass("active");
        $(".btn-client button").eq(stt).addClass("active");

        // clearInterval(interval);
        // timer();
    };

    $(".btn-client button").click(function() {
        stt = $(this).attr("idx");

        changeImg(stt);
    });
    // brand
    // let slidePosition_brand = 0;
    // const slides_brand = $('.mySlides');
    // const totalSlides_brand = slides_brand.length;
    // $('#prev').bind('click', function() {
    //     movetoPrevSlide();
    // });
    // $('#next').bind('click', function() {
    //     movetoNextSlide();
    // });

    // function updateSlidePosition_brand() {
    //     for (let slide_brand of slides_brand) {
    //         slide_brand.classList.remove('active');
    //         slide_brand.classList.add('mySlides--hidden');
    //     }
    //     slides_brand[slidePosition_brand].classList.add('active');
    // }

    // function movetoNextSlide() {
    //     if (slidePosition_brand === totalSlides_brand - 1) {
    //         slidePosition_brand = 0;
    //     } else {
    //         slidePosition_brand++;
    //     }
    //     updateSlidePosition_brand()
    // }

    // function movetoPrevSlide() {
    //     if (slidePosition_brand === 0) {
    //         slidePosition_brand = totalSlides_brand - 1;
    //     } else {
    //         slidePosition_brand--;
    //     }
    //     updateSlidePosition_brand()
    // }
});