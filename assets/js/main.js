(function ($)
  { "use strict"
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  



              // SERHEY KOBERNYK
// tabs
$('.nav-item').on('click',function(){

  let currTab = $(this).parent().index()

  $('.nav-item').removeClass('active');

  $(this).addClass('active');
  
});
// Parallax

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// Swiper

const swiper = new Swiper('.swiper', {
  direction : 'horizontal',
  spaceBetween : 50,
  slidesPerViev: 3,
  loope:true,
  stopOnLastSlide: false,
  autoplay:{
    delay:5000
  }
});
    // Gamburger

$('.mobile_menu ').on('click',function(){
  $('.main-menu').toggle('d')
  
  })
  

        // Modal window
  const btnOpen=document.getElementById('border-btn');
  const btnClose=document.getElementById('modals-window')
  const overlay=document.getElementById('overlay');
  const modal =document.getElementById('wrapper-modal');
  
  btnOpen.addEventListener('click',()=>{
      modal.classList.add('show');
     
  })
  
  const closeModal = ()=>{
  modal.classList.remove('show');
     
  }
  
  overlay.addEventListener('click',(closeModal));
 







    // Validate

    $('#button-form').on('click',function(){
      e.preventDefault();
      $(this).parent('#form-book').submit();
    })
  
    $.validator.addMethod('regex',function(value,element,regexp){
      let regExsp =new RegExp(regexp);
      return this.optional(element) || regExsp.test(value)
    })
  
  function valEll(el){
    el.validate({
      rules:{
        name:{
          required:true,
          regex:'[A-Za-z]{1,32}'
        },
        phoneNumber:{
          required:true,
          digits:true,
          minlength:8,
          maxlength:11,
          regex:'[0-9]+',
          
        },
        email:{
        required:true,
        email:true,
        regEx : '/^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/'
      },
      },
      
      messages:{
        name:'This field is required',
        phoneNumber:'This field is required',
        email:'Enter a valid email',
      },

      submitHandler: function(form) {
        $('#preloader-active').fadeIn();
        let $form=$(form);
        let formId=$(form).attr('id');
        switch($formId){
            case '.form-book':
                $.ajax({
                    type:'POST',
                    url :$form.attr('action'),
                    data:$form.serialize(),
                })
                    .done(function(){
                        console.log('its ok')
                    })
                    .fail(function(){
                        console.log('fail')
                    })
                    .always(function(){
                        setTimeout(function(){
                            $form.trigger('resert');
                            $('#wrapper-modal').fadeOut();
                        },1100);
                    })
            break;
        };
    }
    });
    
  };

  
$('.form-val').each(function(){
  valEll($(this));
});

})(jQuery);
  


     
  
















