/*Always Hungry
 Write a function that is given an array and each time the value is "food"
  it should console log "yummy". 
 If "food" was not present in the array console log "I'm hungry" once. */

function alwaysHungry(arr) {
    // your code here 
    var havefood = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
            havefood++;
        }
    }
    if (havefood >= 1) {
        console.log("I'm hungry");
    }

}
 alwaysHungry([3.14, "food", "pie", true, "food"]); // this should console log "yummy", "yummy"
 alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"copy
//-----------------------------------------------------------------------------

/* High Pass Filter
Given an array and a value cutoff,
 return a new array containing only the values larger than cutoff.*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (var i = 0; i < arr.length; i++) {
        if (cutoff < arr[i]) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}
 var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]copy

//-----------------------------------------------------------------------------

/*Better than average
Given an array of numbers return a count of how many 
of the numbers are larger than the average.*/

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    sum = sum / arr.length; //console.log(sum);

    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > sum)
            count++;
        //console.log(count);
    }
    // console.log(count);
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//-----------------------------------------------------------------------------
/*Array Reverse
Write a function that will reverse the values an array and return them.*/
function reverse(arr) {
    var x = 0;
    var y = arr.length - 1;
    while (x < y) {
        temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
        x++;
        y--;
        //console.log(arr + "i");
    }
    //console.log(arr);
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//-----------------------------------------------------------------------------
/*Fibonacci Array
Fibonacci numbers have been studied for years and appear
 often in nature. Write a function that will return
 an array of Fibonacci numbers up to a given length n.
  Fibonacci numbers are calculated by adding the last two
  values in the sequence together. So if the 4th value is 2 and the 5th value is 3
  then the next value in the sequence is 5.*/

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    while(n >fibArr.length){

      fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
        //console.log(fibArr);
    }
    //console.log(fibArr);
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
