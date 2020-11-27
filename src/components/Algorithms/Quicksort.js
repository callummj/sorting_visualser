import React from "react";


//Driver code for Quicksort
function Quicksort(data) {



    function QuickSort(array, left, right){
        var index;
        if (array.length > 1) {
            index = partition(array, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                QuickSort(array, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                QuickSort(array, index, right);
            }
        }
        return array;
    }


    function update(array) {
        console.log("UPDATING GRAPH")
        console.log(array)
        this.setState(state => ({
            data: array
        }));
    }
    function swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        steps.push([...items]);
    }

    function partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    let steps = [];

    let parent = this;


    QuickSort(data, 0, (data.length)-1);
    return steps;
}export default Quicksort;





