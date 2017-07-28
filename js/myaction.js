function change_result(cmd)
{
	if(cmd==0)
		document.getElementById('result').innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
	else if(cmd==1)
		document.getElementById('result').innerHTML = '呼叫中.....';
	else if(cmd==2)
		document.getElementById('result').innerHTML = '已呼叫';

}
$(document).ready(function(){
/*
	document.onclick = function(e){
                var target = e.target|| e.srcElement;
				if(target.tagName =="tr")
					alert(target.id)
            }
*/
	var callType;
	document.getElementsByTagName( 'body' )[0].bgColor="#35393d";

	$("img").mousedown(function(){
		//alert($(this).attr("id"));
		$(this).css({border:"solid 2px #CCCCCC"}); 

	});
	$("a").click(function(){
	//	alert($(this).attr("id"));
//		$(this).css({border:"solid 0px #CCCCCC"}); 
	//document.getElementById('result').innerHTML = '呼叫中.....';
	change_result(1);
		switch ($(this).attr("id")) {
			case "bt1":
				callType="加水";
				break;
			case "bt2":
				callType="加位";
				break;
			case "bt3":
				callType="催菜";
				break;
			case "bt4":
				callType="买单";
				break;
			case "bt5":
				callType="打包";
				break;
			case "bt6":
				callType="加纸巾";
				break;
			case "bt7":
				callType="清洁";
				break;
			case "bt8":
				callType="其他服务";
				break;

			default:
				// ...
				return ;
				break;
		}
		$.ajax({
		   type: "POST", //请求方式
		   url: "socket.php?",//请求文件
		   data: "table=海云阁&calltype="+callType,//传输的参数
		   success: function(msg){
			// alert( "Data Saved: " + msg );//返回的结果
			setTimeout("change_result(2)","1000");
			setTimeout("change_result(0)","2000");
			
		   }
		});

	});
	
	$("#bt_post").click(function(event){
		//	alert("test");
			var labels=new Array();
			var j=0;
		var obj = document.getElementsByTagName("input");
			for(var i=0; i<obj.length; i ++){
				if(obj[i].checked){
				//	alert(obj[i].data-labelauty);
					
					labels[j++] = obj[i].value;

//					alert
				}
			}
		$.ajax({
		   type: "POST", //请求方式
		   url: "socket.php?",//请求文件
		   data: "table="+labels[0]+"&calltype="+labels[1],//传输的参数
		   success: function(msg){
			// alert( "Data Saved: " + msg );//返回的结果
   }
});
	});

	

});