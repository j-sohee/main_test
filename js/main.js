//main slider
const $visual = $(".visual");
const $mainTit = $visual.find("#mainTit")
const $mainVisual = $(".visual2 .mainVisual");
const $mainVisual_top = $(".visual2 .top");
const $mainVisual_bottom = $(".visual2 .bottom");
const $smallVisual = $visual.find(".smallVisual");
const $next = $(".next");
const $prev = $(".prev");
let num = 0;
let speed = 500;




$next.on("click", function(e){
    e.preventDefault();

    
    //next_slider($mainVisual);

    $mainTit.find("li.on").addClass("upper");
    $smallVisual.find("li.on").addClass("upper");

    $mainVisual_bottom.find("li.on").addClass("upper");
    setTimeout(function(){
        $mainVisual_top.find("li.on").addClass("upper");
    },speed)
    if(num<2){
        setTimeout(function(){
            $mainVisual_top.find("li").eq(num).addClass("on");
        },speed*2.5)
        setTimeout(function(){
            $mainVisual_bottom.find("li").eq(num).addClass("on");
        },speed*3)
        num++;
        console.log(num);
    }else{
        num=0;
    }
    
    
    setTimeout(function(){
        $mainTit.find("li").removeClass("on");
        $mainTit.find("li").removeClass("upper");
        $smallVisual.find("li").removeClass("on");
        $smallVisual.find("li").removeClass("upper");
        if(num<2){
            $mainTit.find("li").eq(num + 1).addClass("on");
            $smallVisual.find("li").eq(num + 1).addClass("on");
            num++;

        }else{
            num = 0;
            $mainTit.find("li").eq(num).addClass("on");
            $smallVisual.find("li").eq(num).addClass("on");
        }
    },speed)
});

$prev.on("click", function(e){
    e.preventDefault();

    prev_slider($mainVisual);

    $mainTit.find("li.on").addClass("upper");
    
    setTimeout(function(){
        $mainTit.find("li").removeClass("on");
        $mainTit.find("li").removeClass("upper");
        if(num>0){
            $mainTit.find("li").eq(num-1).addClass("on");
            num--;
        }else{
            num = 2;
            $mainTit.find("li").eq(num).addClass("on");
        }
    },500)
});

function prev_slider(el){
    el.animate({marginLeft : "0%"}, speed,function(){
        el.css({marginLeft:"-100%"});
        el.find("li").last().prependTo(this);
    });
}
function next_slider(el){
    el.animate({marginLeft : "-200%"},speed,function(){
        el.css({marginLeft:"-100%"});
        el.find("li").first().appendTo(this);
    });
}