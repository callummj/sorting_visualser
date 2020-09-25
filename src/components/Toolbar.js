import React from "react";
import './Toolbar.css';
import Visualiser from "./Visualiser";


export default class Toolbar extends React.Component{
    render(){
        return(
            <nav className = "Toolbar">
                <button onClick={this.generateData}>Generate New Data</button>
                <button onClick={this.sortData}>Sort</button>
            </nav>
        );
    }

    generateData(){

        var data = [];
        for (var i = 0; i < 20; i++){
            data.push(Math.floor(Math.random() * 100)+1);
        }

        Visualiser.setState(data, data);
        //console.log("Random array: " + data);
        //Visualiser.drawArray(data);

    }

    sortData(){


        console.log("Sort Data button");
    }
}