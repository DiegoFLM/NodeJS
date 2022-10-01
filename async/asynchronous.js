function hi(name, callback) {
//   console.log('just a log');
  setTimeout(
    function() {
      console.log('Hola' + name);
      callback(name);
    }, 2000);
}


function bye(name, callback) {
//   console.log('just a log');
  setTimeout(
    function() {
      console.log('Adios' + name);
      callback();
    }, 1000);
}


console.log('Start');

hi( 'Walter', 
    function (name) {
        bye( name, function () {
            console.log('End');
        }); 
    }
);

//console.log('End');



