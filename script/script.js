let notice = document.getElementById("bbsNotice");
let gallery = document.getElementById("bbsGallery");
let btnNotice = document.getElementById("button_notice");
let btnGallery = document.getElementById("button_gallery");

document.getElementById("button_notice").addEventListener("click", fnNotice);
function fnNotice() {
    notice.style.display="table";
    gallery.style.display="none";
    btnNotice.className="activeTab";
    btnGallery.className="unactiveTab";
}

document.getElementById("button_gallery").addEventListener("click", fnGallery);
function fnGallery() {
    notice.style.display="none";
    gallery.style.display="table";
    btnNotice.className="unactiveTab";
    btnGallery.className="activeTab";
}