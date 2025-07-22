const express = require('express');
const { dirname } = require('path');

// Express App 
const app = express(); // Invoke the funx to create the instance of express app

// Regiter View Engine 


// Listen for requests 
app.listen(3000);  // Returns server instance 

app.get('/', (req, res) => { /* Method used when you want to get the response, 
                        1. What path of the url do you want to listen to
                         2. Funx that takes the req and res objects  */
    //res.send('<p> Home Page </p>');
    res.sendFile('./views/index.html', { root: __dirname }); /*Shows us the current directory that we're currently in,on this file 
                                                        Means: It will firstly check the curr directory, then go to the files inside it*/
}); 

app.get('/about', (req, res) => { /* The same as the above  */
    //res.send('<p> About Page </p>');
    res.sendFile('./views/about.html', { root: __dirname }); // Same as the above, but with different pages 
});

app.get('/other', (req, res) => { /* The same as the above  */
    //res.send('<p> About Page </p>');
    res.sendFile('./views/other.html', { root: __dirname }); // Same as the above, but with different pages 
});

// Using Redirects InExpress, its a short cut as you don't have to set the status code, and end the res 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});


/* Dealing with 404 page in Express. Works similar to the switch, as the deafult
    Always written at the bottom, cause it will run to the defualt[value] while the  
    page you're looking for exists*/
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});

