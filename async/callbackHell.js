function hi(name, callback) {
      setTimeout(
        function() {
          console.log('Hi ' + name);
          callback(name);
        }, 2000);
    }
    
    function talk(callback) {
        setTimeout( function() {
            console.log('bla bla bla');
            callback();
        });
    }
    
    
    function bye(name, callback) {
      setTimeout(
        function() {
          console.log('Bye ' + name);
          callback();
        }, 1000);
    }


    function conversation(name, times, callback) {
        if (times > 0) {
            talk(function() {
                conversation(name, --times, callback);
            });
        } else {
            bye(name, callback);
        }
    }

    
    // --
    
    console.log('Start');
    
    hi( 'Walter', function(){
        conversation('Walter', 3, function() {
            console.log('End');
        });
    });


    // hi( 'Walter', 
    //     function (name) {
    //         talk( function () {
    //             talk( function () {
    //                 talk( function () {
    //                     bye( name, function () {
    //                         console.log('End');
    //                     }); 
    //                 });
    //             });
    //         })
    //     }
    // );
    