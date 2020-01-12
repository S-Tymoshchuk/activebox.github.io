import $ from "jquery";


$(function () {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    //scroll

    $("[data-scroll]").on("click", function (e) {
        e.preventDefault();
        let elemId = $(this).data("scroll");
        let elemOffset = $(elemId).offset().top;
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elemOffset - 60
        }, 700);
    });

    let nav = $("#nav");
    $("#navToggle").on("click", function (e) {
        e.preventDefault();

        nav.toggleClass("show");
    });

});