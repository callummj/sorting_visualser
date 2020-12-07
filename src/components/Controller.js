import React from "react";
import './Controller.css';

export default function Controller() {

    function sliderController(slide){
        let speed = slide.getValue;
        console.log("speed: " + speed)
    }

    return (
      <div id = {'controller'}>
          <button>Start</button>
          <button>Stop</button>

          <p id={'speedLabel'}>Speed:</p>
          <input type="range" min="1" max="100" value="50" className="slider" id="speedSlider" onInput={sliderController}/>


      </div>
    );

}