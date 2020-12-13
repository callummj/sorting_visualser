
import React from "react";



function Insertionsort(data){


    let steps = stepsGenerator(data);

    return steps;

}export default Insertionsort;


//Goes through the array, generating the instance of the array at each step and returns an array containing these instances in chronological order.
//i = first iterator
//j = second iterator where to insert
function stepsGenerator(data){
    let steps = [];
    for (let i = 1; i < data.length; i++) {
        let current = data[i]; //split between sorted/unsorted list
        let j = (i-1);
        let temp = data;
        while ((j > -1) && (current < data[j])) {
            temp[j + 1] = temp[j]; //insert element
            j--;
        }
        temp[j + 1] = current;
        data = temp;
        steps.push([...data]);
    }
    return steps;
}

//https://www.geeksforgeeks.org/binary-insertion-sort/