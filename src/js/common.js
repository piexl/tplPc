/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2017-1-08
*/

//依赖jquery

// 公共js
var Common = function(){
	var common = this;
	common.screenWidth = $(window).width();
	common.screenHeight = $(window).height();
	//初始化
	common.Init = function(){
		//console.log('init');
		common.WindowResize();
		common.WindowScroll();
	}
	//页面窗口变化
	common.WindowResize = function(){
		$(window).resize(function(event){
			common.screenWidth = $(window).width();
			common.screenHeight = $(window).height();
			//console.log('WindowResize',common.screenWidth,common.screenHeight);
		});
	}
	//页面滚动
	common.WindowScroll = function(){
		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			//console.log('scrollTop',scrollTop);
		});
	}
	common.Init();
}
Common();
