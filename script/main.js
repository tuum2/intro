/* 로딩화면 - 안됨*/
/*
$(window).load(function () {
    $('.intropage').hide();
});*/

$(function () {

    /* 
        대상 : ab1 bgimage
        불릿 클릭시 bgimage 변경하기
    */

    // 대상선정 : .ab1
    var tg = $('.ab1');

    // 대상선정 : #btnGroup (블릿버튼)
    var indic = $('#btnGroup');

    //슬라이드번호
    var sno = 0;

    //광클금지 (0허용 1불허용)
    var prot = 0;

    //////////////////블릿클릭시 슬라이드 이동하기//////////////////////////////
    
    //대상 : $('.ab1 li')
    $('#btnGroup li').click(function(){
        
        //클릭된 li 순번
                var idx = $(this).index(); // 불릿의 순번은??
                console.log("내버튼의번호는?" + idx);
        
        tg.css({
            backgroundImage:"url(images/bg"+(idx+1)+".jpg)"
        })
        
        indic.find("li").eq(idx).addClass("on")
                    .siblings().removeClass("on");
        
        
    }); /// click //// 



}); /// jqb /////////////////////////////
