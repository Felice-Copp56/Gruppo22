$(document).ready(function(){
       // Check Radio-box
       $(".rating input:radio").attr("checked", false);

       $('.rating input').click(function () {
           $(".rating span").removeClass('checked');
           $(this).parent().addClass('checked');
       });
        
       $('input:radio').change(
         function(){
           var userRating = parseInt(this.value);
           var media_att=parseFloat(document.getElementById("media").textContent);
           var media=Math.round(((userRating+media_att)/2)*10)/10;
           document.getElementById("media").innerHTML=media;
       }); 
       
});