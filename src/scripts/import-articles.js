const ARTICLES_PATH = "../pages/articles/";

$(document).ready(function () {
    $('#article-1').load(ARTICLES_PATH + 'article-1.html');
    $('#article-2').load(ARTICLES_PATH + 'article-2.html');
    $('#article-3').load(ARTICLES_PATH + 'article-3.html');
});