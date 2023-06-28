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
});