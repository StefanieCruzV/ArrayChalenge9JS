function flaten(arrZd) {
    for (var i = 0; i < arrZd.length; i++) {
        var temp = arrZd[i];
        
        //var final = [];
      
         for(var j=0;j<temp.length;j++){
       final.push([j])
        //     console.log(final)
        // }
        // console.log(final + " ------")
    }
    return temp;
}
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(flaten(arr));



//  var mArray = [[1,2,3,4],[4,5,6],[7,8,9]];
// function flatten(myArray) {
//     var flattenArray = [];
//     for(var i = 0;i<myArray.length;i++) {
//         for(var j = 0;j<myArray[i].length;j++) {
//             flattenArray.push(myArray[i][j]);
//         }
//     }
//     return flattenArray;
// }
// var myArray = flatten(mArray);
// console.log(myArray);