//const p = require('process');


process.on('exit', () => {
    console.log('The process has finished');
    setTimeout(() => {
        console.log('This message will not be shown');
    }, 0);
});


process.on('beforeExit', () => {
    console.log('The process is about to end');
});


//unhandled promise rejection
process.on('unhandledRejection', (err, origin) => { 
    console.error('Unhandled rejection');
    console.error(err);
});     

//uncached exception
process.on('uncaughtException', (err, origin) => {
    console.error('Unhandled exception');
    console.error(err);
});

ghostFunction();


