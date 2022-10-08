function asynchro(callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null, a);
        }catch(e){
            callback(e);
        }
    }, 1000);
}


    asynchro(function(err, data){   
        if(err){
            console.error('Error: ' + err.message);
            return false;
            //It's a good practice to stop the execution of the function with return, 
            //or throw the error so the error is not handled here, but this doesn't work
            //because the error is not thrown in the same context, so it's not catched
            //In general, in asynchronic functions we use error-first callbacks.
            //throw err;
            
        } else {
            console.log('Everything is fine, data is: ');
            console.log(data);
        }
    });
