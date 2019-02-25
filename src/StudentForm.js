import React, { Component } from 'react';
import './App.css';
import InuputComp from "./InuputComp";

class StudentForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {maSV: '', tenSV: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event, actions) {
        event.preventDefault();
        // console.log(this.state);
        if (actions) actions(this.state);

    }


    render() {
        const title = this.props.title;
        const actions = this.props.actions;
        const style = { textAlign: 'center' }
        return (
            <form onSubmit={ e => this.handleSubmit(e, actions)}>
                <InuputComp title="Mã sinh viên" name="maSV" labelWith="col-md-2" inputWidth="col-md-10" onChange={this.handleChange}/>
                <InuputComp title="Họ tên" name="tenSV" labelWith="col-md-2" inputWidth="col-md-10" onChange={this.handleChange}/>
                <input type="submit" value="Save" className="btn btn-primary" />
            </form>
        );
    }
}

export default StudentForm;
