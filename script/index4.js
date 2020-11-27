$(".navi").hover(function(){
	$(".sub-wrap").stop().slideUp(300);
	$(this).find(".sub-wrap").stop().slideDown(300);
}, function(){
	$(".sub-wrap").stop().slideUp(300);
});
