import React from "react";

import './Visualiser.css';

export default class Visualiser extends React.Component{

    constructor(props) {
        super(props);
        this.setState.data = "test data";
    }

    render(){
        return(
            <p>test</p>
        )
    }

    drawArray(data){
        console.log("array: " + data);
    }

}