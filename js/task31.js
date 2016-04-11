/*
实现联动
 */

(function() {
	var parent = document.getElementById('parent'),
		parentData = [{
			code: 0,
			value: '请选择'
		}, {
			code: 1,
			value: '北京'
		}, {
			code: 2,
			value: '上海'
		}, {
			code: 3,
			value: '深圳'
		}],
		child = document.getElementById('child'),
		childData = [
			['请选择'],
			['北京大学', '北京工业大学', '清华大学', '北京化工大学'],
			['复旦大学', '上海交通大学 ', '上海大学', '上海海事大学 '],
			['深圳大学', '南方科技大学 ']
		];
	//二级联动
	var linkage=function(parent,parentData,child,childData){
		_render(parent,parentData);
		parent.onchange=function() {
			var _value=this.value;
			_render(child,childData[_value]);
		}
	}
	var _render=function(ele,data) {
		//移除当前项目
		var opts=ele.querySelectorAll('option');
		for(var i=0,len=opts.length;i<len;++i){
			ele.removeChild(opts[i]);
		}
		//创建项目
		var frag=document.createDocumentFragment();
		for(var i=0,len=data.length; i<len; ++i){
			if(typeof data[0]=='object'){
				var opt=new Option(data[i].value,data[i].code);
			}else {
				var opt= new Option(data[i],i);

			}
			frag.appendChild(opt);
		}
		ele.appendChild(frag);
	}
	linkage(parent,parentData,child,childData);

//转换
	var school=document.getElementById('yes');
	var noschool=document.getElementById('no');
	var scinput=document.getElementById('school');
	var workinput=document.getElementById('work');
	school.addEventListener("click", function(){
		if(school.checked){
			scinput.style.display="block";
			workinput.style.display="none";
			noschool.checked=false;
		}
	})
	noschool.addEventListener("click",function(){
		if(noschool.checked){
			scinput.style.display="none";
			workinput.style.display="block";
			school.checked=false;
		}		
	})

})();