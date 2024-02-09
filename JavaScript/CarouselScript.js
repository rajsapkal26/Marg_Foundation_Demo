$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  autoplay:true,
  animateOut:'fadeOut',
  animateIn: 'fadeIn',
  smartSpeed: 200, 
  autoplayTimeout:2500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})