$(".navi").hover(function(){
	$(this).find(".sub").stop().slideDown(300);
}, function(){
	$(this).find(".sub").stop().slideUp(300);
});

var now = 0;
setInterval(function(){
	if(now == 2) now = 0;
	else now++;
	$(".banners").stop().animate({"left": -now*1000+"px"}, 500);
}, 2000);

$(".menu").click(function(){
	var n = $(this).index();
	$(".menu").removeClass("active");
	$(this).addClass("active");
	$(".board").hide();
	$(".board").eq(n).show();
});

$(".notice td").eq(0).click(function(){
	$(".modal-wrap").show();
});

$(".modal-close").click(function(){
	$(".modal-wrap").hide();
});




















