//alert("person.js show page");

/**
 * ebest
 *
 * @type {{}}
 */
var Person={};

$(function () {

	 $("#role1-form").bind("submit", function(){  
		 
		    var user_code = $.trim($("#user_code").val());
		    alert(user_code);
	        if(user_code.length == 0)  
	        {  
	        	alert("用户不能为空!");
	            isSuccess = 0;  
	        }  
	        if(isSuccess == 0)  
	        {  
	            return false;  
	        }  
	 });
	
    $("#get_checkbox_users").click(function () {

    	toUrl();
    });
    
    $("#get_checkbox_users_button").click(function(){
    	
    	toUrl();
    });
    
    $("#close_checkbox_users").click(function(){
    	
        var number = '';
        $('input:checkbox[name=user_code]:checked').each(function(k){
            if(k == 0){
                number = $(this).val();
            }else{
                number += ','+$(this).val();
            }
        })
    	$("#user_code").val(number);
        alert(number);
        alert($("#user_code").val());
    	//$("#model_div").modal('hide');
    });
});


function toUrl(){
	
    var number = '';
    $('input:checkbox[name=checkbox_user]:checked').each(function(k){
        if(k == 0){
            number = $(this).val();
        }else{
            number += ','+$(this).val();
        }
    })

    var region_val =$("#region_val").val();
    var days_val =$("#days_val").val();
    $("#user_code").val(number);

    var path_="/system/person/personIndex?user_code="+number+"&region_val="+region_val+"&days_val="+days_val;
    alert("href: "+path_);
    window.location.href = path_;
}

Person.change = function(){



   // $('#myModal').modal()                      // 以默认值初始化
    //$('#myModal').modal({ keyboard: false })   // initialized with no keyboard
   // $('#myModal').modal('show')

    /**
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // 触发事件的按钮
        var recipient = button.data('whatever') // 解析出data-whatever内容
        var modal = $(this)
        modal.find('.modal-title').text('Message To ' + recipient)
        modal.find('.modal-body input').val(recipient)
    })
    **/
}


//difine map center and zoom
Person.setCenterZoom = function() {

    map.setCenter([121.46980797294428,31.224582803237602]);
    map.setZoom(12);
    map.setFitView();
}

//line distance
Person.lineDistance = function(routline_arr) {

    /**
     *  [[121.46980797294428, 31.224582803237602],
        [121.48324572416972, 31.238221750946757],
        [121.48329150361512, 31.238958826715166],
        [121.480471, 31.240649]]
     */

    for(var j=0; j< (routline_arr.length-1); j++){

        lineDistanceByLoction(routline_arr[j][0], routline_arr[j][1], routline_arr[j+1][0], routline_arr[j+1][1]);
    }
}

function lineDistanceByLoction(x1, y1, x2, y2){

    //alert(x1 +"," +y1);

    var lnglat1 = new AMap.LngLat(x1, y1);
    var lnglat2 =  new AMap.LngLat(x2, y2);

    new AMap.Text({
        text:'两点相距'+Math.round(lnglat1.distance(lnglat2))+'米',
        position:lnglat1.divideBy(2).add(lnglat2.divideBy(2)),
        map:map,
        style:{'background-color':'#ccccff',
            'border-color':'green',
            'font-size':'12px'}
    })
}

//driving line
Person.drivingDistance = function(){

    drivingDistanceLocation();
}

function drivingDistanceLocation3() {

    //驾车导航，您如果想修改结果展现效果，请参考页面：https://lbs.amap.com/fn/css-style/
    var drivingOption = {
        policy:AMap.DrivingPolicy.LEAST_TIME
    };
    var driving = new AMap.Driving(drivingOption); //构造驾车导航类
    //根据起终点坐标规划驾车路线
    driving.search([{keyword:'人民广场'},{keyword:'世界贸易大厦'}], function(status, result){
        if(status === 'complete' && result.info === 'OK'){
            (new Lib.AMap.DrivingRender()).autoRender({
                data: result,
                map: map,
                // panel: "panel"
            });

          //  alert("get info:" +result.routes[0].distance);
        }else{
          //  alert(result);
        }
    });
}

