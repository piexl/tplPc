/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2016-12-09
*/

//依赖jquery

var GooleMap = function(){

	var gooleMap = this;
	var map;
	blueIcon = new GIcon(),
	blueIcon.image = "http://img.hellola.cn/images/losangeles/mapmarker.png",
	markerOptions = { icon:blueIcon };
		
	gooleMap.CreatMapMark = function (mapId,mapData,mapZoom){
		var coordinateData = mapData;
		map = new GMap2(document.getElementById(mapId));
		map.setCenter(new GLatLng(mapData[0].sw, mapData[0].ne), mapZoom);
		for (var i in coordinateData) {
			var itemData = coordinateData[i];
			var point = new GLatLng(itemData.sw, itemData.ne);
			gooleMap.AddMarker(point,itemData.markerId);
		}
	}
	gooleMap.AddMarker =  function(point,markerId){
		var marker = new GMarker(point, markerOptions);
		map.addOverlay(marker);
	}

}

