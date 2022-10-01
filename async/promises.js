function hi(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log('Hi ' + name);
                resolve(name);
                //reject('Error in hi()');
            }, 2000);
    }); 
}



  function talk(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log('bla bla bla');
            resolve(name);
        });
    });
  }
  
  
  function bye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(
            function() {
              console.log('Bye ' + name);
              resolve();
            }, 1000);
    });
  }


// ---

console.log('Start');

hi( 'Walter' )
    .then(talk)
    .then(bye)
    .then( (name) => {
        console.log('End');
    })
    .catch( error => {
        console.error('Error: ' + error);
    })