const express = require('express');
const { dirname } = require('path');
const { title } = require('process');

// Express App 
const app = express(); // Invoke the funx to create the instance of express app

// Regiter View Engine 
app.set('view engine', 'ejs');  // Tells the browser that ejs will be using the templates 


// Listen for requests 
app.listen(3000);  // Returns server instance and assumes that we want to use the localhost

app.get('/', (req, res) => { 
    const blogs = [
        {title : "Yoshi finds eggs", snippet: "Code Snippet of Yoshi"},
        {title : "Mario finds stars", snippet: "Code Snippet of Mario"},
        {title : "Leo finds dogs", snippet: "Code Snippet of Leo"},
    ];
    //res.sendFile('./views/index.html', { root : __dirname});
    res.render('index', { title: 'Home', blogs});
}); 

app.get('/about', (req, res) => { 
   // res.sendFile('./views/about.html', { root : __dirname});
   res.render('about', { title: 'About'});
});

app.get('/other', (req, res) => { 
    //res.sendFile('./views/other.html', { root : __dirname});
    res.render('other', { title: 'Other'});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

/* Dealing with 404 page in Express. Works similar to the switch, as the deafult
    Always written at the bottom, cause it will run to the defualt[value] while the  
    page you're looking for exists*/
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root : __dirname});
    res.status(404).render('404', { title: '404'});
});

