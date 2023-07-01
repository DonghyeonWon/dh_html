//한줄이 통째로 주석처리 되어있는 부분은 실제로 사용하지 않아 주석처리 해둔 것이니 사용시 주석만 지워주시면 됩니다.
//
//************************************************************************************

$(document).ready(function(){
    //사업영역 썸네일 오브젝트의 너비 받아옴
    var busiThumbWidth = $('.business-thumb').innerWidth();
    //채용영역 썸네일 오브젝트의 너피 받아옴
    var recruitThumbWidth = $('.recruit-thumbnail').innerWidth();
    //소셜영역 소셜아이콘 높이 받아옴
    var socialIconHeight = $('.social-icon').innerHeight();
    
    //이전 스크롤값 저장
    var beforeScrollTop = 0;
    //스크롤 이벤트
    $(window).scroll(function(){
        //스크롤이 발생할때 마다 현재 스크롤값을 변수에 저장
        var currentScrollTop = $('html').scrollTop();

        //만약 현재 스크롤값이 200 이상이면
        if(currentScrollTop >= 200){
            //스크롤 계산 함수 실행
            scrollCalc(currentScrollTop);
        }else{ //현재 스크롤 값이 200 미만이면
            $('#header').removeClass('hidden'); //헤더에서 hidden 클래스 삭제
        }
    });

    function scrollCalc(cst){
        if(cst > beforeScrollTop) {
            $('#header').addClass('hidden');
            beforeScrollTop = cst;
        }else {
            $('#header').removeClass('hidden');
            beforeScrollTop = cst;
        }
        return;
    }

    $('.h-menu-btn').mouseenter(function(){
        $('#header').addClass("active");
    });
    $('#header').mouseleave(function(){
        $('#header').removeClass("active");
    });

    //사업영역 썸네일 오브젝트의 높이값을 너비값의 1.4배로 지정
    //$('.business-thumb').innerHeight(busiThumbWidth * 1.4);

    //채용영역 썸네일 오브젝트의 높이값을 너비값의 1.2배로 지정
    //$('.recruit-thumbnail').innerHeight(recruitThumbWidth * 1.2);

    //소셜영역 소셜아이콘 너비값을 높이값과 동일하게 설정
    $('.social-icon').innerWidth(socialIconHeight);
    //console.log(busiThumbWidth);

    //모바일 ~ 태블릿 관련 기능
    //GNB 여닫기
    $('.h-submenu-btn.h-menu').click(function(){
        $('#m-gnb').addClass('active');
    });
    $('#m-gnb .m-gnb-close img').click(function(){
        $('#m-gnb').removeClass('active');
    });

    //GNB 세부메뉴 여닫기
    $('#m-gnb .m-d1-item').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
});