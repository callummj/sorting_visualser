import React from "react";

//pass resultt into


let steps;
let fullArray;
let atomicArray;


function MergeSortDriver(data) {
    console.log("here")
    steps = [];
    atomicArray = [];
    mergeSort(data);
    return steps;

}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
        atomicArray.push(arr);
    }
    steps.push(atomicArray);

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    //steps.push([ ...arr, ...left, ...right ]);
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2

    // Base case or terminating case
    if(array.length < 2){
        return array
    }


    const left = array.splice(0, half)

    return merge(mergeSort(left),mergeSort(array))
}

export default MergeSortDriver