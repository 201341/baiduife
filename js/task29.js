/**
 *任务表单验证
 * 
 */


(function(){
	var oinput=$('.oinput');
	var obtn=$('.obtn');
	var otext=$('.otext');
 	
 	
 	function valide(){
 		var inputvalue=oinput.value.replace(/[\u4e00-\u9fa5]/g,"aa");//用两个英文代替中文
 		var regu=/^[0-9a-zA-Z]{4,16}$/;
 		if(!inputvalue){
 			otext.innerHTML="姓名不能为空";
 			otext.style.color="red";
 			oinput.style.border="2px solid red";

 			
 		}else if(!regu.test(trim(inputvalue))){
 			otext.innerHTML="字符串长度不对";
 			otext.style.color="red";
 			oinput.style.border="2px solid red";


 		}
 		else{

 			otext.innerHTML="格式正确";
 			otext.style.color="lightgreen";
 			oinput.style.border="2px solid lightgreen";



 		}

 	}



 	addhandler(obtn,"click",valide);

})();