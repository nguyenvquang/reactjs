import React, { Component } from 'react';
import './App.css';
import RowComp from "./RowComp";
import TheadComp from "./TheadComp";

class TableComp extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const data = this.props.data;
        const title = this.props.title;
        const body = [];

        data.map((item, index) => {
            body.push( <RowComp index={index} key={index} columns={['A', 'B']} data={item}/>);
        })
        return (
            <div className="App">
                <table className="table">
                    <TheadComp title={title}/>
                    <tbody>
                    {
                        body
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableComp;
