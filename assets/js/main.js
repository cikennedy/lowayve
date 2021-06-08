$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $('.navbar').addClass('sticky');
      }else{
        $('.navbar').removeClass('sticky');
      }
    });
  
    // menu/navbar script that closes out menu on click
    $('.menu-btn').on('click', function() {
      $('.navbar .menu').addClass('active');
      $('menu-btn i').addClass('active');
    });
  
    $('.navbar a').on('click', function() {
      $('.navbar .menu').removeClass('active')
    });
  
    // $('.menu-btn').click(function(){
    //   $('.navbar .menu').toggleClass('active');
    //   $('.menu-btn i').toggleClass('active');
    // });
  
    // owl carousel script 
    $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplaySpeed: 3500,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0:{
          items: 1,
          nav: false
        },
        600:{
          items: 2,
          nav: false
        },
        1000:{
          items: 3,
          nav: false
        }
      }
    })
  })