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
            speed:  50,
        }



        this.generateDataHandler.bind(this);
    }

    generateDataHandler(){
        console.log("generate data clicked");
        this.generateData()
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

/*
    getColour(wholeData, key){
        console.log("data: " , key)
        console.log("wholeData: " , wholeData)
        let data = wholeData[0][key];
        let active = [] //active points in the algorithm to change their colour

        for (let i =0; i<wholeData[1].length; i++){

        }
        console.log("active: " , active)
        if (active != false){
            if (active == data){
                return "blue";
            }else{
                return "red"
            }
        }else{
            return "green"
        }

    }
*/
    //Creates a bar representing each piece of data in the array, using CSS capsulated in a <div>
    dataToBars = (algorithm) => {
        let data = []
        switch (algorithm){
            case "Bubble Sort":
                data = this.state.bubbleSortData;
                break;
            case "Selection Sort":
                data = this.state.selectionSortData;
                break;
            case "Insertion Sort":
                data = this.state.insertionSortData;
                break;
            case "Merge Sort":
                data = this.state.mergeSortData;
                break;
            case "Quick Sort":
                data = this.state.quickSortData;
                break;
        }

        let key = 0;
        return(
            <React.Fragment>
                <button className={"close-button"} onClick={()=>this.removeAlgorithm(algorithm)}>x</button>
                <h2>{algorithm}</h2>
                <div className={"bars"}>
                    {
                        data.map(i => (
                            <div key = {key++} className="arraybar" style={{
                                height: `${i}px`
                            }}/>
                        ))
                    }
                </div>
            </React.Fragment>)
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


    quickSortGetSteps = () =>{
        let parent = this;
        let steps = Quicksort ((this.state.quickSortData), 0, (this.state.quickSortData.length-1));

        return steps;
        /*
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(this.update(steps[i], "Quick Sort"), console.log(steps[i])), 100*i);
        }*/
    }
    insertionSortGetSteps = () =>{

        let steps = [];
        let parent = this;
        //steps = parent.insertionSort(steps);

        steps = Insertionsort(this.state.insertionSortData);
        return steps;
        /*
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "Insertion Sort"), console.log(steps[i])), 100*i);
        }*/

    }

    bubbleSortGetSteps = () =>{
        let steps = [];
        let parent = this;

        steps = Bubblesort(this.state.bubbleSortData);

        return steps;
        /*
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "Bubble Sort"), console.log(steps[i])), 100*i);
        }*/

    }



    mergeSortGetSteps = () =>{
        let steps = [];
        let parent = this;
        let result = [];
        steps = MergeSortDriver(this.state.mergeSortData, result);
        return steps;
        /*
        for (let i = 0; i < steps.length; i++){
            if (this.state.sort == true)
                console.log("sort in merge ahndler: " + this.state.sort)
                setTimeout(()=>(parent.update(steps[i], "Merge Sort"), console.log(steps[i])), 90*i);
        }*/
    }

    selectionSortGetSteps = () =>{

        let steps = [];
        let parent = this;
        let result = [];
        steps = Selectionsort(this.state.selectionSortData);
        return steps;
        /*
        for (let i = 0; i < steps.length; i++){
            setTimeout(()=>(parent.update(steps[i], "Selection Sort"), console.log(steps[i])), 100*i);
        }*/
    }




    update(array, algorithm){
        console.log("update array: " , array)
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


    calcFloat(i){
        if ((i%2) == 0){
            return "right";
        }else{
            return "left";
        }
    }

    calcWidth(i){
        if (i == 1){
            return "auto";
        }else{
            return "auto"
        }
    }


    loopAlgs(){
        return(
            <div className={"sortingArea"}>
                {(this.state.algorithms.map(i => (
                    <div className={"algorithm"} style={{ float: this.calcFloat(i), width: this.calcWidth(this.state.algorithms.length)}}>
                        {this.dataToBars(i)}
                    </div>
                )))}
            </div>
        );
        /*
        if (this.state.algorithms.length == 1){
            return(
                <div className={"sortingArea"}>
                    {(this.state.algorithms.map(i => (
                        <div className={"algorithm"}>
                            {this.dataToBars(i)}
                        </div>
                    )))}
                </div>
            );
        }else{

        }*/

    }





    //Creates a map of each algorithm and their steps ready for animation
    startSort(){
        const algsStepsMap = new Map();
        for (let i in this.state.algorithms){
            let steps = [];
            switch (this.state.algorithms[i]) {
                case "Merge Sort":
                    steps = this.mergeSortGetSteps();
                    algsStepsMap.set('Merge Sort', steps);
                    break;
                case "Bubble Sort":
                    steps = this.bubbleSortGetSteps();
                    algsStepsMap.set('Bubble Sort', steps);
                    break;
                case "Insertion Sort":
                    steps = this.insertionSortGetSteps();
                    algsStepsMap.set('Insertion Sort', steps);
                    break;
                case "Quick Sort":
                    steps = this.quickSortGetSteps();
                    algsStepsMap.set('Quick Sort', steps);
                    break;
                case "Selection Sort":
                    steps = this.selectionSortGetSteps();
                    algsStepsMap.set('Selection Sort', steps);
                    break;
                default:
                    break;
            }
            this.animate(this.state.algorithms[i], steps);
        }
        //this.animate(algsStepsMap);
    }

    animate(algorithm, steps){
        for (let i = 0; i < steps.length; i++){
            console.log("animate speed: " + this.state.speed)
            setTimeout(()=>(this.update(steps[i], algorithm), console.log(steps[i])), this.state.speed*i);
        }
    }


    stopSort(){}


    //Updates speed from the controller component
    updateSpeed = (speed) => {

        //flip value as speed used for timeout so 20 is faster than 80 but this doesn't make sense linguistically
        if (speed>50){
            let toSubtract = speed - 50;
            speed = 50 - toSubtract;
        }else if (speed < 50){
            let toAdd = 50 - speed;
            speed = 50 + toAdd;
        }

        console.log("speed: " + speed*100);
        this.setState({speed: speed*2})
    }

    render() {


        //have no brackets to pass a reference to the function: brackets mean that the

        //Renders a test generate button, and displays the data generated above.
        //TODO Make the generate button in the Toolbar work.

        return(
            <div>


                <div>
                    <Toolbar generateDataCallback = {this.generateData} startSortCallback = {this.startSort.bind(this)}/>
                </div>

                <button onClick={this.generateData}>Generate New Data</button>
                <button onClick={() => this.addAlgorithm("Merge Sort")}>Merge Sort</button>
                <button onClick={() => this.addAlgorithm("Bubble Sort")}>Bubble Sort</button>
                <button onClick={() => this.addAlgorithm("Quick Sort")}>Quick Sort</button>
                <button onClick={() => this.addAlgorithm("Insertion Sort")}>Insertion Sort</button>
                <button onClick={() => this.addAlgorithm("Selection Sort")}>Selection Sort</button>

                <button onClick={this.startSort.bind(this)}>Start button Temp </button>
                <button onClick={this.stopSort.bind(this)}>Stop button Temp </button>


                <p>
                    <div>
                        {(this.state.data.map(i => (
                            [i + ", "]
                        )))}
                    </div>

                </p>

                {this.loopAlgs()}

                <div>
                    <Controller sortSpeedCallback = {this.updateSpeed.bind(this)}/>
                </div>
            </div>
        );
    }


}

//TODO callback functions
//callback is a function passed as param