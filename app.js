const express = require('express');
const { dirname } = require('path');
const { title } = require('process');

// Express App 
const app = express(); // Invoke the funx to create the instance of express app

// Regiter View Engine 
app.set('view engine', 'ejs');  // Tells the browser that ejs will be using the templates 


// Listen for requests 
app.listen(3000);  // Returns server instance 

app.get('/', (req, res) => { 
    const blogs = [
        {title: 'Yoshi finds no error', snippet: 'This is the code snippet for Yoshi'},
        {title: 'Fortunate', snippet: 'This is the code snippet for Fortunate'},
        {title: 'Mahlodi', snippet: 'This is the code snippet for Yoshi'},
    ];
    res.render('index', { title: 'Home'});
    
}); 

app.get('/about', (req, res) => { 
   res.render('about', { title: 'About'});
});

app.get('/other', (req, res) => { 
    res.render('other', { title: 'Other'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

/* Dealing with 404 page in Express. Works similar to the switch, as the deafult
    Always written at the bottom, cause it will run to the defualt[value] while the  
    page you're looking for exists*/
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});

