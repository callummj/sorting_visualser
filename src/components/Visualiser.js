import React from "react";

import './Visualiser.css';
import Toolbar from "./Toolbar";
import ReactDOM from "react-dom";

export default class Visualiser extends React.Component{

    //Initialises Data
    constructor (props){
        super(props);

        this.state = {
            data: [] //initialises data state
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
            data: dataTemp
        });
    }


    //Creates a bar representing each piece of data in the array, using CSS capsulated in a <div>
    dataToBars = () => {
        console.log("data to bars")
        return (
            <div>
                {
                    this.state.data.map(i => (
                        <div className="arraybar"  style={{
                            height: `${i}px`,
                        }}/>
                    ))}
            </div>
        );


    }

    render() {

        //Renders a test generate button, and displays the data generated above.
        //TODO Make the generate button in the Toolbar work.

        return(
            <div>

                <button onClick={this.generateData}>Generate New Data</button>

                <p>{this.state.data}</p>


                <div className = "array-container">
                    {this.dataToBars()}
                </div>


                <p>test</p>
            </div>
        );
    }

}