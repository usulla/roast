$(document).ready(function() {

    /* Tabs */
    $('.tab-content.current').slick({
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="btn prev-arrow"><img src="/bin/street/images/prev-arrow.png"></div>',
        nextArrow: '<div class="btn next-arrow"><img src="/bin/street/images/next-arrow.png"></div>',
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(document).on('click', 'ul.tabs li', function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');

        if($(this).text() == 'Тизеры'){
          $('.add_grid').css('display', 'none');
        }
        else{
          $('.add_grid').css('display', '');
        }

        $("." + tab_id).addClass('current').slick({
            dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="btn prev-arrow"><img src="/bin/street/images/prev-arrow.png"></div>',
        nextArrow: '<div class="btn next-arrow"><img src="/bin/street/images/next-arrow.png"></div>',
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    })

  /*   var slideIndex = 0;
   $('.add_grid').on('click', function() {
        slideIndex++;
        $('.carousel').slick('slickAdd', '<div><h3>dfgdgfdgdgfddgf' + slideIndex + '</h3></div>');
    }); 

    $('.js-remove-slide').on('click', function() {
        $('.carousel').slick('slickRemove', slideIndex - 1);
        if (slideIndex !== 0) {
            slideIndex--;
        }
    });
*/
    $(document).on('click', '.add_grid', function() {
        $('.carousel').slick('unslick');
        $('.preview img').css({ 'margin-bottom': '-7px' });
        $(this).css('display', 'none');
    })

    $(document).on('click', '.play-tizer', function() {
       ga('send', 'event', 'Street', 'Play', 'Main Tizer');
        $('.iframe-tizer').css({ 'display': 'flex' }).prepend('<iframe src="https://rutube.ru/play/embed/11978730?autoStart=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>');

        /*  var player = document.querySelector('iframe');
          player.contentWindow.postMessage(JSON.stringify({
              data: {
                  isFullscreen: true
              },
              type: 'player:changeFullscreen'
          }), '*'); */
    })
    $(document).on('click', '.preview', function() {
        var iframeSrc = $(this).parents('.carousel__item').attr('data-src');
        var slideId = $(this).parents('.slick-slide').attr('data-slick-index');
if($(this).parents('.carousel').length !== 0){
       ga('send', 'event', 'Street', 'Play', `Series ${iframeSrc}`);
}
else{
          ga('send', 'event', 'Street', 'Play', `Tizer ${iframeSrc}`); 
}


        $('.iframe-tizer').css({ 'display': 'flex' }).prepend('<iframe src="" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>');

        $('.iframe-tizer iframe').attr('src', `${iframeSrc}?autoStart=true`);
    })

    $(document).on('click', '.close-tizer', function() {
        $('.iframe-tizer').css({ 'display': 'none' }).html('<div class="close-tizer">x</div>');
    });


});