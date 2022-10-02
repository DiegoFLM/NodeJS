// function breakingFunk() {
//     return 3 + z;
// }

// try{
//     breakingFunk();
// } catch (e) {
//     console.log('Error: ' + e.message);
// }

function breakingFunkAsync(){
    setTimeout( function(){
        //try{
            return 3 + z;
        // } catch (e) {
        //     console.log('Error: ' + e.message);
        // }
    })
}

try{
    breakingFunkAsync();
} catch (e) {
    console.log('Error: ' + e.message);
}

console.log('After the error');
