;(function($){
    "use strict";
    
    $.fn.banner=function(opitions){
        var {list,items,left,right,autoplay,delayTime,moveTime}=opitions;
        list=list===false?false:true;
        autoplay=autoplay===false?false:true;
        delayTime=delayTime||2000;
        moveTime=moveTime||200;
        if(left!=undefined&&left.length>0&&right!=undefined&&right.length>0){
            console.log("youanniu")
        }

        if(list){
            
        }
    }
})(jQuery);