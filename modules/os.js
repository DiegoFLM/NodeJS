const os = require('os');

//console.log(os.arch());   // x64
// console.log(os.platform()); // win32

// console.log(os.cpus()); // [Object, Object, Object, Object]
//console.log(os.constants); // [Object]

const SIZE = 1024;

function kb(bytes) { return bytes / 1024; }
function mb(bytes) { return kb(bytes) / 1024; }
function gb(bytes) { return mb(bytes) / 1024; }

//console.log(os.freemem()); //free memory in bites
console.log(kb(os.freemem())); //free memory in kb
console.log(mb(os.freemem())); //free memory in Mb
console.log(gb(os.freemem())); //free memory in Gb

console.log(gb(os.totalmem())); //total memory in Gb

console.log(os.homedir()); //C:\Users\user
console.log(os.tmpdir()); //C:\Users\user\AppData\Local\Temp
console.log(os.hostname()); //DESKTOP-2QJQJ3N