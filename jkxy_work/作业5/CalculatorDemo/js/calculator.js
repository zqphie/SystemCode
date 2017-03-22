//计算结果
function calculator(){
	var firstValue=document.getElementById("firstNumber").value;
	var secondValue=document.getElementById("secondNumber").value;
	//判断输入框是否为空
	if (firstValue != null && firstValue != "" && secondValue != null && secondValue != "") {
		var opra=document.getElementById("operator").value;
		var result=0;
		switch(opra) {
			case "+":
				result=parseInt(firstValue)+parseInt(secondValue);
				break;
			case "-":
				result=parseInt(firstValue)-parseInt(secondValue);
				break;
			case "*":
				result=parseInt(firstValue)*parseInt(secondValue);
				break;
			case "/":
				if(parseInt(secondValue)!=0){
					result=parseInt(firstValue)/parseInt(secondValue);
				}
				else{
					alert("除数不能为0");
					return;
				}
				break;
			default:
				break;
		}
		// 将结果显示
		document.getElementById("result").value=result;
	}else{
		alert("请输入数字！");
	};
	
}
//限制只输入数字
function keyPress() { 
	var keyCode = event.keyCode;    
	if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105))    
	{    
		event.returnValue = true;    
	} else {    
		event.returnValue = false;    
	}    
}
