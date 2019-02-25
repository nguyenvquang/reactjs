import React, { Component } from 'react';
import './App.css';

class RowComp extends Component {

    constructor(props, context) {
        super(props, context);
        this.onClick2 = this.onClick2.bind(this);
    }

    onClick2(event, action) {
       action();
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
                   return (<td style={style} key={index}>
                           {data.enable ?
                               <button onClick={ (e) => item.action(data)} type="button"><i className={item.css}></i></button>
                               : ""
                           }

                   </td>)
               })}
           </tr>
        );
    }
}

export default RowComp;
