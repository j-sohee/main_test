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
const $rightTxt = $slider.find(".right")
const $miniTxt2 = $("#visual").find(".right>p")
let speed = 500;


$slider.children("ul").find("li").last().prependTo($slider.children("ul"));

//main motion
$pic1.animate({ height:"160px", marginTop:0},speed, function(){
    $pic2.animate({ height:"100%", marginTop:0},speed, function(){
        $rightTxt.addClass("on");
        $slider.find(".mainTxt").addClass("on");
    })
})

$pic1.animate({ height:"160px", marginTop:0},speed, function(){
    $pic2.animate({ height:"100%", marginTop:0},speed*2, function(){
        $rightTxt.addClass("on");
    })
})

$next.on("click", function(e){
    e.preventDefault();
    next($slider);
    
});

$prev.on("click", function(e){
    e.preventDefault();
    prev($slider);
});

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
 