var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

const swiper = new Swiper('.swiper-main', {
    // Optional parameters
  
      slidesPerView: 1,
      spaceBetween: 40,
      noSwiping: true,
      allowTouchMove: false,

      

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-main',
      prevEl: '.swiper-button-prev-main',
    },
  
  
  });



const swiper2 = new Swiper('.swiper-second', {
    // Optional parameters
  
      slidesPerView: 'auto',
      spaceBetween: 130,
      
  
    breakpoints: {
      275:{
      slidesPerView: 1,
  
          width: 490
      },
      375:{
      slidesPerView: 1,
  
          width: 590
      },
      440:{
          width: 670,
      slidesPerView: 1,
  
      },
      550:{
          width: 850,
      slidesPerView: 1,
  
      },
      660:{
          width: 950,
      slidesPerView: 1,
  
      },
      990:{
          width: 970,
      slidesPerView: 1,
  
      },
      1440:{
          width: 970,
      slidesPerView: 'auto',
  
      },
      
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-second',
      prevEl: '.swiper-button-prev-second',
    },
  
  
  });

  $('.valyear').click(swiper,function(){
    var valyear = $(this).attr('id');
    console.log(valyear)

    swiper.slideTo(valyear);
})

  $('#select-year').change(swiper,function(){
    var yearval = $('#select-year').val();
    swiper.slideTo(yearval);
})

// 

  $(document).ready(function() {
    $(".year-item-container-desktop").click(function () {
        $(".year-item-container-desktop").removeClass("active");
        $(this).addClass("active");   
    });
    });
