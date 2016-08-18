$(function () {
    //banner轮播
    var sgqmySwiper1 = new Swiper('.sgq-banner-box',{
        autoplay : 5000,
        loop : true,
    })
    $('.sgq-banner-box').hover(function () {
        sgqmySwiper1.stopAutoplay();
    },function () {
        sgqmySwiper1.startAutoplay();
    });
})