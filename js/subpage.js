//한줄이 통째로 주석처리 되어있는 부분은 실제로 사용하지 않아 주석처리 해둔 것이니 사용시 주석만 지워주시면 됩니다.
//
//************************************************************************************

var subpageNavItem = $('#subpage .subpage-nav-item');
var timelineImage = $('#history .timeline-image');
var portfolioThumb = $('#business-portfolio .portfolio-thumbnail');
var idealSummaryImg = $('#ideal .ideal-summary-image');
var idealValueIcon = $('.ideal-value-icon');

$(document).ready(function(){
    subpageNavItem.click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });

    timelineImage.innerHeight(timelineImage.innerWidth()*0.6);
    portfolioThumb.innerHeight(portfolioThumb.innerWidth()*0.6);
    idealSummaryImg.innerHeight(idealSummaryImg.innerWidth()*1.4);
    idealValueIcon.innerHeight(idealValueIcon.innerWidth());
});

$('html').click(function(e){
    if($(e.target).parents('.subpage-nav-item').length < 1){
        $('#subpage .subpage-nav-item').removeClass('active');
    }
});

$(window).resize(function(){
    timelineImage.innerHeight(timelineImage.innerWidth()*0.6);
    portfolioThumb.innerHeight(portfolioThumb.innerWidth()*0.6);
    idealSummaryImg.innerHeight(idealSummaryImg.innerWidth()*1.4);
    idealValueIcon.innerHeight(idealValueIcon.innerWidth());
});