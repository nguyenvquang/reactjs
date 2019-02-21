import React, { Component } from 'react';
import './App.css';

class TheadComp extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const title = this.props.title;
        const actions = this.props.actions;
        const style = { textAlign: 'center' }
        return (
            <tr>
                <th style={style}>#</th>
                {title.map((item, index) => {
                    return (<th style={style} key={index}>{item}</th>)
                })}

                {actions.map((item, index) => {
                    return (<th style={style} key={index}>{item.name}</th>)
                })
                }
            </tr>
        );
    }
}

export default TheadComp;
