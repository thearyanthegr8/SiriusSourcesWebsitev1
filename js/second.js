$(document).ready(function(){
     $(".slideshow-img2:gt(0)").hide();
     
     setInterval(function() { 
     $('.slideshow-img:first2')
       .fadeOut(1000)
       .next()
       .fadeIn(1000)
       .end()
       .appendTo('#slideshow2');
       },  3000);
   })