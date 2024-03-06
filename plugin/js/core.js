$(document).ready(function(){
    $('.mainSlider').bxSlider({
        mode: 'horizontal', // default : horizontal 
        speed: 500, // default : 500 

        startSlide: 0, // default : 0
        randomStart: false, // default : false

        infiniteLoop: true, // default: true
        hideControlOnEnd: false, // * 0번 slider prev , last slider next 삭제 (편방향에서 가능)

        pager: true,
        pagerType: 'full',
        pagerCustom: '.customPager',

        controls: true,
        prevSelector: '.btn_prev',
        nextSelector: '.btn_next',  
        prevText: '이전',
        nextText: '다음',

        auto: true,
        autoDelay: 1000,
        pause: 500,
        autoHover: true
    });
});