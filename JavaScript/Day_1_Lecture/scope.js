var beatles;

function printNames(names) {
    
    function actuallyPrintingNames(){

        for(var i = 0; i < beatles.length; i++) {
            var name = beatles[i];

            console.log(`${name} was found at index ${i}`); 
        }

        console.log(`Name and index after the loop: ${name} and ${i}`);   // but what's going on here?!
    }

    actuallyPrintingNames();

}
printNames(beatles);
beatles = ["Paul", "George", "John", "Ringo"];
