/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

/// for 2 ////

function calculateTime( n) {
    let a = 0;
    for (let i = 0; i<100000; i++){
        a = a + i
    }
    result = a; 
}

const beforedate = new Date();
const beforetimeinMS = beforedate.getTime()

calculateTime(100000) 

const afterdate = new Date();
const aftertimeinMS = afterdate.getTime();
console.log(aftertimeinMS - beforetimeinMS)

//// answer 4 ///