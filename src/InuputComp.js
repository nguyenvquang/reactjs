import React, { Component } from 'react';
import './App.css';

class InuputComp extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const title = this.props.title;
        const name = this.props.name;
        const labelWith = this.props.labelWith;
        const inputWidth = this.props.inputWidth;
        const onChange = this.props.onChange;
        const style = {paddingBottom: '15px', display: 'block', cssFloat: 'left', width: '100%'};
        return (
            <div className="form-group">
               <div style={style}>
                   <label htmlFor={name} className={labelWith}>{title}</label>
                   <div className={inputWidth}>
                       <input type="text" className="form-control" id={name} name={name} onChange={onChange} />
                   </div>
               </div>
            </div>
        );
    }
}

export default InuputComp;
