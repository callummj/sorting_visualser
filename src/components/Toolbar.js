import React from "react";
import './Toolbar.css';
import Visualiser from "./Visualiser";
import {render} from "react-dom";





export default function Toolbar(props){

    const handleClick = e => props.generateData(true);


    return(
        <div>
            <nav className="Toolbar">
                <button value = "generateData" onClick={props.buttonCallBack}>Generate New Data</button>
                <button>Sort</button>
            </nav>


        </div>
    );




}

