const fs =require('fs');

function read(path, cb){
    fs.readFile(path, (err, data) => {
        //The file has already been read
        // if(err){
        //     cb(err);
        // } else {
        //     cb(null, data);
        // }
        cb(data.toString());
    });
}


function write(path, content, cb){
    fs.writeFile(path, content, function(err){
        if(err){
            cb( 'fs.writeFile error' + err);
        } else {
            cb('fs.writeFile success');
        }
    });
}



function erase(path, cb){
    fs.unlink(path, function(err){
        if(err){
            cb('fs.unlink error: ' + err);
        } else {
            cb('fs.unlink success');
        }
    });
}


//read(__dirname + '/file.txt', console.log)
//write(__dirname + '/newFile.txt', 'Hello files world', console.log)
erase(__dirname + '/newFile.txt', console.log)