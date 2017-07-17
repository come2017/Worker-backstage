window.onload = function(){	
	window.leftnav = $(".leftNav");
	leftnav.mCustomScrollbar({
		autoHideScrollbar:true,
		scrollSpeed:20,
		scrollInertia:800,
		theme:"leftnav"
	});
	
//	var links = leftnav.find("dd a");
//	links.click(function(){
//		if(window._lastMenuClick != undefined) window._lastMenuClick.removeClass("select");
//		window._lastMenuClick = $(this).addClass("select");
//	});
}
//切换左面菜单
//function menuLeft(lnk, index){
//	if(window.leftMenuBox==undefined) window.leftMenuBox=_body.find("div[menu]");
//	$(lnk).addClass("hover").siblings().removeClass("hover");
//	window.leftMenuBox.filter(":visible").stop().fadeOut(200,'swing',function(){
//		window.leftMenuBox.eq(index).stop().fadeIn(200,'swing',function(){
//			leftnav.mCustomScrollbar("update");
//		});
//	});
//}
//左面菜单二级栏目展开收起
//function secMenu(lnk){
//	var list=$(lnk).next();
//	if(!list.is(":animated")) {
//		if(list.is(":visible")){
//			$(lnk).removeClass("nav_select");
//			if(list.is("dl"))
//			list.slideUp(300,'easeOutQuint',function(){
//				leftnav.mCustomScrollbar("update");
//			});
//		}else {
//			$(lnk).addClass("nav_select");
//			if(list.is("dl"))
//			list.slideDown(300,'easeOutQuint',function(){
//				leftnav.mCustomScrollbar("update");
//			});
//		}
//	}
//}