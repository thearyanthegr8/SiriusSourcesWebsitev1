$(document).ready(function(){
     $(".slideshow-img3:gt(0)").hide();
     
     setInterval(function() { 
     $('.slideshow-img3:first')
       .fadeOut(1000)
       .next()
       .fadeIn(1000)
       .end()
       .appendTo('#slideshow3');
       },  3000);
   })