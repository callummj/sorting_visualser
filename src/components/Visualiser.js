import React from "react";

import './Visualiser.css';

export default class Visualiser extends React.Component{

    constructor(props) {
        super(props);
        this.setState.data = "test data";
    }

    render(){
        var data = [];

        for (let i = 0; i < 20; i++){
            data.push(Math.floor(Math.random() * (100 - 0 + 1) ) + 0);
        }

        console.log("Data: " + data);
        //TODO For some reason it generates two different lists. This must mean that the <visualiser/> component is being called twice somewhere

        return(
            <p>test</p>
        )
    }

    drawArray(data){
        console.log("array: " + data);
    }


}