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

	var callType;
	document.getElementsByTagName( 'body' )[0].bgColor="#35393d";
	$("button").click(function(event){
		//alert($(this).attr("value"));
		change_result(1);
		$.ajax({
		   type: "POST", //请求方式
		   url: "socket.php?",//请求文件
		   data: "table=海云阁&calltype="+$(this).attr("value"),//传输的参数
		   success: function(msg){
			// alert( "Data Saved: " + msg );//返回的结果
			setTimeout("change_result(2)","1000");
			setTimeout("change_result(0)","2000");
			
		   }
		});
	});

	

});