import React from "react";
import './Controller.css';

export default function Controller(props) {

    let sliderController = () => {
        let speed = document.getElementById("speedController").value;
        props.sortSpeedCallback(speed)
    }

    return (
      <div id = {'controller'}>

          <p id={'speedLabel'}>Speed:</p>
          <input type="range" min="1" max="100" className="slider" id={'speedController'} onInput={sliderController}/>


      </div>
    );

}