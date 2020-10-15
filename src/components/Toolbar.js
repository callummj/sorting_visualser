import React from "react";
import './Toolbar.css';
import Visualiser from "./Visualiser";


export default class Toolbar extends React.Component {

    constructor(props) {
        super(props)
    }

    handleGenerateButton() {
        new Visualiser().generateData();
    }

    sortDataAction() {
        console.log("Sort data button clicked")
    }

    render() {

        const {whenClicked} = this.props;

        return (
            <div>
                <nav className="Toolbar">
                    <button onClick={this.handleGenerateButton.bind(this)}>Generate New Data</button>
                    <button onClick={this.sortDataAction}>Sort</button>
                </nav>
                <div id={'visualiserArea'}>
                    <Visualiser/>
                </div>
            </div>

        );
    }
}

