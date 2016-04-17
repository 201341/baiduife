/**
 * created by swj
 * 2016.4.14
 */


(function() {
	var prebtn = $('.pre'),
		inbtn = $('.in'),
		osearch = $('.search'),
		root = $('.root');
	var stack = [];
	var timer = null;
	var divs = document.getElementsByTagName('div');
	var Order = {
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
		reset: function() {
			for (var i = divs.length - 1; i >= 0; i--) {
				divs[i].style.backgroundColor = '#fff';
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
})();