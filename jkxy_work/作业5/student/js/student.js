// 输出结果
function seachStu(){
	var stuID = document.getElementById("stuID").value;
	var stuLv;

	if (stuID == null || stuID == "") {
		alert("请输入正确学分!");
		return;
	}
	if (stuID > 100 || stuID < 0) {
		stuLv="请输入0-100内的任何数字！";
	}
	else if (stuID >= 90 && stuID < 101) {
		stuLv="一等生";
	}
	else if (stuID >= 80 && stuID < 90) {
		stuLv="二等生";
	}
	else if (stuID >= 70 && stuID < 80) {
		stuLv="三等生";
	}
	else if (stuID >= 60 && stuID < 70) {
		stuLv="四等生";
	}
	else if (stuID >= 50 && stuID < 60) {
		stuLv="五等生";
	}
	else if (stuID >= 40 && stuID < 50) {
		stuLv="六等生";
	}
	else if (stuID >= 30 && stuID < 40) {
		stuLv="七等生";
	}
	else if (stuID >= 20 && stuID < 30) {
		stuLv="八等生";
	}
	else if (stuID >= 10 && stuID < 20) {
		stuLv="九等生";
	}
	else{
		stuLv="十等生";
	}
	alert(stuLv);
}
//限制只输入数字
function keyPress() { 
	var keyCode = event.keyCode;    
	if ((keyCode >= 48 && keyCode <= 57)) {    
		event.returnValue = true;    
	} 
	else {    
		event.returnValue = false;    
	}    
}   