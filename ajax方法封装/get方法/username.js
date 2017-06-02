function username(str,successCall,errorCall){
	var xmlHttp;
//处理兼容
if(window.XMLHttpRequest){
	xmlHttp=new XMLHttpRequest();
   }
	else{
	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
   }
	//配置信息
   xmlHttp.open("GET","username.php?name="+str,true);
	//发送
	xmlHttp.send(null);
	//监听状态
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4){
		  if(xmlHttp.status=200){
			if(successCall){
				successCall(xmlHttp.responseText);
			}	
		 }
		}
		
	else{
		if(errorCall){
			errorCall(xmlHttp.status);
		}	
	  }
  }
}

//运用
var username1=document.getElementById("username");
var txt=document.getElementById("txt");
username1.onkeyup=function(){
	username(this.value,successCall,errorCall);
	function successCall(responseXML){
		txt.innerHTML=responseXML;
	}
	function errorCall(statusText){
		txt.innerHTML=statusText;
	}
}
