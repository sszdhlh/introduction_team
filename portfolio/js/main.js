
$(document).ready(function () {
    $("html").fadeIn(1000);
    var top = $(".top").height() + 50;
    visible(top);
});

function showNav() {
    $(document).ready(function () {
        $(".nav_xs").slideToggle("slow");
    })
}

function hideNav() {
    var width = $(window).width();
    if (width >= 768) {
        $(".nav_xs").css("display", "none");
    }
}



function visible(height) {
    $(".visible").height($(window).height() - height);
}
$(window).resize(function () {

    var top = $(".top").height() + 50;
    visible(top);
    hideNav();
});



$(window).scroll(function (event) {
    var pageTopY = $(window).scrollTop();
    var pageBottomY = $(window).scrollTop() + $(window).height();

    $(".box").each(function () {
        var boxTopY = $(this).offset().top;
        var boxCenter = boxTopY + ($(this).height() / 2);

        if (boxCenter > pageTopY && boxCenter < pageBottomY) {


            if ($(this).children('.lazy').hasClass('lazy')) {

                $(this).find('.lazy').removeClass('lazy');

                $(this).removeClass('box');
            } else if ($(this).children('.progress_cover').children('.percent').hasClass('percent')) {

                var width_progress = $(this).find('p').text();
                $(this).find('.percent').animate({width: width_progress}, 2000);

                $(this).removeClass('box');
            } else if ($(this).children('.down').hasClass('down')) {

                $(this).find('.down').removeClass('down');

                $(this).removeClass('box');
            } else if ($(this).children().hasClass('increase1')) {

                increase('.increase1');

                $(this).removeClass('box');
            }else if ($(this).children().hasClass('increase2')) {

                increase('.increase2');

                $(this).removeClass('box');
            }else if ($(this).children().hasClass('increase3')) {

                increase('.increase3');

                $(this).removeClass('box');
            }
        }
    });
});





$('.contact_text').focus(function () {

    $(this).parent().find('.label_up').animate({top: 3, opacity: 100}, 50);
})
$('.contact_text').blur(function () {

    if ($(this).val() != '') {

        $(this).parent().find('.label_up').animate({top: 3, opacity: 100}, 50);
        return;
    }

    $(this).parent().find('.label_up').animate({top: 21, opacity: 0}, 50);
});


function locate(id) {
    var top = $(id).offset().top;
    $("html,body").animate({scrollTop: top}, 1000);
}
