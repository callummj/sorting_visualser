import React from "react";

import './Visualiser.css';



import Toolbar from "./Toolbar";
import ReactDOM from "react-dom";

export default class Visualiser extends React.Component{

    //Initialises Data
    constructor (props){
        super(props);

        this.state = {
            data: [], //initialises data state
            bars: ""
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
            bars: this.dataToBars()
        });


    }



    //Creates a bar representing each piece of data in the array, using CSS capsulated in a <div>
    dataToBars = () => {
        console.log("data to bars")

        return( <div>
            {
                this.state.data.map(i => (
                    <div key = {Math.random() * 100} className="arraybar"  style={{
                        height: `${i}px`,
                    }}/>
                ))}
        </div>)

    }



    mergeSortHandler = () => {
        //this.setState({data: this.bubbleSort(this.state.data)});
        //this.bubbleSort(this.state.data);
        this.mergeSort();
    }


    mergeSort = () =>{

    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }



    bubbleSortHandler = () => {
        //this.setState({data: this.bubbleSort(this.state.data)});
        this.bubbleSort(this.state.data);
    }

    //Bubble sort method
    bubbleSort = (array) => {
        let arrayLength = array.length; //Gets a fixed variable of array length
            for (let i = 0; i < arrayLength; i++) {
                for (let j = 0; j < arrayLength; j++) { //Inner for loop to loop over
                    if (array[j] > array[j + 1]) {
                        let tmp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = tmp;
                        setInterval(this.setState({data: array}), 700);

                    }
                }
            }
        return array;
    };

    render() {

        //Renders a test generate button, and displays the data generated above.
        //TODO Make the generate button in the Toolbar work.

        return(
            <div>

                <button onClick={this.generateData}>Generate New Data</button>
                <button onClick={this.mergeSortHandler}>Merge Sort</button>
                <button onClick={this.bubbleSortHandler}>Bubble Sort</button>


                <p>{this.state.data}</p>


                <div className = "array-container">
                    {this.dataToBars()}
                </div>



                <p>test</p>
            </div>
        );
    }

}