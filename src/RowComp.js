import React, { Component } from 'react';
import './App.css';

class RowComp extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const columns = this.props.columns;
        const data = this.props.data;
        const actions = this.props.actions;
        const style = { textAlign: 'center' }
        return (
           <tr>
               <td>{this.props.index + 1}</td>
               {Object.keys(data).map((item, index) => {
                 return (<td key={index}>{data[item]}</td>)
                 })
               }
               {actions.map((item, index) => {
                   if (!data.enable) return "";
                   return (<td style={style} key={index}>
                       <button onClick={(e) => item.action(data)} type="button"><i className={item.css}></i></button>
                   </td>)
               })}
           </tr>
        );
    }
}

export default RowComp;
