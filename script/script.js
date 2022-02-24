$(function(){
    let notice = $("#bbsNotice");
    let gallery = $("#bbsGallery");
    let btnNotice = $("#button_notice");
    let btnGallery = $("#button_gallery");

    $(btnNotice).click(function(){
        $(notice).css({'display' : 'table'});
        $(gallery).css({'display' : 'none'});
        $(btnNotice).attr("class", "activeTab");
        $(btnGallery).attr("class", "unactiveTab");
    });
    
    $(btnGallery).click(function(){
        $(notice).css({'display' : 'none'});
        $(gallery).css({'display' : 'table'});
        $(btnNotice).attr("class", "unactiveTab");
        $(btnGallery).attr("class", "activeTab");
    });
});