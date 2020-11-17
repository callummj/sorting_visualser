import React from "react";
import Visualiser from "../Visualiser";


export default class Bubblesort extends Visualiser{

    bubbleSortTable(array) {
        console.log("func called")
        let stopLoop = true;
        let stopNestedLoop = false;
        let arrayLength = array.length; //Gets a fixed variable of array length
        for (let i = 0; i < arrayLength; i++) {
            for (let j = 0; j < arrayLength; j++) { //Inner for loop to loop over
                if (array[j] > array[j + 1] && stopNestedLoop === false) {
                    let tmp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = tmp;
                    stopNestedLoop = true;
                    stopLoop = false; //Allows for the interval timer to run in the handler function
                    j = arrayLength+1;
                    console.log("array: " + array)

                }
            }
        }

        this.update(array);
        return stopLoop;
    }

    bubbleSortHandler = () => {
        let parent = this;
        let array = this.state.data;
        let timer = setInterval(function () {
            if (parent.bubbleSortTable(array) === true) {
                clearInterval(timer)
            }

        }, 100);

        return array;
    };
}
