const bcrypt = require('bcrypt');

const password = '123safe!';

bcrypt.hash(password, 5, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
    bcrypt.compare(password, hash, function(err, res) {
        // res == true
        //console.log(err);
        console.log(res);
    }); 
});

