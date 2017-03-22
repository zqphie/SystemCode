window.onload = function(){
	var oTab = document.getElementById('tab');
	var oA = oTab.getElementsByTagName('a');
	var oDiv = document.getElementsByClassName('item');

	for(var i=0;i<oA.length;i++){
		oA[i].id=i;
		oA[i].onclick = function(){
			//清除所有的tab的class
			for(var j=0; j<oA.length; j++){
				oA[j].className = "";
				oDiv[j].style.display = 'none';
			}
			//设置当前为高亮
			this.className = 'on';
			oDiv[this.id].style.display = 'block';
		}
	}
}