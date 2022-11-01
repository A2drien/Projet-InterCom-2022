const PATH_FACTORING = "../pages/factoring/"

$(document).ready(function () {
    init();
});

// Importe le header, la page de news à droite et le footer
function init() {
    $('footer').load(PATH_FACTORING + "footer.html");
    $('header').load(PATH_FACTORING + "header.html");
    $('#news').load(PATH_FACTORING + "news.html");
}