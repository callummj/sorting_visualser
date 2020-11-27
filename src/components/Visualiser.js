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
            algorithms: [],
            insertionSortData: [],
            quickSortData: [],
            bubbleSortData: [],
            mergeSortData: [],
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
            algorithms: [],
            insertionSortData: [],
            quickSortData: [],
            bubbleSortData: [],
            mergeSortData: [],

        });


    }




    //Creates a bar representing each piece of data in the array, using CSS capsulated in a <div>
    dataToBars = (algorithm) => {

        console.log("algorithm:" + algorithm)
        switch (algorithm){
            case "quickSort":
                return( <div id = "quicksort-bars">
                    {
                        this.state.quickSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>)

                break;
            case "bubbleSort":
                return( <div id = "bubblesort-bars">
                    {
                        this.state.bubbleSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>)
                break;
            case "insertionSort":

                return( <div id = "insertionsort-bars">
                    {
                        this.state.insertionSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>)
                break;
            case "mergeSort":
                return( <div id = "bars">
                    {
                        this.state.mergeSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>)
                break;
            default:
                return( <div id = "bars">
                    {
                        this.state.data.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>)
                break;
        }


    }




    quickSortHandler = () =>{

        this.addAlgorithm("quickSort");
        let parent = this;
        let steps = Quicksort ((this.state.quickSortData), 0, (this.state.quickSortData.length-1));

        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(this.update(steps[i], "quickSort"), console.log(steps[i])), 100*i);
        }


    }


    insertionSortHandler = () =>{
        this.addAlgorithm("insertionSort")
        let steps = [];
        let parent = this;
        //steps = parent.insertionSort(steps);
        console.log("insertionsort data: " + this.state.insertionSortData)
        steps = Insertionsort(this.state.insertionSortData);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "insertionSort"), console.log(steps[i])), 100*i);
        }

    }

    bubbleSortHandler = () =>{
        this.addAlgorithm("bubbleSort")
        let steps = [];
        let parent = this;
        console.log("here")
        steps = Bubblesort(this.state.bubbleSortData);
        console.log("here2")
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "bubbleSort"), console.log(steps[i])), 100*i);
        }
        console.log("here4")
    }
    /*
        mergeSortHandler = () =>{
            let steps = [];
            let parent = this;
            steps = MergeSort(this.state.MergeSortData);
            for (let i = 0; i < steps.length; i++){
                setTimeout(()=>(parent.update(steps[i]), console.log(steps[i])), 100*i);
            }
        }

    */


    mergeSortHandler = () =>{
        this.addAlgorithm("mergeSort")
        let steps = [];
        let parent = this;
        let result = [];
        steps = MergeSortDriver(this.state.mergeSortData, result);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "mergeSort"), console.log(steps[i])), 100*i);
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

/*
    update(array) {

        this.setState(state => ({
            data: array
        }));
    }
*/
    update(array, algorithm){
        console.log("Algorithm recieved: " + algorithm)
        switch (algorithm) {
            case "bubbleSort":
                this.setState({bubbleSortData: array})
                break;
            case "quickSort":
                console.log("updating quick sort")
                this.setState({quickSortData: array});
                break;
            case "insertionSort":
                this.setState({insertionSortData: array});
                break;
            case "mergeSort":
                this.setState({mergeSortData: array});
                break;
            default:
                break;
        }
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }



    addAlgorithm(algorithm){
        let result = this.state.algorithms;
        if (!(result.includes(algorithm))){
            result.push(algorithm)
            this.setState({algorithms: result});

            let data = this.state.data;
            console.log("state data: " + this.state.data)
            console.log("data copy: " + data)
            switch (algorithm){
                case "quickSort":
                    this.setState({quickSortData: this.state.data});
                    break;
                case "bubbleSort":
                    this.setState({bubbleSortData: this.state.data});
                    break;
                case "insertionSort":
                    console.log("insertion sort detected")
                    console.log("data2: " + data)
                    this.setState({insertionSortData: data});
                    console.log("data: " + this.state.insertionSortData)
                    break;
                case "mergeSort":
                    this.setState({mergeSortData: this.state.data});
                    break;
                default:
                    break;
            }
        }
    }

    loopAlgs(){
        return(
            <div>
                {(this.state.algorithms.map(i => (
                    this.dataToBars(i)
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



                <div id = {'algorithms'} className={'array-container'}>

                    {this.loopAlgs()}

                </div>



            </div>
        );
    }


}

