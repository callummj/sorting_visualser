import React from "react";


//tester code: https://github.com/Chetans19/Javascript-data-structures-and-algorithms
//Driver code for Quicksort
function Quicksort(data) {
    function QuickSort(array, left, right){
        let index;
        if (array.length > 1) {
            index = partition(array, left, right); //partition the array to find the index
            if (left < (index - 1)) { //more elements on the left side of the pivot
                QuickSort(array, left, index - 1);
            }
            if (index < right) { //if the right side is larger than the left
                QuickSort(array, index, right);
            }
        }
        return array;
    }

    function swap(data, leftIndex, rightIndex){
        let temp = data[leftIndex];
        data[leftIndex] = data[rightIndex];
        data[rightIndex] = temp;
        steps.push([...data]);
    }


    //splitting the array into subarrays
    function partition(data, left, right) {
        let pivot = data[Math.floor((right + left) / 2)] //Find the pivot of the array (centre element)
        while (left <= right) { //while the left value
            while (data[left] < pivot) {
                left++;
            }
            while (data[right] > pivot) {
                right--;
            }
            if (left <= right) {
                swap(data, left, right); //Swap elements
                left++;
                right--;
            }
        }
        return left;
    }

    let steps = [];
    QuickSort(data, 0, (data.length)-1);
    return steps;
}export default Quicksort;


//https://www.geeksforgeeks.org/quick-sort/




