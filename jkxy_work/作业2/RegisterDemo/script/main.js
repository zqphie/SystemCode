// 表单提交
function checkform()
{
  var strTemp1,strTemp2;
  strTemp1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  strTemp2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_";
  //判断用户名
  var username = document.form1.username.value;
  if(username==false){
    alert("请输入会员名！");
    document.form1.username.focus();	
    return false;
  }
  else{
    if(strTemp1.indexOf(document.form1.username.value.charAt(0))==-1){
      alert("首字符只能是字母!");
      document.form1.username.focus();	
      return false;
    }
    for (j=0;j<=document.form1.username.value.length-1;j++)
    {
      cChar = document.form1.username.value.charAt(j);
      if(strTemp2.indexOf(cChar)==-1){
        alert("会员名含非法字符!");
        document.form1.username.focus();	
        return false;
      }
    } 
  }
  if(document.form1.username.value.length>12 || document.form1.username.value.length<3){
    alert("会员名必须是3-12个字符！");
    document.form1.username.focus();	
    return false;
  }
  // 判断密码
  var password = document.form1.password.value;
  if(password==false){
    alert("请输入密码！");
    document.form1.password.focus();	
    return false;
  }
  if(document.form1.password.value.length>20 || document.form1.password.value.length<6){
    alert("密码必须是6-20个字符！");
    document.form1.password.focus();	
    return false;
  }		
  var repassword = document.form1.repassword.value;
  if(password!= repassword){
    alert("密码与确认密码不同！");
    document.form1.password.focus();	
    return false;
  }
  //判断教员
  var flagValue = 0; 
  for (i=0;i<document.form1.RadioGroup.length;i++){
    if (document.form1.RadioGroup[i].checked==true){
      flagValue=1; 
    }
  }
  if (flagValue==0) { 
    alert("请选择教员身份!");
    document.form1.RadioGroup[0].focus();
    return false;
  }
  //全部判断通过，返回true
  return true;
}
