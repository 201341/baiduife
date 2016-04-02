

(function(){
	var item=[];
	var oinput=$('#inputtext');
	var odiv=$('.omain');
	var osearch=$(".oinput");



/**
 * [获取textarea的值]
 * @param  {[string]} text 
 * @return {[array]}     
 */
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
 * [output 添加div]
 * 
 */
	function output(){
		var oitem="";
		item.forEach(function(v){
			oitem+="<div>"+v+"</div>";
		});
		odiv.innerHTML=oitem;
		addDivEvent();
	}
/**
 * [leftin 左插入]
 * 
 */
	function leftin(){
	    if(oinput.value!==""){
		    getInput(oinput.value).forEach(function(a){
			     item.unshift(a);
		    });
	    }else{
		     alert("输入的值不能为空奥");
	    }
	    output();	
	}

/**
 * 右插入
 * 
 */
	function rightin(){
	    if(oinput.value!==""){
		    getInput(oinput.value).forEach(function(a){
			    item.push(a);
		    });
	    }else{
		     alert("输入的值不能为空奥");
	    }
	    output();
	}
/**
 * 左删除
 */

	function leftdel(){
		var num=item.shift();
		if(num){
			alert("确定删除"+num+"?");
			odiv.removeChild(odiv.firstChild);
		}else{
			alert("队列为空");
		}
	}
/**
 * 右删除
 */

	function rightdel(){
		var num=item.pop();
		if(num){
			alert("确定删除"+num+"?");
			odiv.removeChild(odiv.lastChild);
		}else{
			alert("队列为空");
		}
	}	


	function del(i){
		return function(){
			item.splice(i,1);
			output();
		}

	}
	/**
	 * 给每一div绑定一个事件
	 */
	function addDivEvent(){
		btn=odiv.getElementsByTagName("div");
		for(i=0;i<btn.length;i++){
			addhandler(btn[i],"click", del(i));
				     
			    
	    }
	}


	function search(){
	    btn=odiv.getElementsByTagName("div");
		if(osearch.value!==""){
			for(var i=0;i<btn.length;i++){
				if(btn[i].innerHTML.indexOf(osearch.value)!=-1){
					btn[i].style.background="blue";
				}
				
			}
		}
	}



	addhandler($(".left-in"),"click",leftin);
	addhandler($(".right-in"),"click",rightin);
	addhandler($(".left-delete"),"click",leftdel);
	addhandler($(".right-delete"),"click",rightdel);
	addhandler($(".search"),"click",search);
})();	

















