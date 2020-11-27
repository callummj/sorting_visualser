import React from "react";

//pass resultt into


let result;


function MergeSortDriver(data) {
    console.log("here")
    result = [];


    data = [4, 96, 1, 22, 76, 53, 63, 65, 81, 22, 78, 76, 79, 18, 23, 87, 29, 21, 4, 33];

    
    result.push(MergeSort(data))
    return result;
}


function  MergeSort(data) {



    const half = Math.floor(data.length / 2);

    // Base case or terminating case
    if(data.length < 2){
        return data
    }

    const left = data.splice(0, half)
    return merge(MergeSort(left),MergeSort(data))

    /*
    if (data.length > 1){
        let midPoint = Math.floor(data.length/2);
        let left = data.slice(0, midPoint);
        let right = data.slice(midPoint);
        console.log("left: " + left);
        console.log("right: " + right);
        return merge(MergeSort(left),MergeSort(right));
    }*/


}

function merge(left, right){
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
}
export default MergeSortDriver