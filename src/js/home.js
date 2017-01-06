/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2016-12-17
*/

//依赖jquery&TWEEN.js

var Home = function(){
	var home = this;
	home.screenHeight = $(window).height();
	home.screenWidth = $(window).width();
	home.swiperCreat = false;
	home.swiperWechat;
	//手机屏幕判断
	home.isMobile = function(screenWidth){
		return screenWidth<=768 ? true : false;
	}
	home.mainSwiper = new Swiper ('#main-swiper', {
		// effect : 'fade',
		direction : 'horizontal',
		initialSlide :0,
		paginationClickable: true,
	    // loop: true,
	    pagination: '.main-slide-pagination',
	    nextButton: '.main-slide-next-btn',
	    prevButton: '.main-slide-prev-btn'
  	});
	home.experienceSwiper = new Swiper ('#main-swiper .experience-slide', {
		effect : 'fade',
		direction : 'vertical',
		//paginationClickable: true,
	    // loop: true,
		onInit: function(swiper){
			var sideNav = $("#main-swiper .experience-slide .experience-slide-nav");
			sideNav.find('li').click(function(){
				var index = $(this).index();
				$(this).addClass('cur').siblings('li').removeClass('cur');
				home.experienceSwiper.slideTo(index, 500, false);
			});
		},
		onSlideChangeStart:function(swiper){
			var sideNav = $("#main-swiper .experience-slide .experience-slide-nav");
			sideNav.find('li').eq(swiper.activeIndex).addClass('cur').siblings('li').removeClass('cur');
		}
  	});
	home.spotSwiper = new Swiper ('#main-swiper .spot-slide', {
		effect : 'fade',
		direction : 'vertical',
		//paginationClickable: true,
	    // loop: true,
		onInit: function(swiper){
			var sideNav = $("#main-swiper .spot-slide .experience-slide-nav");
			sideNav.find('li').click(function(){
				var index = $(this).index();
				$(this).addClass('cur').siblings('li').removeClass('cur');
				home.spotSwiper.slideTo(index, 500, false);
			});
		},
		onSlideChangeStart:function(swiper){
			var sideNav = $("#main-swiper .spot-slide .experience-slide-nav");
			sideNav.find('li').eq(swiper.activeIndex).addClass('cur').siblings('li').removeClass('cur');
		}
  	});
	home.destinationSwiper = new Swiper ('#main-swiper .destination-slide', {
		effect : 'fade',
		direction : 'vertical',
		//paginationClickable: true,
	    // loop: true,
		onInit: function(swiper){
			var sideNav = $("#main-swiper .destination-slide .experience-slide-nav");
			sideNav.find('li').click(function(){
				var index = $(this).index();
				$(this).addClass('cur').siblings('li').removeClass('cur');
				home.destinationSwiper.slideTo(index, 500, false);
			});
		},
		onSlideChangeStart:function(swiper){
			var sideNav = $("#main-swiper .destination-slide .experience-slide-nav");
			sideNav.find('li').eq(swiper.activeIndex).addClass('cur').siblings('li').removeClass('cur');
		}
  	});
	home.specialSwiper = new Swiper ('#main-swiper .special-slide', {
		effect : 'fade',
		direction : 'vertical',
		paginationClickable: true,
	    // loop: true,
	    pagination: '.main-slide-special',
  	});
 	home.SwiperInit = function(){
 		if(home.isMobile(home.screenWidth) && !home.swiperCreat){
			home.swiperWechat = new Swiper ('#main-swiper .slide-wechat', {
				direction : 'vertical',
			    nextButton: '.main-slide-wechat .wechat-slide-next-btn',
		 	});
		 	home.swiperDestroy = false;
		 	home.swiperCreat = true;
 		}
 	}
 	//销毁幻灯片
 	home.SwiperDestroy = function(){
 		home.swiperWechat.destroy(true,true);
 		home.swiperCreat = false;
 		console.log('swiperCreat',home.swiperCreat);
 	}
 	home.WindowResize = function(){
		if(home.isMobile(home.screenWidth)){
			home.SwiperInit();
		}else{
			if(home.swiperCreat){home.SwiperDestroy();}
		}
 	}
	home.Init = function(){
		home.SwiperInit();
	}

}

var NewHome = new Home();
NewHome.Init();

//屏幕尺寸发生变化
$(window).resize(function(){
	NewHome.screenWidth = $(window).width();
	NewHome.WindowResize();
});


