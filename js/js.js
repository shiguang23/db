

$(function(){
	//tab标签切换
	$("#team li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index();
		$("#teamLiat > div").eq(index).show().siblings().hide();
	});
	//我们的真实故事
	$("#img > div").hover(function(){
		$(this).siblings().show();
	},function(){
		$(".stoCen").hide();
	});
	$(".sto").hover(function(){
		$(this).find(".stoC").show();
	},function(){
		$(this).find(".stoC").hide();
	});
	//服务项目
	$(".itemsTit li").hover(function(){
		$(this).addClass("in").siblings().removeClass("in");
		var index = $(this).index();
		$(".itemsCen > div").eq(index).show().siblings().hide();
	});
	
	//返回顶部
	$(".back").hide();
	$(window).scroll(function(){
		if($(window).scrollTop() > 250){
			$(".back").show();
		}else{
			$(".back").hide();
		}
	})
	$(".back").click(function(){
		$("html,body").animate({
			"scrollTop":"0px"
		},2000)
	});
//	$(".teamP").hover(function(){
//		$(this).slideUp(500);
//		$(".showP").slideDown(500);
////	},function(){
////		$(".showH").slideDown(500);
////		$(".showP").slideUp(500);
//	})
	$(".teamP img").hover(function(){
		$(this).animate({
			"top":0,
			opacity:0.7
		},300)
	},function(){
		$(this).stop().animate({
			"top":-200,
			opacity:0.7
		},300)
	});
	
})
