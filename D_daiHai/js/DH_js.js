$(function() {
	
	//消息点击切换事件
	
	$('#Mes').click(function(){
		$('.messagein').css({'display':'block'});
	})
	
	$('.messagein a,.messagein li').click(function(){
		$('.messagein').delay(500).hide(0);
	})
	
	//导航
		//一级点击事件 
	$(".navFirst dd a[secMenuId]").click(function(){
		var _this = $(this);
		var parentLi = _this.closest("dd");
		var secMenuObj = $("#"+_this.attr("secMenuId"));
		
		
			//导航点击显示、隐藏切换
		if($(parentLi).hasClass("current")){
			$(parentLi).removeClass("current");
			secMenuObj.siblings().hide();
			secMenuObj.hide();
			return false;
		}
		
			//二级导航显示样式
		var windowHeight = $(".JN_main").height(); //获取一级导航的高度
		var top = parentLi.offset().top-$(".JN_leftNav").scrollTop(); //获取一级导航dd距离窗口的高度
		var y = top-parentLi.outerHeight(); // 获取dd上边框距离窗口顶部高度
		
		$(parentLi).addClass('current').siblings().removeClass('current'); //一级导航选中样式
		
				//计算二级导航的显示位置
		if(y+secMenuObj.height()>windowHeight){
			if(secMenuObj.height()>windowHeight){
				y = 0;
				secMenuObj.height(windowHeight);
			}else if(top-secMenuObj.height()<0){
				y = 0;
			}else{
				y = top - secMenuObj.height();
			}
		}
		y=y<=0?0:y+25;
		
		var x = _this.width() + 'px';
		secMenuObj.siblings().hide();
		secMenuObj.closest("div").css({"left":x,'top':y});
		secMenuObj.show();
		

				//二级导航滚动条美化
		secMenuObj.mCustomScrollbar({
			autoHideScrollbar:true,
			scrollSpeed:20,
			scrollInertia:800,
			theme:"leftNav"
		});
	});
	
		//二级点击事件 
	$(".navSecond li a[trdMenuId]").click(function(){
		var _this = $(this);
		var parentLi = _this.closest("li");
		var trdMenuObj = $("#"+_this.attr("trdMenuId"));
		
			//导航点击显示、隐藏切换
		if($(parentLi).hasClass("current")){
			$(parentLi).removeClass("current");
			trdMenuObj.siblings().hide();
			trdMenuObj.hide();
			return false;
		}
		
			//三级导航显示样式
		var windowHeight = $(".JN_main").height(); //获取一级导航的高度
		var top = parentLi.offset().top-$(".JN_leftNav").scrollTop(); //获取二级li距离窗口的高度
		var y = top-parentLi.outerHeight(); // 获取li上边框距离窗口顶部高度
		
//					$(parentLi).addClass('current').siblings().removeClass('current'); //一级导航选中样式
		
				//计算三级导航的显示位置
		if(y+trdMenuObj.height()>windowHeight){
			if(trdMenuObj.height()>windowHeight){
				y = 0;
				trdMenuObj.height(windowHeight);
			}else if(top-trdMenuObj.height()<0){
				y = 0;
			}else{
				y = top - trdMenuObj.height();
			}
		}
		y=y<=0?0:y-21;
		
		//获取一级导航的宽度
		var x = $('.JN_leftNav').width()+270+ 'px';
		
		trdMenuObj.siblings().hide();
		trdMenuObj.closest("div").css({"left":x ,'top':y});
		trdMenuObj.show();
		
		
				//三级导航滚动条美化
		trdMenuObj.mCustomScrollbar({
			autoHideScrollbar:true,
			scrollSpeed:20,
			scrollInertia:800,
			theme:"leftNav"
		});
		

	});
	
		//三级导航选中样式
	$('.navThird li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
	
		//二级导航选中样式
	$('.navSecond li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
	
		//点击一级，三级消失
	$('.navFirst').click(function(){
		$('.navThird').hide();
		$('.navSecond li,.navThird li').removeClass('current');
	});
		
		//鼠标离开事件		[---------如果需要 鼠标离开导航区，二级导航消失，将下面代码注释去掉即可--------]
	$('.iframeCon').mouseover(function(){
		$('.navSecond,.navThird').hide();
		$('.navSecond li,.navThird li').removeClass('current');
		$('.navFirst dd').removeClass('current');
	})

});
