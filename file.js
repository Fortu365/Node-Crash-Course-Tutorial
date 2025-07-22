// This page will be about the fs file system. 

const fs = require('fs');

// Reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// Writitng Files 

// fs.writeFile('./docs/blog1.txt', 'Hello My People', () => {
//     console.log('File Was Written');
// });

// fs.writeFile('./docs/blog2.txt', 'New CReated File', () => {
//     console.log('File Was Written');
// });

// Directories 
// mkdir is used to make directories 

// if(!fs.existsSync('./assets')) {
//    fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('Folder Created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Directory Removed / Deleted!!!');
//     });
    
// }

// Deleting Files  

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('File removed !!!');
    });
}else{
    fs.writeFile('./docs/deleteme.txt', '', () => {
        console.log('File Was Created ');
    });
}