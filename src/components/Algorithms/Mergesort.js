



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
function merge(a, lo, m, hi) {
    var temp = [];
    var len = m - lo;
    var i, j, k;
    // save left subarray
    for (i = 0; i < len; i++) {
        // animate this move
        temp[i] = a[lo + i];
        steps.push([...a]);
    }
    // merge subarrays
    i = 0;
    j = m;
    k = lo;
    while (i < len && j < hi) {
        if (temp[i] <= a[j]) {
            // animate this move

            a[k++] = temp[i++];
        } else {
            // animate this move
            a[k++] = a[j++];
        }steps.push([...a]);
    }
    // copy the remaining elements
    while (i < len) {
        // animate this move
        a[k++] = temp[i++];
        steps.push([...a]);
    }
}

function mergesort(a, lo, hi) {
    if (hi - lo > 1) {
        var m = lo + ((hi - lo) >> 1);
        mergesort(a, lo, m);
        mergesort(a, m, hi);
        merge(a, lo, m, hi);
    }
}


export default MergeSortDriver