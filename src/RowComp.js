import React, { Component } from 'react';
import './App.css';

class RowComp extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const columns = this.props.columns;
        const data = this.props.data;
        return (
           <tr>
               <td>{this.props.index + 1}</td>
               {Object.keys(data).map((item, index) => {
                 return (<td key={index}>{data[item]}</td>)
                 })
               }
           </tr>
        );
    }
}

export default RowComp;
