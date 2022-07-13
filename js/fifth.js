$(document).ready(function(){
     $(".slideshow-img5:gt(0)").hide();
     
     setInterval(function() { 
     $('.slideshow-img5:first')
       .fadeOut(1000)
       .next()
       .fadeIn(1000)
       .end()
       .appendTo('#slideshow5');
       },  3000);
   })