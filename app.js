const express = require('express');
// initialize express
const app = express();

app.listen(3000);
app.get('/', (req, res) => {

    console.log(req.url);
    res.sendFile("./views/index.html", {
        root: __dirname,
    })
})
app.get('/about', (req, res) => {
    console.log(req.url);

    res.sendFile("./views/about.html", {
        root: __dirname,
    })
})
app.get('/about-me', (req, res) => {
    console.log(req.url);

    res.redirect("./views/about.html")
})
// 404 page
app.use((req, res) => {
    console.log(req.url);

    res.sendFile("./views/404.html", {
        root: __dirname
    })
})