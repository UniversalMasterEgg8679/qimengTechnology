function addEventLoad(func){
var oldload=window.onload;
if(typeof window.onload!=='function'){
  window.onload=func;
}
else{
  window.onload=function(){
    oldload();
    func();
  }
}
}//加载函数

     window.onscroll=function(){
     var side=document.getElementById('sidebar');
	   var sidelist=side.getElementsByTagName("li");
 	   var top = document.body.scrollTop || document.documentElement.scrollTop;
	     if(top>500 ){
     	sidelist[0].style.display="block";
     }
     else{
     	sidelist[0].style.display="none"
     }
      	sidelist[0].onclick=function(){
      var oo=document.body.scrollTop=document.documentElement.scrollTop;
      var oo=0;
 	}
	}//滚动条事件

  function boxclick(){
    var movebox=document.getElementById('close-pic');
       
       var omove=document.getElementById('form');
     omove.onmousedown=boxmove;
  }//鼠标按下盒子事件

function boxmove(event){
  event=event||window.event;  
   var omove=document.getElementById('form'),
posx=event.clientX-omove.offsetLeft,
posy=event.clientY-omove.offsetTop;
document.onmousemove=function(event){
event=event||window.event;
mousemove(event,posx,posy);
}
document.onmouseup=function(){
document.onmousemove=null;
document.onmouseup=null;
}
  }
//鼠标拖曳事件
function mousemove(event,posx,posy){
   var omove=document.getElementById('form'),
event=event||window.event;
var l=event.clientX-posx,
    t=event.clientY-posy;
var winH=document.documentElement.clientHeight||document.body.clientHeight,
    winW=document.documentElement.clientWidht||document.body.clientWidth,
    maxW=winW-omove.offsetWidth,
    maxH=winH-omove.offsetHeight;
    if(l>maxW){
      l=maxW
    }
    else if(0>l){
      l=0
    }
    if(0>t){
      t=0
    }
    else if(t>maxH){
      t=maxH
    } 
    omove.style.top=t+"px";
    omove.style.left=l+"px"; 
}
	function events(){
		 var side=document.getElementById('sidebar');
	   var sidelist=side.getElementsByTagName("li");
   
     for(var i=0; i<sidelist.length;i++){
      sidelist[i].onmouseover=function(){
      var that=this;
      var movenav=that.getElementsByTagName("span")
      amition(movenav[0],{right:170})
      }
      sidelist[i].onmouseout=function(){
      var that=this;
      var movenav=that.getElementsByTagName("span")
      amition(movenav[0],{right:0})
            }  
             }
                 var opacity=document.getElementById('opacity');
  var form=document.getElementById('form');
  var concat=document.getElementById('concat-us');
  var close=form.getElementsByTagName('span');
 
  concat.onclick=function(){

    form.style.display='block';
    opacity.style.display='block';
  }
     close[0].onclick=function(){
      form.style.display='none';
    opacity.style.display='none';
     } 
    } // 边栏工具事件

function fixed(){

  var middle= document.getElementById('middle-title');
  var lilist=middle.getElementsByTagName("li");
  for(var i=0; i<lilist.length;i++){
    lilist[i].onclick=function(){
        for(var i=0; i<lilist.length;i++){
         if(lilist[i]==this){
          lilist[i].className='active'
         }
         else{
          lilist[i].className=''
         }
        }
      }
        }
}//middle点击添加class
     function amition(obj,json,fn){
       clearInterval(obj.timer);
       var flag=true;
       obj.timer=setInterval( function(){
       for(var attr in json){
       	var objw=0; 
        if(attr=="opacity"){
        var obja=Math.round(parseFloat(getstyle(obj,attr))*100);
        }
        else{
          var obja=parseInt(getstyle(obj,attr));
        }
        var speed=(json[attr]-obja)/10;
        var speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
        if(obja!==json[attr]){
        	flag=false;
        	obja+=speed;
        	if(attr=="opacity"){
        	obj.style[attr]=obja/100;
        	}
        	else{
        		obj.style[attr]=obja+"px";
        	}
        }
    if(flag){

 clearInterval(obj.timer);
 if(fn){
 	fn();
 }
    }
       	}
       },5)
    }//被调用的动画函数
    
    function getstyle(obj,attr){
       if(obj.currentStyle){
       	return obj.currentStyle[attr]
       }
       else{
       	return getComputedStyle(obj,true)[attr]
       }    
    }//获取属性事件

    addEventLoad(events);
    addEventLoad(fixed);
    addEventLoad(boxclick);