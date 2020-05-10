const express = require('express');
const app = express();


//body-parser: start
const bodyParser = require('body-parser');
//JSON parsing
app.use(bodyParser.json());

//Url Encoded data parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/account', (req, res) => {
    res.send(req.body);
});
//body-parser: end


//cookie-parser: start
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/cookie', (req, res) => {
    res.cookie('username', 'Daniyal Saleem', { maxAge: 60000 });
    res.send('Cookie Set...');
});

app.get('/cookie_check', (req, res) => {
    res.send('Cookie Value: ' + req.cookies.username);
});

app.get('/cookie_clear', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie Value: ' + req.cookies.username);
});
//cookie-parser: start


//express-session: start
const session = require('express-session');
app.use(session({ secret: 'secret value' }));

app.get('/session', (req, res) => {
    if (req.session.count) {
        req.session.count++;
        res.send('Count: ' + req.session.count);
    } else {
        req.session.count = 1;
        res.send('Welcome Count: ' + req.session.count);
    }
});
//express-session: end


//middleware: start
function loginfo(req, res, next) {
    console.log('Calling loginfo() from Middleware');
    next();
}

function addPerson(req, res, next) {
    let person = {
        name: 'Daniyal',
        city: 'Karachi'
    }

    req.person = person;
    next();
}

function addSpecificPerson(req, res, next) {
    let names = ['Daniyal', 'Danish', 'Ali', 'Moosa'];
    req.name = names[req.params.index];
    next();
}

app.use(loginfo);
app.use(addPerson);
app.use('/person/:index([0-3]{1})', addSpecificPerson);

app.get('/person', (req, res) => {
    res.send('Name: ' + req.person.name + ', City: ' + req.person.city);
});

app.get('/person/:index([0-3]{1})', (req, res) => {
    res.send('Name: ' + req.name);
});
//middleware: end


app.get('/', (req, res) => {
    res.send('Welcome to Express JS Tutorial.');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Section.');
});

app.get('/about/author', (req, res) => {
    res.send('Welcome Daniyal Saleem.');
});

app.post('/add_author', (req, res) => {
    res.send('Author added successfully.');
});

app.all('/all', (req, res) => {
    res.send('Manage all Http Requests.');
});


//routing: start
const courses = require('./router/courses');
app.use('/courses', courses);
//routing: end


//url-binding: start
app.get('/:company/profile/:id', (req, res) => {
    res.send('Company: ' + req.params.company + ', Profile ID: ' + req.params.id);
});

app.get('/message/:phone([0-9]{10})', (req, res) => {
    res.send('Message sent to Phone #: ' + req.params.phone);
});

app.get('*', (req, res) => {
    res.send('API not found...');
});
//url-binding: end


app.listen(80);