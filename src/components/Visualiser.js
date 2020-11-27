import React from "react";


import Toolbar from "./Toolbar";

import './Visualiser.css';

import Bubblesort from "./algorithms/Bubblesort";
import Insertionsort from "./algorithms/Insertionsort";
import Quicksort from "./algorithms/Quicksort";


import ReactDOM from "react-dom";
import App from "../App";
import MergeSortDriver from "./algorithms/Mergesort";

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





    quickSortHandler = () =>{


        let parent = this;
        let steps = Quicksort ((this.state.data), 0, (this.state.data.length-1));

        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(this.update(steps[i]), console.log(steps[i])), 100*i);
        }


    }


    insertionSortHandler = () =>{

        let steps = [];
        let parent = this;
        //steps = parent.insertionSort(steps);
        console.log("insertionsort data: " + this.state.data)
        steps = Insertionsort(this.state.data);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i]), console.log(steps[i])), 100*i);
        }

    }

    bubbleSortHandler = () =>{

        let steps = [];
        let parent = this;
        steps = Bubblesort(this.state.data);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i]), console.log(steps[i])), 100*i);
        }
    }
/*
    mergeSortHandler = () =>{
        let steps = [];
        let parent = this;
        steps = MergeSort(this.state.data);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i]), console.log(steps[i])), 100*i);
        }
    }

*/


    mergeSortHandler = () =>{

        let steps = [];
        let parent = this;
        let result = [];
        steps = MergeSortDriver(this.state.data, result);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i]), console.log(steps[i])), 100*i);
        }
    }

/*
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
    }*/

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




    loopAlgs(){
       return(
           <div>
               {(this.state.algorithms.map(i => (
                   [i + ", "]
               )))}
           </div>
       );
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

