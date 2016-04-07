window.onload = function() {
	var otext = document.getElementsByTagName("p");
	var oinput = document.querySelectorAll(".oinput");
	var item = [];
	var arr = [];
	var nameArr = ["名称不能为空", "名称长度不正确", "名称可用"];
	var passwordArr = ["密码不能为空", "密码长度不正确", "密码可用"];
	var againArr = ["密码不能为空","俩次密码不相同", "密码正确"];
	var emailArr = ["名称不能为空", "邮箱格式错误", "邮箱格式正确"];
	var phoneArr = ["手机号码不能为空", "手机号码格式错误", "手机号码格式正确"];
	checkName = function() {
		var inputName = oinput[0].value.replace(/[\u4e00-\u9fa5]/g, "aa");
		var regu = /^[0-9a-zA-Z]{4,16}$/;
		if (!inputName) {
			arr.push(nameArr[0]);
			arr.push(false);
		} else if (!regu.test(trim(inputName))) {
			arr.push(nameArr[1]);
			arr.push(false);
		} else {
			arr.push(nameArr[2]);
			arr.push(true);
		}
		return arr;
	}

	checkPsd = function() {
		var inputPsd = oinput[1].value;
		var regu = /^\w{6,16}$/;
		if (!inputPsd) {
			arr.push(passwordArr[0]);
			arr.push(false);
		} else if (!regu.test(trim(inputPsd))) {
			arr.push(passwordArr[1]);
			arr.push(false);
		} else {
			arr.push(passwordArr[2]);
			arr.push(true);
		}
		return arr;
	}
	recheckPsd = function() {
		var checkPsd = oinput[2].value;
		var inputPsd = oinput[1].value;
		if(!checkPsd){
			arr.push(againArr[0]);
			arr.push(false);
		}else if (checkPsd != inputPsd ) {
			arr.push(againArr[1]);
			arr.push(false);
		} else {
			arr.push(againArr[2]);
			arr.push(true);
		}
		return arr;
	}
	checkEmail = function() {
		var inputEmail = oinput[3].value;
		var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!inputEmail) {
			arr.push(emailArr[0]);
			arr.push(false);
		} else if (reg.test(trim(inputEmail))) {
			arr.push(emailArr[1]);
			arr.push(false);
		} else {
			arr.push(emailArr[2]);
			arr.push(true);
		}
		return arr;
	}

	checkPhone = function() {
		var inputPhone = oinput[4].value;
		var reg = /^[0-9]{11}/;
		if (!inputPhone) {
			arr.push(phoneArr[0]);
			arr.push(false);
		} else if (reg.test(trim(inputPhone))) {
			arr.push(phoneArr[1]);
			arr.push(false);
		} else {
			arr.push(phoneArr[2]);
			arr.push(true);
		}
		return arr;
	}


	function check(target) {
		if (event.target === oinput[0]) {
			item = checkName();
			otext[0].innerHTML = item[0];
			if (item[1]) {
				oinput[0].style.borderColor = "lightgreen";
				otext[0].style.color = "lightgreen";
			} else {
				oinput[0].style.borderColor = "red";
				otext[0].style.color = "red";
			}


		} else if (event.target === oinput[1]) {
			item.pop();
			item.pop();
			item = checkPsd();
			otext[1].innerHTML = item[0];
			if (item[1]) {
				oinput[1].style.borderColor = "lightgreen";
				otext[1].style.color = "lightgreen";
			} else {
				oinput[1].style.borderColor = "red";
				otext[1].style.color = "red";
			}


		} else if (event.target === oinput[2]) {
			item.pop();
			item.pop();
			item = recheckPsd();
			otext[2].innerHTML = item[0];
			if (item[1]) {
				oinput[2].style.borderColor = "lightgreen";
				otext[2].style.color = "lightgreen";
			} else {
				oinput[2].style.borderColor = "red";
				otext[2].style.color = "red";
			}

		} else if (event.target === oinput[3]) {
			item.pop();
			item.pop();
			item = checkEmail();
			otext[3].innerHTML = item[0];
			if (item[1]) {
				oinput[3].style.borderColor = "lightgreen";
				otext[3].style.color = "lightgreen";
			} else {
				oinput[3].style.borderColor = "red";
				otext[3].style.color = "red";
			}


		} else if (event.target === oinput[4]) {
			item.pop();
			item.pop();
			item = checkPhone();
			otext[4].innerHTML = item[0];
			if (item[1]) {
				oinput[4].style.borderColor = "lightgreen";
				otext[4].style.color = "lightgreen";
			} else {
				oinput[4].style.borderColor = "red";
				otext[4].style.color = "red";
			}
		}



	}

	function disPlay(target) {
		for (var i = 0; i < otext.length; i++) {
			if (event.target == oinput[i]) {
				otext[i].style.display = "block";
			}
		}
	}
	for (var i = 0; i < otext.length; i++) {
		addhandler(oinput[i], "focus", function(event) {
			disPlay(event.target);

		})
		addhandler(oinput[i], "blur", function(event) {
			check(event.target);
		})
	}

}