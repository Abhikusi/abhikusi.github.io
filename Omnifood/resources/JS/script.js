$(document).ready(function () {
    
   //*** for sticky navigation
    
$('.js--section-features').waypoint(function(direction){
     
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');         
            }
            }, {
        offset: '60px;'
    })   
    
    
 //*** for scrolling effect
    
        $('.js--scroll-to-plans').click(function (){
            $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        }) 

        $('.js--scroll-to-start').click(function (){
            $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
    
//** mobile navigation     
    
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        var iconName = icon.attr('name');
      
        nav.slideToggle(300);
 
        if (iconName === 'menu-sharp') {
            icon.attr('name', 'close-sharp');
        } else {
            icon.attr('name', 'menu-sharp');
        }
    });
    
    
    
////*** Animation on navigation    
 
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
      },
        {
         offset: '50%',
     });
    
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
      },
        {
         offset: '50%',
     });
    
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
      },
        {
         offset: '50%',
     });
    
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__shakeX');
      },
        {
         offset: '50%',
     });
    
    
    
 //*** navigation scrolling   
    
    $(document).ready(function() {
        $('#main-nav li a').click(function(e) {

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top
        }, 1000);

        e.preventDefault();
      });
    });      
    
    
});