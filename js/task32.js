/**
 * created by swj
 * 2016.4.14
 */


(function() {
	var prebtn = $('.pre'),
		inbtn = $('.in'),
		backbtn = $('.back'),
		root = $('.root');
	var stack=[];
	var timer=null;
	var divs=document.getElementsByTagName('div');
	var Order = {
		preOrder: function(node) {
			stack.push(node);
			if (node.firstElementChild != null) {
				arguments.callee(node.firstElementChild);
			}
			if (node.lastElementChild != null) {
				arguments.callee(node.lastElementChild);
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
		animate: function() {
			var isworking = false;
			var iter = 0;
			if (!isworking) {
				isworking = true;
				stack[iter].style.backgroundColor = "red";
				timer = setInterval(function() {
					if (iter === stack.length - 1) {
						stack[iter].style.backgroundColor = "#fff";
						isworking = false;
						clearInterval(timer);
					} else {
						iter++;
						stack[iter - 1].style.backgroundColor = "#fff";
						stack[iter].style.backgroundColor = "red";
					}
				}, 500);
			}
		},
		reset:function(){
			clearInterval(timer);

			for(var i=divs.length-1;i>=0;i--){
				divs[i].style.backgroundColor='#fff';
			}
		}
	};


	addhandler(prebtn, "click", function() {
		stack=[];
		Order.reset();
		Order.preOrder(root);
		Order.animate();
	})
	addhandler(inbtn, "click", function() {
		stack=[];
		Order.reset();
		Order.inOrder(root);
		Order.animate();
	})

	addhandler(backbtn, "click", function() {
		stack=[];
		Order.reset();
		Order.backOrder(root);
		Order.animate();
	})
})();