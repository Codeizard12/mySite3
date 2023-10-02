// start mega menu

$("#megaBtn").click(function(){
        
    $(".mega-menu").animate({"top":"1px"});
    
})



$("#megaBtn").click(function(){
        
        $(".mega-menu").fadeToggle(1500 );
        
})
// end mega menu

// start links
    $("a[href^='#']").click (function(){
        let attHref = $(this).attr("href");
        let secTop = $(attHref).offset().top;
        $("html,body").animate({"scrollTop":secTop},3000);
    })

// end links

// up button

    
    let offsetTopLanding = $("#land").offset().top;
    $(window).scroll(function(){
        let wScroll=$(window).scrollTop();

        if(wScroll > offsetTopLanding){
            $("button").fadeIn(500);
            
        }else{
            $("button").fadeOut(250);
            // console.log(offsetTopLanding);
        }
     
    });
   
    $("button").click(function(){
        $("html,body").animate({"scrollTop" : "0"} ,3000);
    });
  
// up button

// loading
$(document).ready(function(){
    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });
})
// loading




