$(document).ready(function(){
    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.prepend('<span class="close icon-close_js">&times;</span>')
                .animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
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
        curBlockShow = $('.free-ads-popup');

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
        console.log('sdfs')
    }

    $('.cur-price').each(function(){
        if($(this).text().length == 5) {
            $(this).css('font-size','21px');
        }
        else if($(this).text().length > 5) {
            $(this).css('font-size','18px');
        }
    });

    $('.wrap-form').prepend('<img src="images/header/banner_man.png" class="banner-man" alt="banner">');

    $("body").append('<span class="wrap-form-ajax"></span>');
    $('.wrap-form-ajax').load("form.html #bg-popup");

    var elemTell = $('.client-tell'),
        txtTell = elemTell.text(),
        textTellLng = txtTell.length;

    elemTell.html(
        elemTell.text(txtTell.spli)
        + '...' + '<a class="show-all" href="#">показать</a>'
    )


});