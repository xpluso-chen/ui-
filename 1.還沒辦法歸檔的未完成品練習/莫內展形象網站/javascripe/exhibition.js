// 計算 .owl-carousel 內的項目數量
const itemCount = document.querySelectorAll("#carousel .item").length;
    
jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: false, // use rewind if you don't want loop
    margin: 20,
    loop: false, // 停止循環，讓它精確顯示項目數量
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: [
        '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',
        '<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'
    ],
    responsive: {
        0: {
            items: 1 // 根據照片數量顯示
        },
        600: {
            items: 3 // 根據照片數量顯示
        },
        1024: {
            items: 3 // 根據照片數量顯示
        }
    }
});