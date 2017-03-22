window.onload = function () {
    // 自动轮播图开始
    //获取一堆元素
    var container = document.getElementsByClassName('index-banner')[0];
    var imgList = document.getElementsByClassName('imgList')[0];
    var images = imgList.children;
    var dotList = document.getElementsByClassName('dotList')[0];
    var dots = dotList.children;
    var prev = document.getElementsByClassName('arrow-left')[0];
    var next = document.getElementsByClassName('arrow-right')[0];
    //这是一个定时器
    var timer;

     //点击事件在这里
    prev.onclick = function () {
        leftMove();
        tab();
    };
    next.onclick = function () {
        rightMove();
        tab();
    };
    //向左点击移动
    function leftMove() {
        imgList.style.left = parseInt(imgList.style.left) + 560 + 'px';
        //判断一下点击到头的情况
        if (parseInt(imgList.style.left) > 0) {
            imgList.style.left = -2240 + 'px';
        }
    }
    //向右点击移动
    function rightMove() {
        imgList.style.left = parseInt(imgList.style.left) - 560 + 'px';
        //判断一下点击到头的情况
        if (parseInt(imgList.style.left) < -2240) {
            imgList.style.left = 0 + 'px';
        }
    }
    //小圆点hover上去时候图片相对应
    for (var i = 0; i < dots.length; i++) {
        //让所有圆点都是未点击状态
        dots[i].onmouseover = function () {
            for (var i = 0; i < dots.length; i++) {
                if (dots[i].className == 'on') {
                    dots[i].className = '';
                }
            }
            this.className = 'on';
            //让点的index对应图片的index
            for (var i = 0; i < dots.length; i++) {
                if (dots[i].className == 'on') {
                    imgList.style.left = -560 * i + 'px';
                }
            }

        }
    }
    //点击时候正好对应这个点
    function tab() {
        var index = Math.abs(parseInt(imgList.style.left) / 560);
        for (var i = 0; i < dots.length; i++) {
            if (i !== index) {
                if (dots[i].className == 'on') {
                    dots[i].className = '';
                } else {
                    dots[index].className = 'on';
                }
            }
        }
    }
    //设置个定时器自动轮播,实际上就是触发点击事件
    function go() {
        timer = setInterval(function () {
            next.onclick();
        }, 5000)
    }
    go();
    //鼠标放上去清除定时器,鼠标移开再重新开始
    container.onmouseover = function () {
        clearTimeout(timer);
    };
    container.onmouseout = function () {
        go();
    };
    // 自动轮播图结束
    // 手动轮播图开始
    var swiperList=document.getElementsByClassName("swiperList")[0];
    var swipers=swiperList.children;
    var wrapLeft=document.getElementsByClassName("arrow wrap-left")[0];
    var wrapRight=document.getElementsByClassName("arrow wrap-right")[0];
    wrapLeft.onclick=function(){
        wrapLeftMove();
    }
    wrapRight.onclick=function(){
        wrapRightMove();
    }
    // 向左移动
    function wrapLeftMove(){
        swiperList.style.left=parseInt(swiperList.style.left) + 560 + 'px';
        if(parseInt(swiperList.style.left) > 0){
            swiperList.style.left= -2240 + 'px';
        }
    }
    // 向右移动
    function wrapRightMove(){
        swiperList.style.left=parseInt(swiperList.style.left) - 560 + 'px';
        if(parseInt(swiperList.style.left) < -2240){
            swiperList.style.left= 0 + 'px';
        }
    }
    //悬停事件class
    var questions=document.getElementsByClassName("list-item-question")[0];
    var wikis=document.getElementsByClassName("list-item-wiki")[0];
    var lessions=document.getElementsByClassName("list-item-lession")[0];
    var groups=document.getElementsByClassName("list-item-group")[0];

    var startLists=document.getElementsByClassName("start-list")[0];
    var moves=document.getElementsByClassName("move-list")[0];
    var types=document.getElementsByClassName("type-list")[0];
    var typeArray=types.children;

    var contents=document.getElementsByClassName("content")[0];

    var contentArray=contents.children;

    function showHide(){
        startLists.style.display='none';
        moves.style.display='block';
    }
    questions.onmouseover=function(){
        showHide();
        setClassName(0);
    }
    wikis.onmouseover=function(){
        showHide();
        setClassName(1);
    }
    lessions.onmouseover=function(){
        showHide();
        setClassName(2);
    }
    groups.onmouseover=function(){
        showHide();
        setClassName(3);
    }
    function setClassName(indexNum){
        for (var i = 0; i<typeArray.length; i++) {
            if(i != indexNum)
            {
                typeArray[i].className='';
                contentArray[i].style.display='none';
            }
            else{
                typeArray[i].className='active';
                contentArray[i].style.display='block';
            }
        }
    }
    typeArray[0].onmouseover=function(){
        setClassName(0);
    }
    typeArray[1].onmouseover=function(){
        setClassName(1);
    }
    typeArray[2].onmouseover=function(){
        setClassName(2);
    }
    typeArray[3].onmouseover=function(){
        setClassName(3);
    }

    // 推荐课程
    var hotLessons=document.getElementsByClassName("hotLesson")[0];
    var hotLessonArray=hotLessons.children;
    var hotLessonboxs=document.getElementsByClassName("hot-lessonbox-class")[0];
    var hotLessonboxArray=hotLessonboxs.children;

    hotLessonArray[0].className='on';
    for (var i = 0; i < hotLessonArray.length; i++) {
        hotLessonArray[i].onmouseover=function(){
            for (var j = 0; j < hotLessonArray.length; j++) {
                if(hotLessonArray[j].className=='on'){
                    hotLessonArray[j].className='';
                }
                if(hotLessonboxArray[j].className=='lesson-list'){
                    hotLessonboxArray[j].className='lesson-list-hidden';
                }
            }
            this.className='on';
            for (var i = 0; i < hotLessonArray.length; i++) {
                if(hotLessonArray[i].className=='on'){
                   hotLessonboxArray[i].className='lesson-list';
                }
            }
        }
    }
}
