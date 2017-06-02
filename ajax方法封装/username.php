<?php
	//准备数据
	$arr=["root","host","baidu","hello"];
	$name=$_GET["name"];
	if(in_array($name, $arr)){
		echo "该用户名已经注册,请换一个名称";	
	}
	else{
		echo "注册成功";
	}
?>