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

    generateData = () =>{

        let dataTemp = [];

        for (let i = 0; i < 20; i++){
            dataTemp.push(Math.floor(Math.random() * 100)+1);
        }

        this.setState({
            data: dataTemp
        });
    }

    dataToBars = () =>{
        var element = '<div>'

        for (let i = 0; i < this.state.data.length; i++){
            element +=
                <div
                className="array-bar">

                </div>
        }

        element += '</div>';

        console.log("element: " + element);
        return element;
    }

    render() {
        return(
            <div>

                <button onClick={this.generateData}>Generate New Data</button>

                <p>{this.state.data}</p>

                <div className={'arrayArea'}>
                    <p>{this.dataToBars}</p>
                </div>

                <p>test</p>
            </div>
        );
    }

}