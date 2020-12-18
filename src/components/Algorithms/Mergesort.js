//initalise steps here so they are in scope
let steps;

function MergeSortDriver(data) {
    steps = [];
    mergesort(data, 0, data.length);
    return steps;
}
//merge function for subarrays
function merge(data, low, middle, high) {
    var temp = [];
    var length = middle - low;
    var i, tempMiddle, tempLow;
    // save left subarray
    for (i = 0; i < length; i++) {
        // animate this move
        temp[i] = data[low + i];
        steps.push([...data]);
    }
    // merge subarrays
    i = 0;
    tempMiddle = middle;
    tempLow = low;
    while ((i < length) && (tempMiddle < high)) {
        if (temp[i] <= data[tempMiddle]) {
            data[tempLow++] = temp[i++];
        } else {
            data[tempLow++] = data[tempMiddle++];
        }steps.push([...data]);
    }
    while (i < length) {
        data[tempLow++] = temp[i++];
        steps.push([...data]);
    }
}
function mergesort(array, low, high) {
    if (high - low > 1) {
        var middle = low + ((high - low) >> 1);
        mergesort(array, low, middle);
        mergesort(array, middle, high);
        merge(array, low, middle, high);
    }
}
export default MergeSortDriver


//https://www.geeksforgeeks.org/merge-sort/

//https://stackoverflow.com/questions/61845367/how-do-i-animate-draw-a-merge-sort-visualization