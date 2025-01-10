
// 計算 .owl-carousel 內的項目數量
const itemCount = document.querySelectorAll("#carousel .item").length;

jQuery("#carousel").owlCarousel({
  autoplay: false,
  rewind: false, // use rewind if you don't want loop
  margin: 20,
  loop: false, // 停止循環，讓它精確顯示項目數量
  responsiveClass: true,
  autoHeight: true,
  nav: true,
  navText: [
    '<img src="./images/chevron-left.svg" alt="左邊按鈕">',
    '<img src="./images/chevron-right.svg" alt="右邊按鈕">'
  ],
  responsive: {
    0: {
      items: 3// 根據照片數量顯示
    },
    600: {
      items: 3 // 根據照片數量顯示
    },
    1024: {
      items: 3 // 根據照片數量顯示
    }
  }
});

$(function () {
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop(); // 當前滾動距離
    const windowHeight = $(window).height(); // 視窗高度

    // 視差效果
    const introduce2Offset = $('#introduce2').offset().top; // 區塊頂部位置
    const introduce2Height = $('#introduce2').outerHeight(); // 區塊高度
    if (scrollTop + windowHeight > introduce2Offset && scrollTop < introduce2Offset + introduce2Height) {
      const parallaxSpeed = 0.9; // 視差滾動速度
      const offset = Math.max(0, (scrollTop - introduce2Offset) * parallaxSpeed);
      $('#introduce2').css('background-position', `center ${offset}px`);
    }

    // 滾動文字效果
    $(".scroll-text").each(function () {
      const $text = $(this);
      const textOffset = $text.offset().top; // 文字區塊頂部位置
      if (scrollTop + windowHeight > textOffset) {
        $text.fadeTo(1800, 1);//透明度
      }
      // 在scss的.scroll-text {opacity: 0 }初始狀態要先隱藏才有顯現的效果
    });

    // navbar
    // 判斷滾動高度是否超過某個數值
    if (scrollTop > 700) { 
      // 當頁面往下滾動，將 #navbar 背景顏色改為 #111
      console.log(scrollTop);
      $('#navbar').css('background-color', 'rgba(83, 124, 163, 0.5)');
  } else {
      // 當頁面回到頂部時，恢復背景顏色
      $('#navbar').css('background-color', '');
  }
  });

  //展覽輪播介紹字出現和消失
  $(".exhibition-info").on("mouseenter", function () {
    $(this).removeClass("hidden").addClass("shown");
  });
  
  $(".exhibition-info").on("mouseleave", function () {
    $(this).removeClass("shown").addClass("hidden");
  });
  

});

