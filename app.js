$(document).ready(function(){
    var marquee = $('.hashtag-scroller');
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('.hash-items').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/140));
    });
    });

$(function() {
 
        $(window).scroll(function() {
         
        if($(this).scrollTop() != 0) {
         
        $('.myBtn').fadeIn();
         
        } else {
         
        $('.myBtn').fadeOut();
         
        }
         
        });
         
        $('.myBtn').click(function() {
         
        $('body,html').animate({scrollTop:0},2000);
         
        });
         
}); 


let switchButton = document.querySelector(".switch-btn");
let sliderRoundLeft = document.querySelector(".slider-round-left");
let body = document.querySelector("main")
let footer = document.querySelector("footer")
let text = document.querySelectorAll(".text")
let link = document.querySelectorAll(".link")
let description = document.querySelectorAll(".description")
console.log(link)
switchButton.addEventListener('click',function(){
    if(sliderRoundLeft.classList.contains("slider-round-left"))
    {
        sliderRoundLeft.classList.remove("slider-round-left")
        sliderRoundLeft.classList.add("slider-round-right")
        body.setAttribute("style", "background-color:#3d444d; ");
        for(let i=0;i<text.length;i++){
            text[i].setAttribute("style","color :#4b4b4b")
        }
        for(let i=0;i<description.length;i++){
            description[i].setAttribute("style","color :#ffffff")
        }
        footer.setAttribute("style", "background-color:#3d444d; ");
        for(let i=0;i<link.length;i++){
            link[i].setAttribute("style","color :#4b4b4b")
        }
    }
    else
    {

        sliderRoundLeft.classList.add("slider-round-left");
        sliderRoundLeft.classList.remove("slider-round-right");
        body.setAttribute("style", "background-color: rgb(238, 238, 238); ");
        footer.setAttribute("style", "background-color: rgb(238, 238, 238); ");
        for(let i=0;i<description.length;i++){
            description[i].setAttribute("style","color :#1f262f")
        }
    }
})

//SCROLL
let roadmap = document.querySelector('.roadmap');
let roadmapVisible =document.querySelector('.roadmap-visible')
roadmap.addEventListener('click',function(){
    roadmapVisible.scrollIntoView()
})
//

let live = document.querySelector('.live');
let liveVisible =document.querySelector('.live-view')
live.addEventListener('click',function(){
    liveVisible.scrollIntoView()
})
//
let home = document.querySelector('.home')
home.addEventListener('click',function(){
    $('body,html').animate({scrollTop:0},2000);
})


//SLIDER
$(document).ready(function(){
    $('.coin-description').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
});
});
              

