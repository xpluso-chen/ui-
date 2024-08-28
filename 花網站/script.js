// 移除背景影片
$(function () {
    if ($(window).width() < 821) {
        $("#about video").remove();
    }

    // 抓window視窗，偵測寬度
    // 啟用

    // 交替(toggleClass)漢堡按鈕
    $('.hamburger').click(function () {
        // .hamburger交替加入is-active
        $(this).toggleClass('is-active');
        // .navigation交替加入show
        $('.navigation').toggleClass('show');
    });


// 導覽列滑動到指定位置
$('.menu a').click(function(){
let btn = $(this).attr('href');// 取屬性和值
let pos = $(btn).offset();// 抓相對座標位置
$('html,body').animate({scrollTop:pos.top},1000);// 執行動畫->滾軸效果(滾軸預設在body中)
// 1000毫秒

});


// 滑動至頂
$('#goTop').click(function(){
    $('html,body').animate({scrollTop:0},1000);
    // 因為有些瀏覽器會將卷軸寫在html,有些些寫在body
});

// 至頂按鈕淡入淡出
$(window).scroll(function(){
    if($(this).scrollTop()>200){
$('#goTop').stop().fadeTo('fast',1);
    }else{
        $('#goTop').stop().fadeOut();
    }
    // .stop()是讓滾軸當頁面停止時就閃一次就好，不要我上下20次就閃現閃出20次
});


});


