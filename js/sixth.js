$(document).ready(function(){
     $(".slideshow-img6:gt(0)").hide();
     
     setInterval(function() { 
     $('.slideshow-img6:first')
       .fadeOut(1000)
       .next()
       .fadeIn(1000)
       .end()
       .appendTo('#slideshow6');
       },  3000);
   })