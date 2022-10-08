const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');
// readableStream.on('data', function(chunk) {
//     //console.log(chunk);
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

// process.stdout.write('Hello');
// process.stdout.write('Whats');
// process.stdout.write('cooking?');

const Transform =  stream.Transform;

function Capitalize() {
    Transform.call(this);
}

//discouraged
util.inherits(Capitalize, Transform);

Capitalize.prototype._transform = function(capitalChunk, codif, cb) { 
    // capitalChunk = capitalChunk.toString();
    capitalChunk = capitalChunk.toString().toUpperCase();
    this.push(capitalChunk);
    cb();
}

let capital = new Capitalize();

readableStream
    .pipe(capital)
    .pipe(process.stdout);