function drivingDistanceLocation(){


    AMap.plugin(["AMap.Driving"], function() {
        var drivingOption = {
            policy:AMap.DrivingPolicy.LEAST_TIME
            //map:map
        };
        var driving = new AMap.Driving(drivingOption); //构造驾车导航类
        //根据起终点坐标规划驾车路线
        driving.search([{keyword:'人民广场',city:'021'},{keyword:'世界贸易大厦',city:'021'}],function(status,result){

            if(status === 'complete' && result.info === 'OK') {
                (new Lib.AMap.DrivingRender()).autoRender({
                    data: result,
                    map: map,
                    panel: "panel"
                });
            }
            /**
            button.onclick = function(){
                driving.searchOnAMAP({
                    origin:result.origin,
                    destination:result.destination
                });
            }
            **/

          //  alert("get location: "+ result.routes[0].distance);
        });

    });
}

Person.walkDistance = function(){

    walkDistanceLocation();
}

function walkDistanceLocation(){


}

//line driving
Person.lineDriving = function() {

    /**
     AMap.plugin(["AMap.Driving"], function() {
        var drivingOption = {
            policy:AMap.DrivingPolicy.LEAST_TIME,
            map:map
        };
        var driving = new AMap.Driving(drivingOption); //构造驾车导航类
        //根据起终点坐标规划驾车路线
        driving.search([{keyword:'人民广场',city:'021'},{keyword:'世界贸易大厦',city:'021'}],function(status,result){
            button.onclick = function(){
                driving.searchOnAMAP({
                    origin:result.origin,
                    destination:result.destination
                });
            }
        });

    });
     map.addControl(new AMap.ToolBar());
     **/
}

//line converage
Person.lineConverage = function() {

    /**
     var pathParam = [
     {"x":116.478928,"y":39.919761,"sp":19,"ag":0, "tm":1478031031},
     {"x":116.478907,"y":39.998522,"sp":10,"ag":0, "tm":2},
     {"x":116.479384,"y":39.998546,"sp":10,"ag":110,"tm":3},
     {"x":116.481053,"y":39.998204,"sp":10,"ag":120,"tm":4},
     {"x":116.481793,"y":39.997868,"sp":10,"ag":120,"tm":5},
     {"x":116.482898,"y":39.998217,"sp":10,"ag":30, "tm":6},
     {"x":116.483789,"y":39.999063,"sp":10,"ag":30, "tm":7},
     {"x":116.484674,"y":39.999844,"sp":10,"ag":30, "tm":8}]
     **/

    /**
     var pathParam = [
     {"x":121.48001002772278,"y":31.234565987871203,"sp":19,"ag":0, "tm":1478031031},
     {"x":121.48463481440355,"y":31.235350275176362,"sp":10,"ag":0, "tm":2},
     {"x":121.48874344372135,"y":31.233986116377356,"sp":10,"ag":110,"tm":3}]

     var path1 = [];
     for(var i=0;i<pathParam.length;i+=1){
        path1.push([pathParam[i].x,pathParam[i].y])
    }
     var oldLine = new AMap.Polyline({
        path:path1,
        strokeWeight:8,
        strokeOpacity:1,
        strokeColor:'red'
    })
     map.add(oldLine)
     new AMap.GraspRoad().driving(pathParam,function(error,result){
        if(!error){
            var path2 = [];
            var newPath = result.data.points;
            for(var i =0;i<newPath.length;i+=1){
                path2.push([newPath[i].x,newPath[i].y])
            }
            var newLine = new AMap.Polyline({
                path:path2,
                strokeWeight:8,
                strokeOpacity:0.7,
                strokeColor:'green',
                showDir:true
            })
            map.add(newLine)
            //map.setFitView()
        }
    })
     **/
}

