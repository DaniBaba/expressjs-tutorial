const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var out = `<h2>Welcome to Courses Section.</h2>`;
    out += `<a href="/courses">Courses Index Page</a><br>`;
    out += `<a href="/courses/android">Android Tutorial</a><br>`;
    out += `<a href="/courses/expressjs">Express JS Tutorial</a><br>`;
    out += `<a href="/courses/mongodb">Mongo DB Tutorial</a><br>`;

    res.send(out);
});

router.get('/android', (req, res) => {
    var out = `<h2>Welcome to Android Tutorial.</h2>`;
    out += `<a href="/courses">Courses Index Page</a><br>`;
    out += `<a href="/courses/android">Android Tutorial</a><br>`;
    out += `<a href="/courses/expressjs">ExpressJS Tutorial</a><br>`;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a><br>`;

    res.send(out);
});

router.get('/expressjs', (req, res) => {
    var out = `<h2>Welcome to ExpressJS Tutorial.</h2>`;
    out += `<a href="/courses">Courses Index Page</a><br>`;
    out += `<a href="/courses/android">Android Tutorial</a><br>`;
    out += `<a href="/courses/expressjs">ExpressJS Tutorial</a><br>`;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a><br>`;

    res.send(out);
});

router.get('/mongodb', (req, res) => {
    var out = `<h2>Welcome to MongoDB Tutorial.</h2>`;
    out += `<a href="/courses">Courses Index Page</a><br>`;
    out += `<a href="/courses/android">Android Tutorial</a><br>`;
    out += `<a href="/courses/expressjs">ExpressJS Tutorial</a><br>`;
    out += `<a href="/courses/mongodb">MongoDB Tutorial</a><br>`;

    res.send(out);
});

module.exports = router;