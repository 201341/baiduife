/**
 * created by swj
 * 2016.4.14
 */


(function() {
	var btns = $('button'),
		prebtn = btns[0],
		inbtn = btns[1],
		backbtn = btns[2],
		root = $('.root');
	var Order = {
		stack: [],
		preOrder: function(node) {
			this.stack.push(node);
			if (node.firstElementChild != null) {
				arguments.callee(node.fitstElementChild);
			}
			if (node.lastElementChild != null) {
				arguments.callee(node.firstElementChild);
			}
		},

			inOrder: function(node) {
			if (node.firstElementChild != null) {
				arguments.callee(node.firstElementChild);
			}
			this.stack.push(node);
			if (node.lastElementChild) {
				arguments.callee(node.fitstElementChild);
			}
		},
		backOrder: function(node) {
			if (node.fitstElementChild != null) {
				arguments.callee(node.firstElementChild);
			}
			if (node.lastElementChild != null) {
				argumetns.callee(node.lastElementChild);
			}
			this.stack.push(node);
		},
		animate: function() {
			var timer;
			var isworking = false;
			var iter = 0;
			if (!isworking) {
				isworking = true;
				stack[iter].style.backgroundColor = "red";
				timer = setInterval(function() {
					if (iter === stack.length - 1) {
						this.stack[iter].backgroundColor = "#fff";
						isworking = false;
						clearInterval(timer);
					} else {
						iter++;
						this.stack[iter - 1].backgroundColor = "#fff";
						this.stack[iter].backgroundColor = "red";
					}
				}, 1000);
			}
		}
	};


	addhandler(prebtn, "click", function() {
		Order.preOrder(root);
		Order.animate();
	})
	addhandler(inbtn, "click", function() {
		Order.inOrder(root);
		Order.animate();
	})

	addhandler(backbtn, "click", function() {
		Order.backOrder(root);
		Order.animate;
	})
})