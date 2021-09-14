jQuery(document).ready(function() {
    $('.menu-toggle').click(function(e) {
        $('.nav-menu').toggleClass('active');
        e.preventDefault();
    });
    //icon_search
    $('.site-search-wrapper .fas.fa-search').click(function(e) {
        $('#txt_box_search').toggleClass('active');
        e.preventDefault();
    });
    //icon_shopping_basket
    $('.site-search-wrapper .fa-shopping-basket').click(function(e) {
        $('.txt_box_basket').toggleClass('active');
        e.preventDefault();
    });
    $('.site-search-wrapper .fa-user-alt').click(function(e) {
        $('.txt_box_user').toggleClass('active');
        e.preventDefault();
    });
    //text-search
    $('.site-search-wrapper .fas.fa-search').click(function(e) {
        $('.border-text').toggleClass('active');
        e.preventDefault();
    });
    //product
    var stt_pro = 0;
    var endImg_pro = $(".boder_list_pro:last").attr("idx");
    var changeImg_pro = function(stt_pro) {
        $(".product-content .boder_list_pro").hide();
        $(".product-content .boder_list_pro").eq(stt_pro).show();
        $(".nav-product-list span").removeClass("active");
        $(".nav-product-list span").eq(stt_pro).addClass("active");

        // clearInterval(interval);
        // timer();
    };

    $(".nav-product-list span").click(function() {
        stt_pro = $(this).attr("idx");

        changeImg_pro(stt_pro);
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