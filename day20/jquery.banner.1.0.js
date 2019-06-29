;(function($){
    "use strict";
    $.fn.banner=function(options){
        var {items,list,left,right,autoPlay,delayTime,moveTime,index}=options;
        list=list===false?false:true;
        autoPlay=autoPlay===false?false:true;
        delayTime=delayTime||2000;
        moveTime=moveTime||200;
        index=index||0;
        if(left!=undefined&&left.length>0&&right!=undefined&&right.length>0){
            console.log("有按钮")
        }
        if(list){
            console.log("有list按钮")
            // l1.根据图片的数量生成对应的li
            var str="";
            for(var i=0;i<items.length;i++){
                str+=`<li>${i+1}</li>`;
            }
            this.append($("<ul id='list'>").html(str));
            // console.log($(".list"))
            // l2.设置list的样式
            $("#list").css({
                width:"100%",
                height:30,
                background:"rgba(0,0,0,0.5)",
                position:"absolute",
                left:0,bottom:0,
                margin:0,listStyle:"none",padding:0,
                display:"flex"
            }).children().css({
                flex:1,
                borderLeft:"solid 1px black",
                borderRight:"solid 1px black",
                lineHeight:"30px",
                textAlign:"center"
            }).eq(index).css({
                background:"red"
            })

            function move(derect,iPrev,iNow){
            }
            
            $("#list").children("li").click(function(){
                //计算索引
               if($(this).index()>index){
                // console.log("left",index,$(this).index())
                move("left",index,$(this).index())
               } 
               if($(this).index()<index){
                //    console.log("right",index,$(this).index())
                move("right",index,$(this).index())
               }
               index=$(this).index()
            })




        }
        // console.log("成功")
        //console.log(this)
        
    }
})(jQuery);