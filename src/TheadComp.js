import React, { Component } from 'react';
import './App.css';

class TheadComp extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const title = this.props.title;
        return (
            <thead>
                <th>#</th>
                {title.map((item, index) => {
                    return (<th key={index}>{item}</th>)
                })
                }
            </thead>
        );
    }
}

export default TheadComp;
