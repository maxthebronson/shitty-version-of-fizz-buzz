function fizzBuzz(num) {

    for (var i = 1; i <= num; i++) {
        if (i === 3 || i === 6 || i === 9 || i === 12) {
        console.log("Fizz");
            continue
        }
    
        else if ( i === 5 || i === 10 ) {
            console.log("Buzz");
            continue
    
        }

        else if ( i === 15) {

            console.log("FizzBuzz");
            continue
            
        }
         console.log(i);
    }

    return i;
    

}
