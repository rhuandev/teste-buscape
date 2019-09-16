$(document).ready(function() {
    $('.hamburguer-menu').click(function () {
        $('.line1').toggleClass('line1Change');
        $('.line2').toggleClass('line2Change');
        $('.line3').toggleClass('line3Change');
    });

    $('.miniatura1').hover(function () {
        $('.miniatura1').toggleClass('miniaturaChange');
    });

    $('.miniatura2').hover(function () {
        $('.miniatura2').toggleClass('miniaturaChange');
    });

    $('.miniatura3').hover(function () {
        $('.miniatura3').toggleClass('miniaturaChange');
    });
});
