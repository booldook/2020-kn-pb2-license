$(".navi-wrap").hover(function(){
	$(this).find(".sub-wrap").stop().slideDown(300);
}, function(){
	$(this).find(".sub-wrap").stop().slideUp(300);
});

var now = 0;
setInterval(function(){
	if(now == 2) now = 0;
	else now++;
	$(".banner").stop().animate({"opacity": 0}, 500);
	$(".banner").eq(now).stop().animate({"opacity": 1}, 500);
}, 3000);