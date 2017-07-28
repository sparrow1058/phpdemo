<?php
$tableNo =  $_POST['table'];
$callType=	$_POST['calltype'];
echo $tableNo;
echo $callType;
echo "xxxxxx";
$msg_send="[003CREQ=RegCode:9014D37C8518;TableName:{$tableNo};ReqMsg:{$callType}]";
//$MSG_HEAD="[003CREQ=RegCode:9014D37C8518;";
//$msg_send=$MSG_HEAD+"TableName:"+$tableNo+"ReqMsg:"+$callType;

echo $msg_send;

$port=9000;
$ip="119.23.142.29";
//$ip="192.168.1.205";
$socket=socket_create(AF_INET,SOCK_STREAM,SOL_TCP);
if($socket<0){
	echo "socket create error".socket_strerror($soket)."\r";
}else
{
	echo "socket create ok\n";
}
echo "connet to '$ip' port '$port' ...\n";
$result=socket_connect($socket,$ip,$port);
if ($result < 0) {
  echo "socket_connect() failed.\nReason: ($result) " . socket_strerror($result) . "\n";
}else {
  echo "connet ok \n";
}

if(!socket_write($socket, $msg_send, strlen($msg_send))) {
  echo "socket_write() failed: reason: " . socket_strerror($socket) . "\n";
}else {
 // echo "发送到服务器信息成功！\n";
  echo "send:<font color='red'>$in</font> <br>";
}

$out = socket_read($socket, 1024);
 // echo "接收服务器回传信息成功！\n";
  echo "receive:",$out;



echo "close...\n";
socket_close($socket);
echo "close \n";
?>