const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use('/styles', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/public'));
app.use('/fonts', express.static(__dirname + '/public'));
app.use('/art', express.static(__dirname + '/public'));

app.set("view engine", "hbs");
app.enable('strict routing');
hbs.registerPartials(__dirname + "/views/partials");

const articleRouter = express.Router();

articleRouter.use("/:name", function(request, response) {
    response.render('articles/' + `${request.params.name}`);
});

articleRouter.use("/", function(request, response) {
    response.render("main");
});

app.use("/articles", articleRouter);


const diaryRouter = express.Router();

diaryRouter.use("/:name", function(request, response) {
    response.render('diary/' + `${request.params.name}`);
});

diaryRouter.use("/", function(request, response) {
    response.render("main");
});


app.use("/diary", diaryRouter);

const diaryChosenRouter = express.Router();

diaryChosenRouter.use("/:name", function(request, response) {
    response.render('diary-chosen/' + `${request.params.name}`);
});

diaryChosenRouter.use("/", function(request, response) {
    response.render("main");
});


app.use("/diary-chosen", diaryChosenRouter);



app.use(function(req, res, next) {
    if (req.path.substr(-1) == '/' && req.path.length > 1) {
        var query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
});


app.use("/about", function(request, response) {

    response.render("about");
});

app.use("/", function(request, response) {

    response.render("main");
});

app.use("/main", function(request, response) {

    response.render("main");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port);