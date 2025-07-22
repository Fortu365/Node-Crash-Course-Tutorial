const http = require('http');

// Use the fs = [File System] to read and write files
const fs = require('fs');

// Requiring the lodash 
const lodash = require('lodash');

// Creating and Stirong the server value 
const server = http.createServer((req, res) => {
    /*
        console.log(req.url, req.method);
    */

    // Get rid of the above and start practice to use the lodash
    const num = lodash.random(0, 20); // random randomizes numbers from 0 - 20
    console.log(`The randomized value between [0-20]: ${num}`);

    // Creating the greet function 

    const greet = lodash.once(() => {
        console.log('Hello Success');
    });

    greet();
    greet(); // It will not run as we specifies the value of the lodash to run once

    // 1. set header content type being send to the browser
    res.setHeader('Content-Type', 'text/html');

    /*
        Below, we are creating a switch methid that will make user be able to 
        access any page of their choice. But here's a catch, if that page does not 
        exist, the error page which I created, will be seen by the user. 
    */ 

    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html';
            // Add the status code of the response 
            res.statusCode = 200;
            break;    
        
        case '/about.html':
            path += '/about.html';
            /* Add the status code of the response, 200 = The page your looking for, 
             is ok and found  */
            res.statusCode = 200;
            break;
        
         /*
            What will happen now if the user enters, /about-me.html,
             it will be the error page. So we want the user to be redirected (redirect)
             to the /about.html page. 
        */ 
       case '/about-us.html':
            // Add the status code of the response, 301 means redirect 
            res.statusCode = 301;
           
            // 1. We want to set the header of the location
            // 2. Where we want to redirect the the current page 
           res.setHeader('Location', '/about.html');  
            res.end();
            break;

        case '/other.html':
            path += '/other.html';
            // Add the status code of the response 
            res.statusCode = 200;
            break; 
                
        default:
            path += '404.html';
            // Add the status code of the response, 404 = Pge Not Found  
            res.statusCode = 404;
            break;
    }


    /* Use the response method to write to the request 
       made the content you want to send back to the browser 
    */
//    res.write('<head> <link rel="style-seet" href="#"> </head>');
//     res.write('<p>Hello, ninjas</p>');
//     res.write('<p>Hello again, ninjas</p>');

    // 3. End response and send it back to the browser 
    // res.end();

    // Send an HTML file 
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{

            /*res.write(data);
            res.end(); The short-cut of the above */ 
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});