import React from "react";


import Toolbar from "./Toolbar";
import Controller from "./Controller";

import './Visualiser.css';

import Bubblesort from "./algorithms/Bubblesort";
import Insertionsort from "./algorithms/Insertionsort";
import Quicksort from "./algorithms/Quicksort";
import Selectionsort from "./algorithms/Selectionsort"

import ReactDOM from "react-dom";
import App from "../App";
import MergeSortDriver from "./algorithms/Mergesort";



//CONVENTION:
//ALGORITHM: Merge Sort, Insertion Sort, Bubble Sort => Capital for each word and space between
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
            selectionSortData: [],
            generateData: false,
            sort: false,
        }


        console.log("poo start sort: " + this.state.sort)


        this.generateDataHandler.bind(this);
    }

    generateDataHandler(){
        console.log("generate data clicked");
        this.generateData()
    }

    stopSort(){
        this.setState({
            sort: false,
        })
    }

    //TODO start sort funciton: merge sort not working properly and quick sort has to press button twice
    startSort(){


        this.setState({
            sort: true,
        })

        console.log("sort: " + this.state.sort)


        if (this.state.sort){
            for (let i in this.state.algorithms){

                let steps = [];
                switch (this.state.algorithms[i]) {
                    case "Quick Sort":
                        steps = Quicksort ((this.state.quickSortData), 0, (this.state.quickSortData.length-1));
                        this.visualise(steps, this.getParent(), 100);
                        break;
                    case "Merge Sort":

                        let result = [];
                        steps = MergeSortDriver(this.state.mergeSortData, result);
                        this.visualise(steps, this.getParent(), 90);
                        break;

                    default:
                        console.log("i: " + this.state.algorithms[i])
                }

        }


            /*

            }*/
        }
    }

    componentDidMount() {

        this.generateData();
    }



    //Generates Data & sets the Data state to its value
    generateData = () =>{

        this.stopSort();

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
            selectionSortData: [],
            sort: false,
        });

    }


    //TODO decide if when an algorithm is removed: the data should be unordered if the user wants to re-run the algorithm
    removeAlgorithm(algorithmToRemove){
        let algorithms = this.state.algorithms;
        let newAlgorithms = []; //new list without the algorithm to be removed
        for (let i in algorithms){
            if (algorithms[i] != algorithmToRemove){
                newAlgorithms.push(algorithms[i]);
            }
        }
        console.log("new algs: " + newAlgorithms)
        this.setState({algorithms: newAlgorithms})
        console.log("algs state: " + this.state.algorithms)
    }


    //Creates a bar representing each piece of data in the array, using CSS capsulated in a <div>
    dataToBars = (algorithm) => {

        console.log("algorithm:" + algorithm)

        switch (algorithm){
            case "Quick Sort":
                return(
                    <div className={"Quick-Sort-Area"}>
                        <div>
                            <button className={"close-button"} onClick={()=>this.removeAlgorithm("Quick Sort")}>x</button>

                        <h2>{algorithm}</h2>
                        <div id = "quicksort-bars">
                        {
                            this.state.quickSortData.map(i => (
                                <div key = {Math.random() * 100} className="arraybar"  style={{
                                    height: `${i}px`,
                                }}/>
                            ))}
                        </div></div>
                    </div>)

                break;
            case "Bubble Sort":
                return(
                    <div className={"Bubble-Sort-Area"}>
                        <div>

                            <button className={"close-button"} onClick={()=>this.removeAlgorithm("Bubble Sort")}>x</button>
                        <h2>{algorithm}</h2>

                        <div id = "bubblesort-bars">
                            {
                                this.state.bubbleSortData.map(i => (
                                    <div key = {Math.random() * 100} className="arraybar"  style={{
                                        height: `${i}px`,
                                    }}/>
                                ))}
                        </div>
                        </div>
                    </div>)
                break;
            case "Insertion Sort":

                return(
                    <div className={"Insertion-Sort-Area"}>
                        <div>
                            <button className={"close-button"} onClick={()=>this.removeAlgorithm("Insertion Sort")}>x</button>

                      <h2>{algorithm}</h2>

                    <div id = "insertionsort-bars">
                    {
                        this.state.insertionSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div></div></div>)
                break;
            case "Merge Sort":
                return(
                    <div className={"Quick-Sort-Area"}>


                    <div> <button className={"close-button"} onClick={()=>this.removeAlgorithm("Merge Sort")}>x</button>
                        <h2>{algorithm}</h2>

                    <div id = "bars">
                    {

                        this.state.mergeSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div></div></div>)
                break;
            case "Selection Sort":
                return(
                    <div className={"Quick-Sort-Area"}>


                    <div><button className={"close-button"} onClick={()=>this.removeAlgorithm("Selection Sort")}>x</button>
                        <h2>{algorithm}</h2>

                    <div id = "bars">
                    {
                        this.state.selectionSortData.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>
                    </div></div>)
                break;
            default:
                return(
                    <div>
                        <h2>{algorithm}</h2>

                    <div id = "bars">
                    {
                        this.state.data.map(i => (
                            <div key = {Math.random() * 100} className="arraybar"  style={{
                                height: `${i}px`,
                            }}/>
                        ))}
                </div>
                    </div>)
                break;
        }


    }




    quickSortHandler = () =>{

        this.addAlgorithm("Quick Sort");
        let parent = this;
        let steps = Quicksort ((this.state.quickSortData), 0, (this.state.quickSortData.length-1));

        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(this.update(steps[i], "Quick Sort"), console.log(steps[i])), 100*i);
        }


    }


    getParent = () =>{
        return this;
    }

    async visualise(steps, parent, speed){
        console.log("visualise func")
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(this.update(steps[i], "Quick Sort"), console.log(steps[i])), speed*i);
        }
    }


    insertionSortHandler = () =>{
        this.addAlgorithm("Insertion Sort")
        let steps = [];
        let parent = this;
        //steps = parent.insertionSort(steps);

        steps = Insertionsort(this.state.insertionSortData);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "Insertion Sort"), console.log(steps[i])), 100*i);
        }

    }

    bubbleSortHandler = () =>{
        this.addAlgorithm("Bubble Sort")
        let steps = [];
        let parent = this;

        steps = Bubblesort(this.state.bubbleSortData);

        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "Bubble Sort"), console.log(steps[i])), 100*i);
        }

    }



    mergeSortHandler = () =>{
        this.addAlgorithm("Merge Sort")

        let steps = [];
        let parent = this;
        let result = [];
        steps = MergeSortDriver(this.state.mergeSortData, result);
        this.setState({sort: true})

        for (let i = 0; i < steps.length; i++){
            if (this.state.sort == true)
                console.log("sort in merge ahndler: " + this.state.sort)
                setTimeout(()=>(parent.update(steps[i], "Merge Sort"), console.log(steps[i])), 90*i);
        }
    }

    selectionSortHandler = () =>{
        this.addAlgorithm("Selection Sort")
        let steps = [];
        let parent = this;
        let result = [];
        steps = Selectionsort(this.state.selectionSortData);
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "Selection Sort"), console.log(steps[i])), 100*i);
        }
    }




    update(array, algorithm){
        console.log("Algorithm recieved: " + algorithm)
        switch (algorithm) {
            case "Bubble Sort":
                this.setState({bubbleSortData: array})
                break;
            case "Quick Sort":
                console.log("updating quick sort")
                this.setState({quickSortData: array});
                break;
            case "Insertion Sort":
                this.setState({insertionSortData: array});
                break;
            case "Merge Sort":
                this.setState({mergeSortData: array});
                break;
            case "Selection Sort":
                this.setState({selectionSortData: array});
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

            let data = [...this.state.data];

            switch (algorithm){
                case "Quick Sort":
                    this.setState({quickSortData: data});
                    break;
                case "Bubble Sort":
                    this.setState({bubbleSortData: data});
                    break;
                case "Insertion Sort":

                    this.setState({insertionSortData: data});
                    break;
                case "Merge Sort":
                    console.log("merge sort add data")
                    this.setState({mergeSortData: data});
                    break;
                case "Selection Sort":
                    this.setState({selectionSortData: data});
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


        //have no brackets to pass a reference to the function: brackets mean that the

        //Renders a test generate button, and displays the data generated above.
        //TODO Make the generate button in the Toolbar work.

        return(
            <div>


                <div>
                    <Toolbar generateDataCallback = {this.generateData} startSortCallback = {this.startSort}/>
                </div>

                <button onClick={this.generateData}>Generate New Data</button>
                <button onClick={this.mergeSortHandler}>Merge Sort</button>
                <button onClick={this.bubbleSortHandler}>Bubble Sort</button>
                <button onClick={this.quickSortHandler}>Quick Sort</button>
                <button onClick={this.insertionSortHandler}>Insertion Sort</button>
                <button onClick={this.selectionSortHandler}>Selection Sort</button>

                <button onClick={this.startSort.bind(this)}>Start button Temp </button>
                <button onClick={this.stopSort.bind(this)}>Stop button Temp </button>


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


                <div>
                    <p>startsort state: {this.state.sort}</p>
                </div>
                <div>
                    <Controller/>
                </div>
            </div>
        );
    }


}

//TODO callback functions
//callback is a function passed as param