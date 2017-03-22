function checkform(f1)
{
	if(f1.truename.value==false){
		alert("请输入真实姓名！");
		f1.truename.focus();	
		return false;
	}
	if(f1.selectSex.value==false){
		alert("请选择性别！");
		f1.selectSex.focus();	
		return false;
	}
	if(f1.birthday.value==false){
		alert("请选择出生年份！");
		f1.birthday.focus();	
		return false;
	}
	
	if(f1.specialty.value==false){
		alert("请输入专业！");
		f1.specialty.focus();	
		return false;
	}
	
	if(f1.knowledge.value==false){
		alert("请选择目前（最高）学历！");
		f1.knowledge.focus();	
		return false;
	}
	if(f1.degree.value==false){
		alert("请选择目前身份！");
		f1.degree.focus();	
		return false;
	}
	if(f1.nationality.value==false){
		alert("请选择籍贯（生源地）！");
		f1.nationality.focus();	
		return false;
	}
	if(f1.school.value==false)
	{alert("请选择毕业/就读高校！");
		f1.school.focus();	
		return false;
	}
	if(f1.highschool.value==false)
	{alert("请输入高中母校！");
		f1.highschool.focus();	
		return false;
	}
	
	if(f1.mobile.value==false){
		alert("请输入手机/小灵通！");
		f1.mobile.focus();	
		return false;
	}
	if(f1.address1.value==false){
		alert("请选择目前住所！");
		f1.address1.focus();	
		return false;
	}
	if(f1.email.value==false){
		alert("请输入E-mail！");
		f1.email.focus();	
		return false;
	}

	if(f1.good.value==false)
	{alert("请输入自我描述与特长展示！");
		f1.good.focus();	
		return false;
	}
	var JobLen = f1.job.length; 
    var numJob = 0; 
    for (i = 0; i < JobLen; i++) 
    { 
        if (f1.job[i].checked == true) 
        { 
            numJob+=1; 
        } 
    }
    if (numJob==0) { 
		alert("请选择你可辅导的科目!");
		f1.job[0].focus();
		return false;
    }else if(numJob>10){
		alert("可辅导的科目最多可选择十项!");
		f1.job[0].focus();
		return false;
	}
	
	if(f1.expert.value==false)
	{alert("请输入最擅长的科目！");
		f1.expert.focus();	
		return false;
	}
	
	var areaNullCheck=true;
	var AreaLen = f1.area.length;
	for (var i=0;i<AreaLen;i++){
		if (f1.area[i].checked==true){
			areaNullCheck=false;
			break;}
	}
	if (areaNullCheck){
		alert("请选择方便授课区域!");
		f1.area[0].focus();
		return false;
	}
	
	if(f1.teachtime.value==false){
		alert("请输入可授课时间！");
		f1.teachtime.focus();	
		return false;
	}

	var teachmodeNullCheck=true;
	var teachmodeLen = f1.teachmode.length;
	for (var i=0;i<teachmodeLen;i++){
		if (f1.teachmode[i].checked==true){
			teachmodeNullCheck=false;
			break;}
	}
	if (teachmodeNullCheck){
		alert("请选择辅导方式!");
		f1.teachmode[0].focus();
		return false;
	}
	
	if(f1.pay.value==false){
		alert("请输入薪酬要求！");
		f1.pay.focus();	
		return false;
	}
	alert("您的基本信息已注册完成，为了得到更好的关注，请进行证书和证件的上传");
	return true;
}