$(document).ready(function(){
     $(".slideshow-img4:gt(0)").hide();
     
     setInterval(function() { 
     $('.slideshow-img4:first')
       .fadeOut(1000)
       .next()
       .fadeIn(1000)
       .end()
       .appendTo('#slideshow4');
       },  3000);
   })