$(document).ready(function ($) {
    lc_lightbox('.elem', {
        wrap_class: 'lcl_fade_oc',
        gallery: true,
        thumb_attr: 'data-lcl-thumb',

        skin: 'minimal',
        radius: 0,
        padding: 0,
        border_w: 0,
        txt_toggle_cmd: false,
        nav_btn_pos: 'middle',
        slideshow: false,
    });


    // Open right panel
    $('.js-right-panel-trigger').on('click', function (event) {
        event.preventDefault();
        $('.js-cd-panel-right').addClass('cd-panel--is-visible');
    });

    // Close right panel
    $('.js-right-close').on('click', function (event) {
        $('.js-cd-panel-right').removeClass('cd-panel--is-visible');
        event.preventDefault();
        clearInterval(timer);
        $(".galleryButton").fadeIn();
        $(".contactButton").fadeIn();
        $(".aboutmeButton").fadeIn();
        $(".disappear").fadeIn();
    });

    // Open left panel
    $('.js-left-panel-trigger').on('click', function (event) {
        event.preventDefault();
        $('.js-cd-panel-left').addClass('cd-panel--is-visible');
    });

    // Close left panel
    $('.js-left-close').on('click', function (event) {
        $('.js-cd-panel-left').removeClass('cd-panel--is-visible');
        event.preventDefault();
        clearInterval(timer);
        $(".galleryButton").fadeIn();
        $(".contactButton").fadeIn();
        $(".aboutmeButton").fadeIn();
        $(".disappear").fadeIn();
    });

    // Open bottom panel
    $('.js-bottom-panel-trigger').on('click', function (event) {
        event.preventDefault();
        $('.js-cd-panel-bottom').addClass('cd-panel--is-visible');
    });

    // Close bottom panel
    $('.js-bottom-close').on('click', function (event) {
        $('.js-cd-panel-bottom').removeClass('cd-panel--is-visible');
        event.preventDefault();
        clearInterval(timer);
        $(".galleryButton").fadeIn();
        $(".contactButton").fadeIn();
        $(".aboutmeButton").fadeIn();
        $(".disappear").fadeIn();
    });

    var timer;
    $(".container").mousemove(function () {
        clearInterval(timer);
        $(".galleryButton").fadeIn();
        $(".contactButton").fadeIn();
        $(".aboutmeButton").fadeIn();
        $(".disappear").fadeIn();
        timer = setTimeout(function () {
            $(".galleryButton").fadeOut();
            $(".contactButton").fadeOut();
            $(".aboutmeButton").fadeOut();
            $(".disappear").fadeOut();
        }, 3000);
    }).mouseleave(function () {
        $(".galleryButton").fadeOut();
        $(".contactButton").fadeOut();
        $(".aboutmeButton").fadeOut();
        $(".disappear").fadeOut();
    });
});