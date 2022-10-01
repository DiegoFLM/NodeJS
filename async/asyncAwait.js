async function hi(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(
            function() {
                console.log('Hi ' + name);
                resolve(name);
                //reject('Error in hi()');
            }, 1500);
    }); 
}



async function talk(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log('bla bla bla');
            resolve(name);
        }, 200);
    });
  }
  
  
async function bye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(
            function() {
              console.log('Bye ' + name);
              resolve();
            }, 1000);
    });
  }

  // ---

async function main() {

    let name = await hi('Tomy');
    await talk();
    await talk();
    await talk();
    await talk();
    await talk();
    await bye(name);
}

console.log('Start');
main();
console.log('End');