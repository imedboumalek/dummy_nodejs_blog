const express = require('express');
const morgan = require('morgan');

// initialize express
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');

app.listen(port);

app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));
// app.use((req, res, next) => {
//     console.log("new request was made:");
//     console.log("host: ", req.hostname);
//     console.log("url: ", req.url);
//     console.log("path: ", req.path);
//     console.log("method: ", req.method);
//     next();
// })
app.get('/', (req, res) => {

    res.status(200).render('index', {
        title: 'home'
    });
})
app.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: 'about'
    })
})

// 404 page
app.use((req, res) => {

    res.status(404).render('404', {
        title: '404'
    });
})