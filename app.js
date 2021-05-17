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
console.log(link)
switchButton.addEventListener('click',function(){
    if(sliderRoundLeft.classList.contains("slider-round-left"))
    {
        sliderRoundLeft.classList.remove("slider-round-left")
        sliderRoundLeft.classList.add("slider-round-right")
        body.setAttribute("style", "background-color:#181d23; ");
        for(let i=0;i<text.length;i++){
            text[i].setAttribute("style","color :#4b4b4b")
        }
        footer.setAttribute("style", "background-color:#181d23; ");
        for(let i=0;i<link.length;i++){
            link[i].setAttribute("style","color :#4b4b4b")
        }
    }
    else
    {

        sliderRoundLeft.classList.add("slider-round-left");
        sliderRoundLeft.classList.remove("slider-round-right");
        body.setAttribute("style", "background-color:silver; ");
        footer.setAttribute("style", "background-color:silver; ");
    }
})

//SCROLL
let roadmap = document.querySelector('.roadmap');
let roadmapVisible =document.querySelector('.roadmap-visible')
roadmap.addEventListener('click',function(){
    roadmapVisible.scrollIntoView()
})
//
let giveaway = document.querySelector('.giveaway')
let giveawayVisible = document.querySelector('.giveaway-visible')
giveaway.addEventListener('click',function(){
    giveawayVisible.scrollIntoView()
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
//COPY TEXT
let copy = document.querySelector('.copy-btn')
let copied = document.querySelector('.copied')
copy.addEventListener('click', function(){
    let linkLine = document.querySelector('.link');
    linkLine.select()
    document.execCommand("copy");
    copied.setAttribute("style", "display:block;");
    $('.copied').fadeOut(2000);
         
})

