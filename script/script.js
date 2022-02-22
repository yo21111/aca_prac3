let notice = document.getElementById("bbsNotice");
let gallery = document.getElementById("bbsGallery");

document.getElementById("button_notice").addEventListener("click", fnNotice);
function fnNotice() {
    notice.style.display="block";
    gallery.style.display="none";
    document.getElementById("button_notice").className="activeTab";
    document.getElementById("button_gallery").className="unactiveTab"
}

document.getElementById("button_gallery").addEventListener("click", fnGallery);
function fnGallery() {
    notice.style.display="none";
    gallery.style.display="table";
    document.getElementById("button_notice").className="unactiveTab";
    document.getElementById("button_gallery").className="activeTab"
}