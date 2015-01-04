
var s=document.getElementById("controlSlide");

function byId(id){
	return document.getElementById('id');

var navs=byId("controlSlide").getElementByTagName("li");

for (var i=0;i<navs.length;i++)
{
	var nav_item=navs[i];
	nav_item.onclick=function(){
		for(var m=0;m<navs.length;m++)
		{
			if(this.innerText==navs[m].innerText)
			{
				index=m;
				break;
			}
		}
		var images=byId("controlSlide").getElementByTagName("li");
		for(var j=0;j<navs.length;j++)
		{
			images[j].style.display="none";

		}
		images[2].style.display="";
	};

}
var myPic=new Array("img/v1.gif","img/v2.gif");
var thisPic=0;
function initLinks(){
	document.getElementById("prevSlide").onclick=processPrevious;
	document.getElementById("nextSlide").onclick=processNext;
}
function processPrevious(){
	if (thisPic=0){
		thisPic=myPic.length;
	}
	thisPic--;
	document.getElementById("myPicture").src=myPix[thisPic];
	return false;
}

function processNext(){
	thisPic++;
	if (thisPic=myPic.length){
		thisPic=0;
	}
	document.getElementById("myPicture").src=myPix[thisPic];
	return false;
}

var album_list,imgs_cache;
var album_list=["img/zx.jpg",""];
function auto_play(){
	var i;
	i=$("tabSlide").img.index;
	do{
		i=++i%imgs_cache.length;
	}while(imgs_cache[i].err);
	$("").img.loadCache(imgs_cache[i]);
	setTimeout(auto_play,2000);
}

window.onload=byId;