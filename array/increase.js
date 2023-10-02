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
    console.log(arr);
    //return arr;
}
reverse(["a", "b", "c", "d", "e"]);