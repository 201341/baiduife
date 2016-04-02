/**
 * add handle to element
 */

function addhandler(element,type,handler){
	if(element.addEventListener){
		addhandler=function(element,type,handler){
			element.addEventListener(type,handler,false);//IE9，safari,firefox,chrome,opera事件处理程序
		}

	} else if(element.attachEvent){
		addhandler=function(element,type,handler){
			element.attachEvent("on"+type,handler);//IE事件处理程序
		}
	} else{
		addhandler=function(element,type,handler){
			element["on"+type]=handler;//
		}
	}
	return addhandler(element,type,handler);
}
/**
 * get target(event)
 */

function getTarget(event){
	event=event||window.event;
	return event.target||event.srcElement;
}
/**
 * prevent default
 */

function preventDefault(event){
	if(event.preventDefault){
        preventDefault=function(event){  
			event.preventDefault;
		}
	}else{
		preventDefault=function(event){
			event.returnValue=false;
		}
	}
	return preventDefault(event);
}

/**
 * 取得class
 */

function $(selector) {
	return document.querySelector(selector);
}