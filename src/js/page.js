/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2016-12-09
*/

//依赖jquery&TWEEN.js&snap.svg

var Page  = function(pageName){
	var page = this;
	page.scrollStatue = false;
	page.alpha = { alpha : 0 };
	page.alphaChageFisrt = 0.6;
	page.screenHeight = $(window).height();
	page.screenWidth = $(window).width();
	page.screenHeightChage = page.screenHeight;
	page.swiper;
	page.swiper2;
	//目的地热门目的地幻灯片的设置
	page.swiperHotSlidesPerView = 5;//默认显示数
	page.swiperHotInitialSlide = 2;//默认初始化显示数
	page.swiperCreat = false;
	page.pageName = pageName;
	//手机屏幕判断
	page.isMobile = function(screenWidth){
		return screenWidth<=768 ? true : false;
	}
	//初始化
 	page.Init = function(){
 		console.log(page.pageName);
 		page.SwiperInit();
 		if(page.pageName=='destination-detail'){

 		}
 	}
 	//幻灯片初始化
 	page.SwiperInit = function(){
 		//关于我们页面
 		if(page.pageName=='page-about' && page.isMobile(page.screenWidth) && !page.swiperCreat){
			page.swiper = new Swiper ('.swiper-container', {
				loop:true,
			    nextButton: '.swiper-next',
			    prevButton: '.swiper-prev',
		 	});
		 	page.swiperDestroy = false;
		 	page.swiperCreat = true;
 		}
 		//行程详情页
 		if(page.pageName=='page-route-detail' && !page.isMobile(page.screenWidth) && !page.swiperCreat){
			page.swiper = new Swiper ('.swiper-container', {
			    nextButton: '.swiper-next',
			    prevButton: '.swiper-prev',
			    onInit:function(){
			    	$(".detail-swiper-nav-inner .item-time").click(function(){
			    		var index = $(this).index();
			    		console.log('text',index);
			    		$(this).addClass('active').siblings('.active').removeClass('active');
			    		page.swiper.slideTo(index, 500, false);
			    	});
			    },
			    onSlideChangeStart: function(swiper){
				    console.log(swiper.activeIndex);
				    $(".detail-swiper-nav-inner .item-time").removeClass('active').eq(swiper.activeIndex).addClass('active');
				}
		 	});
		 	page.swiperDestroy = false;
		 	page.swiperCreat = true;
 		}
 		//目的地详情页
 		if(page.pageName=='destination-detail'){
 			if(page.screenWidth < 1024){
				page.swiperHotSlidesPerView = 3;//默认显示数
				page.swiperHotInitialSlide = 1;//默认初始化显示数
 			}else{
				page.swiperHotSlidesPerView = 5;//默认显示数
				page.swiperHotInitialSlide = 2;//默认初始化显示数
 			}
 			//console.log(page.swiperHotSlidesPerView,page.swiperHotInitialSlide);
			page.swiper = new Swiper ('.hot-swiper', {
			    nextButton: '.hot-swiper-box .swiper-next',
			    prevButton: '.hot-swiper-box .swiper-prev',
			    slidesPerView: page.swiperHotSlidesPerView,
			    initialSlide : page.swiperHotInitialSlide,
		       	centeredSlides: true,
		        paginationClickable: true,
		 	});
			page.swiper2 = new Swiper ('.spot-swiper', {
			    nextButton: '.spot-swiper .swiper-next',
			    prevButton: '.spot-swiper .swiper-prev',
			    pagination: '.spot-swiper .swiper-pagination',
			    paginationClickable :true,
		 	});
 		}
		//玩转西班牙
 		if(page.pageName=='page-play' && page.isMobile(page.screenWidth) && !page.swiperCreat){
			page.swiper = new Swiper ('.experience-swiper', {
			    slidesPerView: 3,
			    initialSlide : 1,
		       	centeredSlides: true,
		        paginationClickable: true,
		        pagination: '.experience-swiper .swiper-pagination',
		 	});
		 	page.swiperDestroy = false;
		 	page.swiperCreat = true;
 		}
 		//详情页面
 		if(page.pageName=='page-detail'){
			page.swiper2 = new Swiper ('.spot-swiper', {
			    nextButton: '.spot-swiper .swiper-next',
			    prevButton: '.spot-swiper .swiper-prev',
			    pagination: '.spot-swiper .swiper-pagination',
			    paginationClickable :true,
		 	});
 		}


 	}
 	//销毁幻灯片
 	page.SwiperDestroy = function(){
 		page.swiper.destroy(true,true);
 		page.swiperCreat = false;
 		console.log('swiperCreat',page.swiperCreat);
 	}
 	//屏幕变化
 	page.WindowResize = function(){
 		//关于我们手机版创建Swiper，pc端销毁Swiper
 		if(page.pageName=='page-about'){
			if(page.isMobile(page.screenWidth)){
				page.SwiperInit();
			}else{
				if(page.swiperCreat){page.SwiperDestroy();}
			}
 		}
 		//行程详情页手机版销毁Swiper，pc端创建Swiper
 		if(page.pageName=='page-route-detail'){
			if(!page.isMobile(page.screenWidth)){
				page.SwiperInit();
			}else{
				if(page.swiperCreat){page.SwiperDestroy();}
			}
 		}
 		//目的地创建Swiper
 		if(page.pageName=='destination-detail'){
 			page.SwiperInit();
 		}
  		//玩转创建Swiper，pc端销毁Swiper
 		if(page.pageName=='page-play'){
			if(page.isMobile(page.screenWidth)){
				page.SwiperInit();
			}else{
				if(page.swiperCreat){page.SwiperDestroy();}
			}
 		}
 	}
 	//页面滚动
	page.PageScroll = function(scrollVue){
		if(!page.scrollStatue){
			page.PageBgChage(page.alpha,page.alphaChageFisrt,500);
			page.scrollStatue = true;
			page.alpha = { alpha : page.alphaChageFisrt };
		}else{
			if(scrollVue==0){
				page.alpha = { alpha : page.alphaChageFisrt };
				page.PageBgChage(page.alpha,0,500);
				page.scrollStatue = false;
			}else{
				var chageAlpha = scrollVue/page.screenHeightChage+page.alphaChageFisrt;
				if(chageAlpha<0.92){page.PageBgChage(page.alpha,chageAlpha,500);}
			}
		}
	}
	//页面背景变化
	page.PageBgChage = function(startAlpha,endAlpha,chageTime){
		var tween = new TWEEN.Tween(startAlpha)
		    .to({alpha : endAlpha}, chageTime)
		    .onUpdate(function() {
		        $('.page-inner').css('background-color','rgba(10, 19, 38, '+this.alpha+')');
		    })
		    .start();
		requestAnimationFrame(page.Animate);
	}
	//TWEEN动画
	page.Animate = function(time){
	    requestAnimationFrame(page.Animate);
	    TWEEN.update(time);
	}
	//滚动到下一屏
	page.GoToNextScreen = function(){
		$('.page-inner').animate({scrollTop: page.screenHeight}, 500);
	}
}

//页面内容的滚动监听
$('.page-inner').on('scroll',function(){
	var scrollTop = $(this).scrollTop();
	NewPage.PageScroll(scrollTop);
});

//下一屏按钮的点击
$("#goNextScreen").on('click',function(){
	NewPage.GoToNextScreen();
})

//屏幕尺寸发生变化
$(window).resize(function(){
	NewPage.screenWidth = $(window).width();
	NewPage.WindowResize();
});
