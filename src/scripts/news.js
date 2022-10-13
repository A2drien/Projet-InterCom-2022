const PATH_ARTICLES = "../pages/articles/";

$(document).ready(function () {
    init();
});

// Choisir 2 nombres entre a et b inclus
function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Choisir 2 nombres différents entre 1 et 3 inclus
function randomArticle() {
    var numArticle1 = randomNumber(1,3);
    var numArticle2 = randomNumber(1,3);
    while (numArticle1 === numArticle2) {
        numArticle2 = randomNumber(1,3);
    }
    return [numArticle1, numArticle2];
}

// Importer les articles dans #random-article-1 et #random-article-2
function init() {
    let numRandomArticles = randomArticle();
    $("#random-article-1").load(PATH_ARTICLES + "article-" + numRandomArticles[0] + ".html");
    
    // Afficher le contenu de l'article 1 dans un console.log
    $.get(PATH_ARTICLES + "article-" + numRandomArticles[0] + ".html", function (data) {
        console.log(data);
    });

    console.log($(".navbar").html());
    
    
    $("#random-article-2").load(PATH_ARTICLES + "article-" + numRandomArticles[1] + ".html");
}