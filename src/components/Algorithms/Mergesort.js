



let steps;

function MergeSortDriver(data) {
    console.log("here")
    steps = [];
    mergesort(data, 0, data.length);
    for (let i = 0 ; i < steps.length; i++){
        console.log(i);
    }
    return steps;

}
function merge(a, lo, middle, hi) {
    var temp = [];
    var len = middle - lo;
    var i, tempMiddle, tempLow;
    // save left subarray
    for (i = 0; i < len; i++) {
        // animate this move
        temp[i] = a[lo + i];
        steps.push([...a]);
    }
    // merge subarrays
    i = 0;
    tempMiddle = middle;
    tempLow = lo;
    while (i < len && tempMiddle < hi) {
        if (temp[i] <= a[tempMiddle]) {
            // animate this move

            a[tempLow++] = temp[i++];
        } else {
            // animate this move
            a[tempLow++] = a[tempMiddle++];
        }steps.push([...a]);
    }
    // copy the remaining elements
    while (i < len) {
        // animate this move
        a[tempLow++] = temp[i++];
        steps.push([...a]);
    }
}


function mergesort(array, lo, hi) {
    if (hi - lo > 1) {
        var middle = lo + ((hi - lo) >> 1);
        mergesort(array, lo, middle);
        mergesort(array, middle, hi);
        merge(array, lo, middle, hi);
    }
}


export default MergeSortDriver


//https://www.geeksforgeeks.org/merge-sort/

//https://stackoverflow.com/questions/61845367/how-do-i-animate-draw-a-merge-sort-visualization