$(".navi").mouseover(function(){
	$(".sub-wrap").stop().slideDown(300);
});
$(".header").mouseleave(function(){
	$(".sub-wrap").stop().slideUp(300);
});