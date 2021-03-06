$(document).ready(function(){
    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.prepend('<span class="close icon-close_js">&times;</span>').animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');
            console.log(showCurrentForm);

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'top': scrollTop,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.icon-close_js, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                $('.icon-close_js').remove();
                $('.header-form-callback').remove();
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'left': 0,
                    'top': 0,
                    'margin-left': 0
                });
            });

            $("#wrap-popup").click(function(e) {
                e.stopPropagation();
            });
        });
    }
    /*end*/

    var curLinkAuthorization = $('.popup-js'),
        curBlockShow = $('.free-ads-popup'),
        curLinkAdd = $('.js-popup'),
        curPopupAdd = $('.popup-home-form');


        popupWindow(curLinkAdd, curPopupAdd);
        popupWindow(curLinkAuthorization, curBlockShow);


    if ( $('#bigslider').length > 0 ) {
        if ( $('#carousel').length > 0 ) {
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: true,
                slideshow: false,
                itemWidth: 112,
                itemMargin: 17,
                asNavFor: '#bigslider',
                prevText: "",
                nextText: ""
            });
        }

        $('#bigslider').flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: true,
            slideshow: false,
            sync: "#carousel",
            prevText: "",
            nextText: ""
        });
    }

    $('.cur-price').each(function(){
        if($(this).text().length == 5) {
            $(this).css('font-size','21px');
        }
        else if($(this).text().length > 5) {
            $(this).css('font-size','18px');
        }
    });

    $('.wrap-form').prepend('<!--noindex--><img src="images/header/banner_man.png" class="banner-man" alt="banner"><!--/noindex-->');

    var elemTell = $('.show-tell');

    $.each(elemTell, function(index, elem){

        var txtTell = $(elem).text(),
            arrTell = txtTell.split(''),
            arrTxt = [],
            resTxt = '';

        $.each(arrTell, function(index){
            if(index > 8 ) return;

            arrTxt.push(arrTell[index]);
        });

        $.each(arrTxt, function(index, value){
            resTxt += value;
        });

        $(elem).text(resTxt);
        $(elem).html($(elem).html() + '...' + '<a class="show-all" href="#">показать</a>');

        $('.show-all').on('click', function(e){
            e.preventDefault();
            $(this).parent().text(txtTell);
        });
    });
});