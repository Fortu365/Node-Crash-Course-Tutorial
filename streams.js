const fs = require('fs');

// Creating a Read Stream 
const readStream  = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'} );

// Creating a Read Stream 
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {

//     console.log('========== NEW CHUNK ============');
//     console.log(chunk);

//     /*
//      From the above, everytime a new chunk is passed and read, it will be saved in the new file 
//      blog4.txt
//     */
//     writeStream.WR('\n>>>>>>>>>>>>>>>>>NEW CHUNK >>>>>>>>>>>>>>')
//     writeStream.write(chunk);

// });

/*
    PIPE 
    Is a method that can be used to shorten the above code from line 9 to 21

*/

readStream.pipe(writeStream);