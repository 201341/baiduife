

function getInput(text){
	var str=text;
	var num=[];
	if(!/[^a-zA-Z0-9\u4e00-\u9fa5,，、 \t\t\n]/g.test(str)){
		num=str.split(/,|，|、| |\t|\r|\n/)
		.filter(function(a){return a;})

	}else{
		alert("请输入正确的内容");
	}
	return num;
}


/**
 * 
 * 工厂模式的构造函数
 */
var Queue=function(container,isDel){
    this.item=[];

	this.leftin=function(obj){
	    if(obj==""){
		    this.item.unshift(obj);
	    }else{
		     alert("输入的值不能为空奥");
	    }
	    this.output();	
	}


	this.rightin=function (obj){
	    if(obj.value!==""){
		   this.item.push(obj);
	    }else{
		     alert("输入的值不能为空奥");
	    }
	    this.output();
	}

	this.leftdel=function(){
		var num=this.item.shift();
		if(num){
			alert("确定删除"+num+"?");
			this.output();
		}else{
			alert("队列为空");
		}
	}
	this.rightdel=function (){
		var num=this.item.pop();
		if(num){
			alert("确定删除"+num+"?");
			this.output();
		}else{
			alert("队列为空");
		}
	}
	this.output=function (){
		var oitem="";
		this.item.forEach(function(v){
			oitem+="<div>"+v+"</div>";
		});
		container.innerHTML=oitem;
		if(isDel) addDivEvent(this,container);
	}

	this.deleteID=function(i){
		
		this.item.splice(i,1);
		this.output();


	}
}


//为container中的每个div绑定删除函数
function addDivEvent(Queue, container) {
    var temp = [];
    for (var cur = 0; cur < container.childNodes.length; cur++) {
        temp.push(container.childNodes[cur].innerHTML);
        //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的cur值(length);
        addhandler(container.childNodes[cur], "click", function(cur) {
            return function(){return Queue.deleteID(cur)};
        }(cur));
        addhandler(container.childNodes[cur], "mouseover", function(cur) {
            return function(){container.childNodes[cur].style.background = "green"; container.childNodes[cur].innerHTML = "删除" + temp[cur] + "?";};
        }(cur));
        addhandler(container.childNodes[cur], "mouseout", function(cur) {
            return function(){container.childNodes[cur].style.background = "red"; container.childNodes[cur].innerHTML = temp[cur];};
        }(cur));
    }
}



window.onload=function(){

	var tag=$(".tag-input");
	var hobby=$(".hobby-input");
	var tagDiv=$(".tag");
	var hobbyDiv=$(".hobby-div")
	var hobbyBtn=$(".hobby-submit");

	var tagQueue= new Queue(tagDiv,true);
	var hobbyQueue = new Queue(hobbyDiv,false);
 
    addhandler(hobbyBtn,"click",function(){
    	var data=getInput(trim(hobby.value));
    	var odata=unique(data);
    	for(var i=0;i<odata.length;i++){
    		if(hobbyQueue.item.indexOf(odata[i])===-1){
    			hobbyQueue.rightin(trim(odata[i]));
    		}
    		if(hobbyQueue.item.length>10){
    			hobbyQueue.leftdel();
    		}
    	}
    });

	addhandler(tag,"keyup",function(e){
		if(/[,，;；、\s\n]+/.test(tag.value) || e.keyCode === 13){
			var data=getInput(trim(tag.value));
			var odata=data[0];
			if(tagQueue.item.indexOf(odata)===-1){
				tagQueue.rightin(odata);
				if(tagQueue.item.length>10){
					tagQueue.leftdel();
				}
			}
			tagQueue.output();
			tag.value="";
		}
		

});












}