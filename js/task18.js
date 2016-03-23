
(function(){
var item=[];
var obtn=document.getElementsByTagName("button");
var oDiv = document.getElementById("container");
var oinput=document.getElementsByTagName("input")[0];
function outPut(){
    var str="";
    item.forEach(function(v){
    str+="<div>"+v+"</div>";
    })
    oDiv.innerHTML=str;
}
/*
插入操作
 */
function Insert(target){
	if(event.target===obtn[0]){
		item.unshift(oinput.value);
		outPut();
	}else if(event.target===obtn[1]){
		item.push(oinput.value);
		outPut();
	}

}

/* 删除操作*/
function Delete(target){
	var num;
	if(event.target===obtn[2]){
		num=item.shift();
		(num)?alert(num):alert("队列为空");
		oDiv.removeChild(oDiv.firstChild);
		
	}else if(event.target==obtn[3]){
		num=item.pop();
		(num)?alert(num):alert("对列为空");
		oDiv.removeChild(oDiv.lastChild);
	}
}
for(i=0;i<4;i++){
    document.getElementsByTagName("button")[i].addEventListener("click",function(event){
    if(/^\d+$/.test(oinput.value)){
		Insert(event.target);
		Delete(event.target);
	}else alert("请输入正确的整数");
},false);
}

})();