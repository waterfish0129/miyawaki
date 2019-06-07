$('document').ready(function() {
  var mySwiper = new Swiper(".swiper-container", {
    // 參數設定[註1]
    direction: "horizontal", // 方向
    loop: true, // 循環
    pagination: {
      el: ".swiper-pagination", // 分頁物件
    },
    autoplay: {
      delay:4000,
    },
    navigation: {
  			nextEl: ".swiper-button-next", // 上一頁按鈕物件
  			prevEl: ".swiper-button-prev", // 下一頁按鈕物件
  		}
  })
  $('.hamberger i').on('click',function(){
    $('.hamberger .mask').show();
    $('.nav-control-base').css("right","0px");
  });
  $('.hamberger .mask').on('click',function(){
        $('.hamberger .mask').hide();
    $('.nav-control-base').css("right","-280px");
  });

})
