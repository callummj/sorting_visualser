import React from "react";


//Returns the steps of bubble sort
function Bubblesort(data) {
    let steps = [];
    let change = [];
    let swapped;
    do {
        change = [];
        swapped = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i] > data[i + 1]) {
                let temp = data[i];
                data[i] = data[i + 1];
                data[i + 1] = temp;
                swapped = true;
                //change = [i, i+1]
                //steps.push([[...data], change]);
                steps.push([...data])
            }
        }
    } while (swapped);
    return steps;
}export default Bubblesort;


//https://www.geeksforgeeks.org/bubble-sort/