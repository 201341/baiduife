/**
 * created by swj
 * 2016.4.14
 */


(function() {
	var prebtn = $('.pre'),
		inbtn = $('.in'),
		osearch = $('.search'),
		addinput = $('.input'),
		del=$('.del'),
		addinput=$('.addnode'),
		addbtn=$('.add'),
		root = $('.root');
	var stack = [];
	var timer = null;
	var divs = document.getElementsByTagName('div');
	var Order = {
		target: null,
		isworking:null,
		preOrder: function(node) {
			stack.push(node);
			if (node.firstElementChild != null) {
				arguments.callee(node.firstElementChild);
				var next = node.firstElementChild.nextElementSibling;
				while (next != null) {
					arguments.callee(next);
					next = next.nextElementSibling;

				}
			}
		},

		inOrder: function(node) {
			if (node.firstElementChild != null) {
				arguments.callee(node.firstElementChild);
			}
			stack.push(node);
			if (node.lastElementChild) {
				arguments.callee(node.lastElementChild);
			}
		},
		backOrder: function(node) {
			if (node.firstElementChild != null) {
				arguments.callee(node.firstElementChild);
			}
			if (node.lastElementChild != null) {
				arguments.callee(node.lastElementChild);
			}
			stack.push(node);
		},
		BFS: function(node) {
			var queue = [];
			var p = null;
			if (node && node.nodeName.toLowerCase() === 'div') {
				queue.push(node);
			}
			while (queue.length > 0) {
				p = queue.shift();
				stack.push(p);
				if (p.firstElementChild) {
					queue.push(p.firstElementChild);
					var next = p.firstElementChild.nextElementSibling;
					while (next !== null && next.nodeName.toLowerCase() === 'div') {
						queue.push(next);
						next = next.nextElementSibling;
					}
				}
			}
		},
		search: function(keyword) {
			var lock = true;
			(function show() {
				var next = stack.shift();
				if (next) {
					next.style.backgroundColor = "#ccc";
					setTimeout(function() {
						if (!(next.firstChild.nodeValue.trim() == keyword)) {
							next.style.backgroundColor = "#fff";
						}
						show();
					}, 500);
				} else {
					lock = false;
				}
			})();

		},
		animate: function() {
		    this.isworking = false;
			var iter = 0;
			if (!this.isworking) {
				this.isworking = true;
				stack[iter].style.backgroundColor = "red";
				timer = setInterval(function() {
					if (iter === stack.length - 1) {
						stack[iter].style.backgroundColor = "#fff";
						this.isworking = false;
						clearInterval(timer);
					} else {
						iter++;
						stack[iter - 1].style.backgroundColor = "#fff";
						stack[iter].style.backgroundColor = "red";
					}
				}, 500);
			}
		},
		reset: function() {
			for (var i = divs.length - 1; i >= 0; i--) {
				divs[i].style.backgroundColor = '#fff';
			}
		},
		check: function(event){
			if(this.isworking){
				alert("还没停下来了！");
				return;
			}
			var ev=event || window.event;
			this.target=event.target || event.srcElement;
			this.target.style.backgroundColor="blue";
		},
		removeNode: function(){
			if(this.target==null){
				alert("请选择节点");
				return;
			}
			this.target.parentNode.removeChild(this.target);
		},
		addNode: function(){
			if(this.target==null){
				alert("请选择节点");
				return;
			}
			var divele=document.createElement("div");
			var addinputtext=addinput.value;
			if(addinputtext===""){
				alert("请输入值");
			}else{
				divele.innerHTML=addinputtext;
				divele.style.backgroundColor="#fff";
				this.target.appendChild(divele);
			}
		}

	};


	addhandler(prebtn, "click", function() {
		stack = [];
		Order.reset();
		Order.preOrder(root);
		Order.animate();
	})
	addhandler(inbtn, "click", function() {
		stack = [];
		Order.reset();
		Order.BFS(root);
		Order.animate();
	})

	addhandler(osearch, "click", function() {
		var keyword = $('.input').value;
		stack = [];
		Order.reset();
		Order.BFS(root);
		Order.search(keyword);
	})
	addhandler(root, "click", function(){
		Order.reset();
		Order.check(event);
	})

	addhandler(del,"click",function(){
		Order.removeNode();
	})

	addhandler(addbtn,"click",function(){
		Order.addNode();
	})
})();