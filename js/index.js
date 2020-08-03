'use strict';
$(function() {
    (function($) {
        $('.acordeon-title').on('click', function() {
            $(this).next().slideToggle(400);
            $(this).next().toggleClass('visible');

            if ($(this).next().hasClass('visible')) {
                $(this).find('.title-icon').text('-');
            } else {
                $(this).find('.title-icon').text('+');
            }
        });
    })(jQuery);

    (function($) {
        $('.next').on('click', function() {
            let currentSlide = $('.img.current');
            let currentSlideIndex = $('.img.current').index();
            let nextSlideIndex = currentSlideIndex + 1;
            let nextSlide = $('.img').eq(nextSlideIndex);

            currentSlide.fadeOut(1000);
            currentSlide.removeClass('current');

            if (nextSlideIndex === $('.img:last').index() + 1) {
                nextSlide = $('.img:first');
            } 

            nextSlide.fadeIn(1000);
            nextSlide.addClass('current');
        });

        $('.prev').on('click', function() {
            let currentSlide = $('.img.current');
            let currentSlideIndex = $('.img.current').index();
            let prevSlideIndex = currentSlideIndex - 1;
            let prevSlide = $('.img').eq(prevSlideIndex);

            currentSlide.fadeOut(1000);
            currentSlide.removeClass('current');

            prevSlide.fadeIn(1000);
            prevSlide.addClass('current');
        });
    })(jQuery);

    (function($) {
        const $scrollBtn = $('.scroll-top-btn');

        $scrollBtn.on('click', function() {
            $('html, body').animate({'scrollTop': '0'}, 1000);
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > document.documentElement.clientHeight) {
                $scrollBtn.show();
            } else {
                $scrollBtn.hide();
            }
        });
    })(jQuery);
    
    (function($) {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    })(jQuery);

    (function($) {
        $('.scillbar').each(function() {
            $(this).find('.scillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000);
        });
    })(jQuery);
});


