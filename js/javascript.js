//한줄이 통째로 주석처리 되어있는 부분은 실제로 사용하지 않아 주석처리 해둔 것이니 사용시 주석만 지워주시면 됩니다.
//
//************************************************************************************

$(document).ready(function(){
    //사업영역 썸네일 오브젝트의 너비 받아옴
    var busiThumbWidth = $('.business-thumb').innerWidth();

    //사업영역 썸네일 오브젝트의 높이값을 너비값과 동일하게 설정
    $('.business-thumb').innerHeight(busiThumbWidth);
    //console.log(busiThumbWidth);
});