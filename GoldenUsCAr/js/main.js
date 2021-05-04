//JavaScript
$(window).scroll(function(){
        $('.h13').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow =$(window).scrollTop();
            if(imagePos < topOfWindow+650){
                $(this).addClass("fadeInleft");
            }
        });
});
