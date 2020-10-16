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


    quickSortHandler = () => {

        let parent = this;
        let array = this.state.data;
        let timer = setInterval(function () {
            if (parent.quickSort(array) === false) {
                parent.bubbleSortTable(array)
            } else {
                clearInterval(timer)
            }
        }, 50);

        this.setState({data: this.quickSort(this.state.data)});
    }


    quickSort(startArray) {
        if (startArray.length <= 1) {
            return startArray;
        } else {
            var leftArray = [];
            var rightArray = [];
            var newArray = [];
            var partitionPoint = startArray.pop(); //Start at the end of the array
            var arrLength = startArray.length; //gets a fixed length value as it will change

            for (var i = 0; i < arrLength; i++) {

                if (startArray[i] <= partitionPoint) {
                    leftArray.push(startArray[i]);
                } else {
                    rightArray.push(startArray[i]);

                }

                var updateVar =[]
                this.update(updateVar.concat(leftArray, partitionPoint, rightArray))

            }
            return newArray.concat(this.quickSort(leftArray), partitionPoint, this.quickSort(rightArray));
        }
    }


    mergeSortHandler = () =>{
        this.setState({data: this.mergeSort(this.state.data)})
        console.log("arr: " + this.mergeSort(this.state.data))
    }

    mergeSort(arr){
        var len = arr.length;
        if(len <2)
            return arr;
        var mid = Math.floor(len/2),
            left = arr.slice(0,mid),
            right =arr.slice(mid);
        //send left and right to the mergeSort to broke it down into pieces
        //then merge those
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


    sleep(duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, duration * 1000)
        })
    }







    update(array) {
        this.setState(state => ({
            date: array
        }));
    }



    componentWillUnmount() {
        clearInterval(this.interval);
    }


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
                    //this.setState({data: array});
                    j = arrayLength+1;
                    console.log("array: " + array)

                    //drawArray(array);
//ReactDOM.unmountComponentAtNode(parent)
                    //ReactDOM.render(document.getElementById('barArea'), this.dataToBars());

                }
            }
        }

        this.update(array);
        console.log("func ended")

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

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
       // logErrorToMyService(error, errorInfo);
        console.log("error");
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