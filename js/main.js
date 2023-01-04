$(function () {
    $('.main_slide').slick({
        autoplay: false,
        arrows: true,
        dots: true,
    });

    $('.animal_slide').slick({
        autoplay: true,
        arrows: false,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '300px',
    })

    $('.mainAnimal .ani_arrow i:first-child').on('click', function () {
        $('.animal_slide').slick('slickPrev')
    });
    $('.mainAnimal .ani_arrow i:last-child').on('click', function () {
        $('.animal_slide').slick('slickNext')
    });





})