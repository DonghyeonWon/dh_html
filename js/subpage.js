//한줄이 통째로 주석처리 되어있는 부분은 실제로 사용하지 않아 주석처리 해둔 것이니 사용시 주석만 지워주시면 됩니다.
//
//************************************************************************************

var subpageNavItem = $('#subpage .subpage-nav-item');
var timelineImage = $('#history .timeline-image');
var portfolioThumb = $('#business-portfolio .portfolio-thumbnail');
var idealSummaryImg = $('#ideal .ideal-summary-image');
var idealValueItem = $('#ideal .ideal-value-item');
var idealValueIcon = $('.ideal-value-icon');
var idealValueToggleBtn = $('#ideal .ideal-value-toggle');
var progressThumb = $('#recruiting .progress-thumb');
var employmentFilterExpand = $('#employment .employment-filter-name');
var disabledPagination = $('#employment .pagination-item .disabled a');
var searchConExpand = $('#employment .search-condition-expand');
var newspageThumb = $('#newspage .newspage-thumbnail');

$(document).ready(function(){
    subpageNavItem.click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });

    timelineImage.innerHeight(timelineImage.innerWidth()*0.6);
    portfolioThumb.innerHeight(portfolioThumb.innerWidth()*0.6);
    idealValueIcon.innerHeight(idealValueIcon.innerWidth()*0.6);
    progressThumb.innerHeight(progressThumb.innerWidth());
    searchConExpand.innerWidth(searchConExpand.innerHeight());
    newspageThumb.innerHeight(newspageThumb.innerWidth()*0.6);

    if($(window).innerWidth() >= 641) {
        idealSummaryImg.innerHeight(idealSummaryImg.innerWidth() * 0.5);
    }

    if(($(window).innerWidth() >= 481) && ($(window).innerWidth() <= 640)) {
        idealSummaryImg.innerHeight(idealSummaryImg.innerWidth() * 0.8);
    }

    disabledPagination.on('click',function(e){
        e.preventDefault();
    });
});

employmentFilterExpand.click(function(){
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
});

searchConExpand.click(function(){
    $('.employment-section-1').toggleClass('active');
});

$('#employment .reset-btn').click(function(){
    $('#employment .employment-search-form input').val('');
    $('#employment .employment-section-1 input:checkbox').prop('checked', false);
});

$('html').click(function(e){
    if($(e.target).parents('.subpage-nav-item').length < 1){
        $('#subpage .subpage-nav-item').removeClass('active');
    }
});

idealValueToggleBtn.click(function(){
    $(this).parent(idealValueItem).toggleClass('active');
});

$(window).resize(function(){
    timelineImage.innerHeight(timelineImage.innerWidth()*0.6);
    portfolioThumb.innerHeight(portfolioThumb.innerWidth()*0.6);
    idealValueIcon.innerHeight(idealValueIcon.innerWidth()*0.6);
    progressThumb.innerHeight(progressThumb.innerWidth());
    searchConExpand.innerWidth(searchConExpand.innerHeight());
    newspageThumb.innerHeight(newspageThumb.innerWidth()*0.6);

    if($(window).innerWidth() >= 641) {
        idealSummaryImg.innerHeight(idealSummaryImg.innerWidth() * 0.5);
    }

    if(($(window).innerWidth() >= 481) && ($(window).innerWidth() <= 640)) {
        idealSummaryImg.innerHeight(idealSummaryImg.innerWidth() * 0.8);
    }
});