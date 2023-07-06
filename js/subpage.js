//한줄이 통째로 주석처리 되어있는 부분은 실제로 사용하지 않아 주석처리 해둔 것이니 사용시 주석만 지워주시면 됩니다.
//
//************************************************************************************

var subpageNavItem = $('.subpage .subpage-nav-item');

$(document).ready(function(){
    subpageNavItem.click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });
});

$('html').click(function(e){
    if($(e.target).parents('.subpage-nav-item').length < 1){
        $('.subpage .subpage-nav-item').removeClass('active');
    }
});