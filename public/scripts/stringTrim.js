function stringTrim(areaName) {
    const articleList = document.getElementsByClassName(areaName)[0];
    const articleNames = articleList.querySelectorAll("a");
    const articlesCount = articleNames.length;

    for (articleName of articleNames) {
        const text = articleName.innerHTML;
        if (text.length > 35) {
            articleName.title = text
            articleName.innerHTML = text.substr(0, 32) + "...";

        }

    }
}

stringTrim("articles__list")
stringTrim("diary-chosen__list")