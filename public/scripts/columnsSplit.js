function getColumnsNumber() {
    const width = screen.width
    let columnsCount;
    if (width < 1000) {
        columnsCount = 1;
    } else if (width < 1400) {
        columnsCount = 2
    } else if (width < 2000) {
        columnsCount = 3;
    } else if (width < 3000) {
        columnsCount = 4;
    } else columnsCount = 5;
    return columnsCount;
}

function createColumns(areaName) {
    const columnsCount = getColumnsNumber(areaName)
    const articleList = document.getElementsByClassName(areaName)[0];
    const articleNames = articleList.querySelectorAll("li");
    const articlesCount = articleNames.length;
    const articlesPerColumn = Math.ceil(articlesCount / columnsCount);
    const columns = []
    for (let i = 1; i <= columnsCount; i++) {
        const column = document.createElement("div");
        column.className = `${areaName}` + "-column-" + `${i}`
        articleList.appendChild(column)
        columns.push(column);
    }
    let currentColumnNumber = 1;
    let currentColumn = document.getElementsByClassName(`${areaName}` + "-column-1")[0];
    for (let i = 1; i <= articlesCount; i++) {

        if ((i % articlesPerColumn == 0) && (currentColumnNumber < columnsCount)) {

            currentColumnNumber++;
            currentColumn = document.getElementsByClassName(`${areaName}` + "-column-" + `${currentColumnNumber}`)[0]
        }

        currentColumn.appendChild(articleNames[i - 1]);
    }
}

createColumns("articles__list");
createColumns("diary__list");
createColumns("diary-chosen__list");