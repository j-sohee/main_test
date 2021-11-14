//header 2depth menu
$("#gnb>li").on("mouseenter", function(){
    $(this).find(".gnb_2depth").show();
})
$("#gnb>li").on("mouseleave", function(){
    $(this).find(".gnb_2depth").hide();
})

$("#gnb>li").each(function(index){
    $("#gnb>li").eq(index).find("a").on("focusin", function(){
        $("#gnb>li").eq(index).find(".gnb_2depth").show();     
    });

    $("#gnb>li").eq(index).find("a").last().on("focusout", function(){
        $("#gnb>li").eq(index).find(".gnb_2depth").hide();
    });
});

//gnbMo
var btnCall = document.querySelector(".btnCall");
var menuMo = document.querySelector(".menuMo");

btnCall.onclick = function(e){
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}

//main slider
const $slider = $("#visual").find("#slider");
const $next = $("#visual").find(".next");
const $prev = $("#visual").find(".prev");
const $pic1 = $("#visual").find(".right>.pic")
const $pic2 = $("#visual").find(".mainVisual>.pic");
const $miniTxt = $slider.find(".wrap");
const $mainTit = $slider.find(".mainTit");
const $line = $slider.find(".right>.line");
let speed = 500;


$slider.children("ul").find("li").last().prependTo($slider.children("ul"));

//main motion
motion();


$next.on("click", function(e){
    e.preventDefault();
    next($slider);
    motion();
});

$prev.on("click", function(e){
    e.preventDefault();
    prev($slider);
});

function motion(){
    $line.animate({ marginTop:0, height:"378px" }, speed, function(){
        $pic1.animate({ height:"160px", marginTop:0},speed, function(){
            $pic2.animate({ height:"100%", marginTop:0},speed, function(){
                $miniTxt.addClass("on");
                $mainTit.addClass("on");
                $prev.addClass("on");
                $next.addClass("on");
            });
        });
    });
}

function next(el){
    el.children("ul").animate({marginLeft : "-200%"},speed, function(){
        $(this).css({marginLeft : "-100%"});
        $(this).children("li").first().appendTo(this);
    });
}

function prev(el){
    el.children("ul").animate({marginLeft:0}, speed, function(){
        $(this).css({marginLeft:"-100%"});
        $(this).children("li").last().prependTo(this);
    });
}
 