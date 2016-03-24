/*
*2016/3/23
 */

(function(){
	var oContainer=document.getElementById("container");
	var inputBox=document.getElementById("input-box");
	var oleftInsert=document.getElementById("leftInsert");
	var orightInsert=document.getElementById("rightInsert");
	var oleftDelete=document.getElementById("leftDelete");
	var orightDelete=document.getElementById("rightDelete");
	var oRandom=document.getElementById("random");
	var oSort=document.getElementById("sort");
	var item=[];

/*检查输入*/
	function checkInput(){
		var value=inputBox.value;
		if(/^\d+$/.test(value) && value>=10 && value<=100){
			return Number(value);
		}else{
			alert("请输入大于10小于100的数字");
			return false;
		}

	}



	function checkAmount (){
		if(oContainer.childElementCount===60){
			alert("不能超过60个");
			return false;
		}else{
			return true;
		}
	}

/*左插入*/
	function leftInsert(){
		var text=checkInput();
		if(checkAmount() && text){
			var div=document.createElement("div");
			div.style.height=text*5+"px";
			oContainer.insertBefore(div,oContainer.firstElementChild);
			item.unshift(text);
		}
	}

/*右插入*/
	function rightInsert(){
		var text=checkInput();
		if(checkAmount() && text){
			var div=document.createElement("div");
			div.style.height=text*5+"px";
			oContainer.appendChild(div);
			item.push(text);
		}
	}

/*左删除*/
	function leftDelete(){
		if(oContainer.childElementCount!==0){
			oContainer.removeChild(oContainer.firstElementChild);
			item.shift();
		}else{
			alert("你的队列已空");
		}
	}


/*右删除*/

	function rightDelete(){
		if(oContainer.childElementCount!==0){
			oContainer.removeChild(oContainer.lastElementChild);
			item.pop();
		}else{
			alert("你的队列已空");
		}
	}


/*随机生成50个div*/
function randomItem(){
	oContainer.innerHTML="";
	item=[];
	queue="";
	for(i=0;i<5;i++){
		var value=10+parseInt(90*Math.random());
		queue+="<div style=\"height:"+value*5+"px"+"\"></div>";
		item.push(value);
	}
	oContainer.innerHTML=queue;
}

/*快速排序算法*/

function quickSort(arr,left,right){
	var odiv=oContainer.getElementsByTagName("div");
	if(right-left>=1){
		var i=left;
		var j=right;
		var k=arr[i];
		var temp;
		while(i!=j) {
			for(;j>i;j--){
				if(arr[j]<k){
					temp=arr[j];
					arr[j]=arr[i];
					arr[i]=temp;
					odiv[i].style.height=arr[i]*5+"px";
					odiv[j].style.height=arr[j]*5+"px";
				}
			}
		for (; j > i; i++) {
            if (arr[i] > k) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                odiv[i].style.height = arr[i] * 5 + "px";
                odiv[j].style.height = arr[j] * 5 + "px";
                break;
            }
        }
    }
    setTimeout(function(){
        arr = quickSort(arr, left, i - 1);
        arr = quickSort(arr, i + 1, right);
    }, 200);
}
	return arr;
}
function sort(){
    quickSort(item, 0, item.length);	
}

/*添加各种事件*/
oleftInsert.addEventListener("click",leftInsert);
oleftDelete.addEventListener("click",leftDelete);
orightInsert.addEventListener("click",rightInsert);
orightDelete.addEventListener("click",rightDelete);
oRandom.addEventListener("click",randomItem);
oSort.addEventListener("click",sort);

})();