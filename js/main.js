const $visual = $(".visual");
const $mainTit = $visual.find("#mainTit")
const $mainTit_len = $mainTit.length;
const $currentIndex = 0;
const $mainVisual = $(".visual2 .mainVisual")
const $next = $(".next");
const $prev = $(".prev");
let tit = 0;

$mainVisual.find("li").last().prependTo($mainVisual);

$next.on("click", function(e){
    e.preventDefault();

    $mainVisual.animate({marginLeft : "-200%"}, 500,function(){
        $mainVisual.css({marginLeft:"-100%"});
        $mainVisual.find("li").first().appendTo(this);
    });

    $mainTit.find("li.on").addClass("upper");
    
    setTimeout(function(){
        $mainTit.find("li").removeClass("on");
        $mainTit.find("li").removeClass("upper");
        if(tit<2){
            $mainTit.find("li").eq(tit + 1).addClass("on");
            tit++;
        }else{
            tit = 0;
            $mainTit.find("li").eq(tit).addClass("on");
        }
    },500)
});

$prev.on("click", function(e){
    e.preventDefault();

    $mainVisual.animate({marginLeft : "0%"}, 500,function(){
        $mainVisual.css({marginLeft:"-100%"});
        $mainVisual.find("li").last().prependTo(this);
    });

    $mainTit.find("li.on").addClass("upper");
    
    setTimeout(function(){
        $mainTit.find("li").removeClass("on");
        $mainTit.find("li").removeClass("upper");
        if(tit>0){
            $mainTit.find("li").eq(tit-1).addClass("on");
            tit--;
            
        }else{
            tit = 2;
            $mainTit.find("li").eq(tit).addClass("on");
        }
        console.log(tit);
    },500)
});