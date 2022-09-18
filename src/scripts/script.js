function sendLink(link) {
    window.location.href = link;
}

// Change the header to add in the HTML code in ../pages/menu.html
function importHeader() {
    //document.getElementById("truc").innerHTML = importHTML("../pages/menu.html");
    $("#truc").load('menu.html #machin');
}

window.onload = function () {
    importHeader();
};