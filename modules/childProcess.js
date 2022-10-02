const { exec, spawn } = require('child_process');
//Previous line is equivalent to:
//const exec = require('child_process').exec;

//exec('ls -la', (err, stdout, stderr) => {
// exec('node modules/console.js', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stdout);
// })


let process = spawn('ls', ['-la']);

console.log(process.pid)
console.log(process.connected)

process.stdout.on('data', function (data) {
    console.log('Process state: ');
    console.log(process.killed);
    console.log(data.toString());
});

process.on('exit', function () {
    console.log('Process finished');
    console.log('Process state: ');
    console.log(process.killed);
});

