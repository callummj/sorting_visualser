import React from "react";


//tester code: https://github.com/Chetans19/Javascript-data-structures-and-algorithms
//Driver code for Quicksort
function Quicksort(data) {


    function QuickSort(array, left, right){
        let index;
        if (array.length > 1) {
            index = partition(array, left, right); //parition the array to find the index
            if (left < index - 1) { //more elements on the left side of the pivot
                QuickSort(array, left, index - 1);
            }
            if (index < right) { //if the right side is larger than the left
                QuickSort(array, index, right);
            }
        }
        return array;
    }

    function swap(items, leftIndex, rightIndex){
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        steps.push([...items]);
    }

    function partition(items, left, right) {
        let pivot = items[Math.floor((right + left) / 2)] //Find the pivot of the array (centre element)
        let i = left //left pointer
        let  j  = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //Swap elements
                i++;
                j--;
            }
        }
        return i;
    }

    let steps = [];


    QuickSort(data, 0, (data.length)-1);
    return steps;
}export default Quicksort;





