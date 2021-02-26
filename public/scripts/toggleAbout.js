const about = document.getElementsByClassName("header__about")[0];
const articles = document.getElementsByClassName("header__articles")[0];

about.style.color = "gray"
articles.onmouseover = function() {
    this.style.transform = "scale(1.1)"
}
articles.onmouseout = function() {
    this.style.transform = "scale(1)"
}