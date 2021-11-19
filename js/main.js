//main slider
const $visual = $(".visual");
const $mainTit = $visual.find("#mainTit")
const $mainVisual = $(".visual2 .mainVisual");
const $mainVisual_top = $(".visual2 .top");
const $mainVisual_bottom = $(".visual2 .bottom");
const $smallVisual = $visual.find(".smallVisual");
const $next = $(".next");
const $prev = $(".prev");
const len = $mainVisual.length;
let num = 0;
console.log(num);
let speed = 500;


$next.on("click", function(e){
    e.preventDefault();
    num++;
    console.log(num);

    //mainvisual
    //첫번째 사진 upper로 사라지게 만듦
    $mainVisual_bottom.find("li.on").addClass("upper");
    setTimeout(function(){
        $mainVisual_top.find("li.on").addClass("upper");
    },speed)

    if(num<len){
        setTimeout(function(){
            $mainVisual_top.find("li").eq(num).addClass("on");
        },speed*2)
        setTimeout(function(){
            $mainVisual_bottom.find("li").eq(num).addClass("on");
            $mainVisual_bottom.find("li").eq(num-1).removeClass("on");
            $mainVisual_top.find("li").eq(num-1).removeClass("on");
        },speed*2.5)
    }else{
        num=2;
        setTimeout(function(){
            $mainVisual_top.find("li").eq(2).addClass("on");
            $mainVisual_bottom.find("li").eq(num-1).removeClass("on");
            $mainVisual_top.find("li").eq(num-1).removeClass("on");
        },speed*2.5)
        setTimeout(function(){
            $mainVisual_bottom.find("li").eq(2).addClass("on");
            $mainVisual
        },speed*3)
    }
        
    
    
    
    $mainTit.find("li.on").addClass("upper");
    $smallVisual.find("li.on").addClass("upper");


    setTimeout(function(){
        $mainTit.find("li").removeClass("on");
        $mainTit.find("li").removeClass("upper");
        $smallVisual.find("li").removeClass("on");
        $smallVisual.find("li").removeClass("upper");

        if(num<len){
            $mainTit.find("li").eq(num).addClass("on");
            $smallVisual.find("li").eq(num).addClass("on");
            console.log(num);
        }else{
            num = 2;
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

