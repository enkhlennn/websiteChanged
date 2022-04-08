var express = require('express');
var http = require('http');
var ftp = require('ftp');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var conn = require('./connection/connection');
const ejs = require("ejs");
// local modules Route
var login = require('./routes/login');
var home = require('./routes/home')
var register = require('./routes/register')
var about = require('./routes/about')
var contact = require('./routes/contact')
var category = require('./routes/category')
var singlePost = require('./routes/singlePost')
var admin = require('./routes/admin')
var accountsRouter = require('./routes/accounts')
var connection = require('./connection/connection')


dotenv.config();

var app = express();
//use css and js and photos
// app.use('/public/', express.static('./public/'));
app.use(express.static(__dirname + '/public/'));

// app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.render("index", { data: 'Result' });
});

app.use('/', login);
app.use('/', home);
app.use('/', register);
app.use('/', about);
app.use('/', contact);
app.use('/', category);
app.use('/', singlePost);
app.use('/', admin);
app.use('/accounts', accountsRouter);

app.post('/registerNew', (request, response) => {
    const{ username, password, email } = request.body;
    // console.log(request.body)
    if(username && password && email){
        connection.query('INSERT INTO accounts (username, password, email, profilePicture, column_6) VALUES (?,?,?,?,?)', [username, password, email, 'NULL', 0], (error, results) => {
            if(error){
                // console.log('Amjiltgui');
                response.render('register', {error: 'Something went wrong'})
            }
            else{
                // console.log('Amjilttai')
                response.redirect("login")
            }
        })
    }
    // response.end();
})

app.listen(process.env.SERVER_PORT, () => console.log(`Server start ${process.env.SERVER_PORT}`));