$(document).ready(function(){

    $('.search_toggler').on('click',function () {
        $(this).toggleClass('act');
        $('.top_search_block').slideToggle();
        $('.search_close').on('click',function () {
            $('.top_search_block').slideUp();
        });
        return false;
    });

    $('.mm_btn').on('click',function () {
        $('.mm_menu').addClass('mm_show');
        $('.mm_close').on('click',function () {
            $('.mm_menu').removeClass('mm_show');
        });
        return false;
    });


    $(window).resize(function(){
        var top_bar = $('.top_bar').outerHeight();
        if($(window).innerWidth() < 1200){
            $('.top_search_block').css({
                'top':top_bar+'px'
            });
        }
    });
    $(window).resize();


    $('.mm_menu .c_menu .c_arrow').click(function(){
        $(this).parent().addClass('show');
    });
    $('.mm_menu .c_menu .c_back').click(function(){
        $(this).parent().removeClass('show');
    });

    $('.mm_menu .catalog_toggler').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });




    var paging = $('.paging');
    var p_first = $('span.first');
    var p_last = $('span.last');
    var slickElement = $('.main_slider');
    slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        p_first.html('0'+i);
        p_last.html('0'+slick.slideCount);
    });
    if($('.main_slider > div').length >1){
        $(slickElement).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
           dotsClass: 'custom_paging',
        });
    }

    var custom_paging=$('.custom_paging');
    $(paging).append(custom_paging);


    $(".dropdown-menu li a").click(function(){
        $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).text());
    });



    if($(window).innerWidth() < 991){
        $('.special_offers .tab-pane').each(function(){

            var pr_paging = $(this).find('.pr_paging');
            var pr_first = $(this).find('span.pr_first');
            var pr_last = $(this).find('span.pr_last');
            var pr_slider=$(this).find('.products_mobile_slider');
            var pr_slider_item=$(pr_slider).find('.list_item');
            var pr_slider_prev=$(this).find('.pr_slider_prev');
            var pr_slider_next=$(this).find('.pr_slider_next');

            pr_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                pr_first.html('0'+i);
                pr_last.html('0'+slick.slideCount);
            });

            if($(pr_slider_item).length >3){
                $(pr_slider).slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots:true,
                    dotsClass: 'pr_custom_paging',
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1,
                                dots:true
                            }
                        }
                    ]
                });
            }


            var pr_custom_paging=$(pr_slider).find('.pr_custom_paging');
            $(pr_paging).append(pr_custom_paging);

            $(pr_slider_prev).click(function(){
                $(pr_slider).slick('slickPrev');
            });
            $(pr_slider_next).click(function(){
                $(pr_slider).slick('slickNext');
            });


        });
    }



    if($(".partners_slider_desktop > div").length >3){
        $('.partners_slider_desktop').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }




    var part_paging = $('.part_paging');
    var part_first = $('span.part_first');
    var part_last = $('span.part_last');
    var partners_slider_mobile=$('.partners_slider_mobile');
    var part_slider_item=$(partners_slider_mobile).find('.item');
    var part_slider_prev=$('.part_slider_prev');
    var part_slider_next=$('.part_slider_next');

    partners_slider_mobile.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        part_first.html('0'+i);
        part_last.html('0'+slick.slideCount);
    });

    if($(part_slider_item).length >2){
        $(partners_slider_mobile).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            dotsClass: 'part_custom_paging',
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    var part_custom_paging=$(partners_slider_mobile).find('.part_custom_paging');
    $(part_paging).append(part_custom_paging);

    $(part_slider_prev).click(function(){
        $(partners_slider_mobile).slick('slickPrev');
    });
    $(part_slider_next).click(function(){
        $(partners_slider_mobile).slick('slickNext');
    });









    var news_paging = $('.news_paging');
    var n_first = $('span.n_first');
    var n_last = $('span.n_last');
    var news_slider=$('.news_slider');
    var news_slider_item=$(news_slider).find('.item');
    var news_slider_prev=$('.news_slider_prev');
    var news_slider_next=$('.news_slider_next');

    news_slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        n_first.html('0'+i);
        n_last.html('0'+slick.slideCount);
    });

    if($(window).innerWidth() < 991){
        $(news_slider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            variableWidth:true,
            dotsClass: 'news_custom_paging',
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:false,
                    }
                }
            ]
        });
    }

    var news_custom_paging=$(news_slider).find('.news_custom_paging');
    $(news_paging).append(news_custom_paging);

    $(news_slider_prev).click(function(){
        $(news_slider).slick('slickPrev');
    });
    $(news_slider_next).click(function(){
        $(news_slider).slick('slickNext');
    });




    $(".select li span").click(function(){
        $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).text());
        $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
    });


    $('.filter_toggler').on('click',function () {
        $('.filter_block').addClass('mf_show');
        $('.f_close').on('click',function () {
            $('.filter_block').removeClass('mf_show');
        });
        return false;
    });



    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [53.862042,27.686589],
                zoom:16,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: '223060, РБ, Минская обл., Минский р-н, Новодворский с/с, р-н д. Большое Стиклево, строение 40/1, помещение 26 '
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map_icon.svg',
                // Размеры метки.
                iconImageSize: [45, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -60]
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });

});