//ployon draw
Person.ployonEditorDraw = function(routline_arr) {

    //在地图上绘制折线
    var editor={};


    editor._line=(function(){
        /**
        var lineArr = [
            [121.46980797294428, 31.224582803237602],
            [121.48324572416972, 31.238221750946757],
            [121.48329150361512, 31.238958826715166],
            [121.480471, 31.240649]
        ];
         **/
        var lineArr = routline_arr;
        return new AMap.Polyline({
            map: map,
            path: lineArr,
            strokeColor: "#0093EF",
            strokeOpacity: 1,
            strokeWeight: 3,
            strokeStyle: "solid"
        });
    })();


    editor._polygon=(function(){
        var arr = [ //构建多边形经纬度坐标数组
            [121.47181666670869, 31.24479770656136],
            [121.49323048872674, 31.24767677176263],
            [121.50477307763136, 31.22902661536636],
            [121.46980797294428, 31.224582803237602]
        ]
        return new AMap.Polygon({
            map: map,
            path: arr,
            strokeColor: "#0000ff",
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: "#f5deb3",
            fillOpacity: 0.35
        });
    })();

    map.setFitView();

    editor._polygon2=(function(){

        var arr = [ //构建多边形经纬度坐标数组
            [121.46980797294428, 31.224582803237602],
            [121.50477307763136, 31.22902661536636],
            [121.50947782518048, 31.226320125058727],
            [121.50345462654961, 31.214065431532976],
            [121.47922598128385, 31.198566263001155]
        ]

        return new AMap.Polygon({
            map: map,
            path: arr,
            strokeColor: "#0093EF",
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: "#f5deb3",
            fillOpacity: 0.35
        });
    })();

    //map.setFitView();

    editor._lineEditor = new AMap.PolyEditor(map, editor._line);

    editor._polygonEditor= new AMap.PolyEditor(map, editor._polygon);

    editor._polygonEditor2= new AMap.PolyEditor(map, editor._polygon2);


    editor.startEditLine=function(){
        editor._lineEditor.open();
    }
    editor.closeEditLine=function(){
        editor._lineEditor.close();
    }

    editor._polygonEditor.open();

    /**
     editor.startEditPolygon=function(){

    }
     editor.closeEditPolygon=function(){
        editor._polygonEditor.close();
    }
     **/

    editor.startEditPolygon2=function(){
        editor._polygonEditor2.open();
    }
    editor.closeEditPolygon2=function(){
        editor._polygonEditor2.close();
    }
}

//create marker with windows
Person.addwindowsinfo = function(routline_arr) {

    //添加marker标记
    map.clearMap();

    for(var i=0; i<data.length;i++){

        info_data(data, i, routline_arr);
    }
}

function info_data(data,index, routline_arr){

    var latitude = data[index].latitude;
    var longitude = data[index].longitude;
    var position_arr = [longitude, latitude];

    var randomIntIcon = "https://webapi.amap.com/theme/v1.3/images/newpc/poi-1.png";
    var img_offset = index%2 ==0 ? -60 : -169;

    //only ten picture.
    if(routline_arr.length <10){
        for(var k=0; k< routline_arr.length; k++){
            if(longitude==routline_arr[k][0]){

                img_offset=0;
                randomIntIcon = "https://webapi.amap.com/theme/v1.3/markers/n/mark_b"+(k+1)+".png";
            }
        }
    }else{
        img_offset=0;
        randomIntIcon = "https://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png";
    }

    var marker = new AMap.Marker({
        map: map,
        icon: new AMap.Icon({
            size: new AMap.Size(26, 32),  //图标大小
            image: randomIntIcon,
            imageOffset: new AMap.Pixel(0, img_offset)
        }),
        position: position_arr
    });  //// position: position['position']

    //var title = 'sb假日酒店'+position['index']+'<span style="font-size:11px;color:#F00;">价格:318</span>';
    var title =data[index].storeName;
    var   content = [];
    // content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
    content.push("经度:"+ data[index].longitude);
    // content.push("电话：010-64733333");
    content.push("纬度:" + data[index].latitude)
    content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");

    marker.on('click',function(e){
        new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: createInfoWindow(title, content.join("<br/>")),
            offset: new AMap.Pixel(16, -45)  //16,-45
        }).open(map, marker.getPosition());
    });
}

//构建自定义信息窗体
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "info";

    //可以通过下面的方式修改自定义窗体的宽高
    //info.style.width = "400px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = closeInfoWindow;

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}

//关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}