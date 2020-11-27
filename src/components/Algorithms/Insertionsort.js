
import React from "react";



function Insertionsort(data){


    let steps = stepsGenerator(data);

    return steps;

}export default Insertionsort;


//Goes through the array, generating the instance of the array at each step and returns an array containing these instances in chronological order.
function stepsGenerator(data){
    let steps = [];
    console.log("array: " + data)
    for (let i = 1; i < data.length; i++) {
        let current = data[i];
        let j = i - 1;
        let temp = data;
        while ((j > -1) && (current < data[j])) {
            temp[j + 1] = temp[j];
            j--;
        }
        temp[j + 1] = current;
        steps.push([...data]);
    }
    return steps;
}