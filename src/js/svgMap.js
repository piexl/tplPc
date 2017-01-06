/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2016-11-16
*/



//依赖jquery&snap.svg

var SvgMap = function($mapID,svgSrc,viewX,viewY,svgWidth,svgHeight){
	var $mapID = $mapID, //svgid in html
		svgSrc = svgSrc, //svg src
		svgWidth = svgWidth, //svg width
		svgHeight = svgHeight; //svg height
	var svgmap = this;
	svgmap.map = Snap($mapID[0]);
	svgmap.map.attr({
	  viewBox: [viewX,viewY, svgWidth, svgHeight]
	});
	svgmap.init = function(f){
	  	var g = f.selectAll("g");
	  	svgmap.map.append(g);
	}
	svgmap.onload = function(f){
		svgmap.init(f);
		svgmap.styleReset();
	}
	Snap.load(svgSrc, function (f) {
		svgmap.onload(f);
		svgmap.gHover();
	});
	svgmap.styleSet = function(svgId){
		svgmap.styleReset();
		// console.log('svgId',svgId);
		var allPath = svgmap.map.select('#'+svgId).selectAll('path');
		var allPolygon = svgmap.map.select('#'+svgId).selectAll('polygon');
		var allText = svgmap.map.select('#'+svgId).selectAll('text');
		if(allPath.length>0){
		    svgmap.map.select('#'+svgId).selectAll('path').animate({
		    	fill: "#d82316"
		    },300);
		}
		if(allPolygon.length>0){
		    svgmap.map.select('#'+svgId).selectAll('polygon').animate({
		    	fill: "#d82316"
		    },300);
		}
		if(allText.length>0){
		    svgmap.map.select('#'+svgId).selectAll('text').animate({
		    	fill: "#fff"
		    },300);
		}
	}
	svgmap.styleReset = function(){
		var allPath = svgmap.map.selectAll('path');
		var allPolygon = svgmap.map.selectAll('polygon');
	    svgmap.map.selectAll('path').animate({
	    	fill: "#fff",
		    stroke: "#000",
		    strokeWidth: 1
	    },300);
	    svgmap.map.selectAll('text').animate({
	    	fill: "#000"
	    },300);
	    svgmap.map.selectAll('polygon').animate({
	    	fill: "#fff",
		    stroke: "#000",
		    strokeWidth: 1
	    },300);
	}
	svgmap.gHover = function(){
		var allG = svgmap.map.selectAll("g");
		for(i in allG){
			if(i<allG){
				//console.log(allG[i].node.id);
				var svgId = allG[i].node.id;
				svgmap.map.select("#"+svgId).hover(function(e){
					console.log(this.node.id);
					svgmap.styleSet(this.node.id);
					svgmap.OpenMapMark(this.node.id);
				});
			}
		}
	}
	//打开标记
	svgmap.OpenMapMark = function(svgId){
		var mark = $('.mapArea-inner .list-item[data-id="'+svgId+'"]');
		mark.show().siblings('.list-item').hide();
	}
	//关闭标记
	svgmap.CloseMapMark = function(){
		var mark = $('.mapArea-inner .list-item');
		mark.hide();
		svgmap.styleReset();
	}
}
