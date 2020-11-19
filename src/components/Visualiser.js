import React from "react";

import './Visualiser.css';


import Toolbar from "./Toolbar";
import ReactDOM from "react-dom";
import App from "../App";

export default class Visualiser extends React.Component{

    //Initialises Data
    constructor (props){
        super(props);

        this.state = {
            data: [], //initialises data state
        }

    }

    componentDidMount() {
        this.generateData();

    }

    //Generates Data & sets the Data state to its value
    generateData = () =>{

        let dataTemp = [];
        for (let i = 0; i < 20; i++){
            dataTemp.push(Math.floor(Math.random() * 100)+1);
        }



        this.setState({
            data: dataTemp,
        });


    }



    //Creates a bar representing each piece of data in the array, using CSS capsulated in a <div>
    dataToBars = () => {
        return( <div id = "bars">
            {
                this.state.data.map(i => (
                    <div key = {Math.random() * 100} className="arraybar"  style={{
                        height: `${i}px`,
                    }}/>
                ))}
        </div>)

    }

//Bubble sort function
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
    //Bubble sort method
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

    insertionSortHandler = () =>{
        let steps = [];
        let parent = this;
        steps = parent.insertionSort(steps);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i]), console.log(steps[i])), 100*i);
        }

    }



    insertionSort = (steps) => {
        let n = this.state.data.length;
        let array = this.state.data;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = this.state.data[i];
            // The last element of our sorted subarray
            let j = i-1;
            let temp = this.state.data;
            while ((j > -1) && (current < this.state.data[j])) {
                temp[j+1] = temp[j];
                j--;
            }
            temp[j+1] = current;
            steps.push([...array]);
        }
        return steps;
    }


    quickSortSteps = [];

    quickSort = (array, left, right) =>{
        var index;
        if (array.length > 1) {
            index = this.partition(array, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSort(array, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSort(array, index, right);
            }
        }
        return array;
    }

    updateGraph = (stepsIndex) => {
        this.update(this.quickSortSteps[stepsIndex]);
    }

    quickSortHandler = () =>{
        let parent = this;
        let array = [...this.state.data];
        let stepsIndex = 0;

        parent.quickSort(array, 0, (parent.state.data.length)-1);

        let timer = setInterval(function () {
            parent.updateGraph(stepsIndex);
            stepsIndex = stepsIndex + 1;
            if (stepsIndex > parent.quickSortSteps.length - 1) {
                clearInterval(timer)
            }

        }, 100);

        return array;
    }


    update(array) {
        console.log("UPDATING GRAPH")
        console.log(array)
        this.setState(state => ({
            data: array
        }));
    }
    swap(items, leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        this.quickSortSteps.push([...items]);
    }

    partition(items, left, right) {
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
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }





    mergeSortHandler = () =>{

        this.setState({data: this.mergeSort(this.state.data)})
        console.log("arr: " + this.mergeSort(this.state.data))

    }

    mergeSort(arr){
        var len = arr.length;
        if(len <2)
            return arr;
        var mid = Math.floor(len/2);
        var left = arr.slice(0,mid);
        var right =arr.slice(mid);
        //send left and right to the mergeSort to broke it down into pieces
        //then merge those
        this.update (this.merge(this.mergeSort(left),this.mergeSort(right)));
        return this.merge(this.mergeSort(left),this.mergeSort(right));
    }

    merge(left, right){
        var result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while(l < lLen && r < rLen){
            if(left[l] < right[r]){
                result.push(left[l++]);
            }
            else{
                result.push(right[r++]);
            }
        }
        //remaining part needs to be addred to the result
        return result.concat(left.slice(l)).concat(right.slice(r));
    }

    // sleep time expects milliseconds
   sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    sleep(duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, duration * 1000)
        })
    }


    update(array) {

        this.setState(state => ({
            data: array
        }));
    }



    componentWillUnmount() {
        clearInterval(this.interval);
    }





    render() {

        //Renders a test generate button, and displays the data generated above.
        //TODO Make the generate button in the Toolbar work.

        return(
            <div>

                <button onClick={this.generateData}>Generate New Data</button>
                <button onClick={this.mergeSortHandler}>Merge Sort</button>
                <button onClick={this.bubbleSortHandler}>Bubble Sort</button>
                <button onClick={this.quickSortHandler}>Quick Sort</button>
                <button onClick={this.insertionSortHandler}>Insertion Sort</button>


                <p>
                    <div>
                        {(this.state.data.map(i => (
                        [i + ", "]
                        )))}
                    </div>


                    </p>


                <div id={'barArea'} className = "array-container">
                    {this.dataToBars()}
                </div>

            </div>
        );
    }


}

