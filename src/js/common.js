/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2016-12-09
*/

//依赖jquery

// 公共js
var Common = function(){
	var common = this;
	var menu  = $('#menu');
	var header  = $('header');
	//打开菜单
	common.OpenMenu = function(){
		header.addClass('cover-header');
		menu.addClass('slideInDown');
		menu.removeClass('menu-hide slideOutUp');
	}
	//关闭菜单
	common.CloseMenu = function(){
		menu.addClass('slideOutUp');
		menu.removeClass('slideInDown');
		header.removeClass('cover-header');
	}
	//搜索框获取焦点
	common.OpenSearchInputFocus = function(){
		$("#search-focus-box").show();
	}
	//搜索框获取焦点
	common.CloseSearchInputFocus = function(){
		$("#search-focus-box").hide();
	}
	//打开手机搜索
	common.OpenMobileSearch = function(){
		$("#mobileSearch").addClass('fadeIn').removeClass('mobile-search-hide');
	}
	//关闭手机搜索
	common.CloseMobileSearch = function(){
		$("#mobileSearch").addClass('mobile-search-hide');
	}
}

$(function(){
	//公共实例化
	var NewCommon = new Common();

	//打开菜单
	$("#openMenuBtn").click(function(event){
		NewCommon.OpenMenu();
	});
	//关闭菜单
	$("#closeMenuBtn").click(function(event){
		NewCommon.CloseMenu();
	});
	//打开搜索
	$("#searchInput").focus(function(){
		NewCommon.OpenSearchInputFocus();
	});
	//关闭搜索内容
	$("#closeSearchBtn").click(function(event) {
		NewCommon.CloseSearchInputFocus();
	});
	//打开手机搜索
	$("#openMobileSearch").click(function(){
		NewCommon.OpenMobileSearch();
	});
	//关闭手机搜索内容
	$("#CloseMobileSearch").click(function(event) {
		NewCommon.CloseMobileSearch();
	});

});
