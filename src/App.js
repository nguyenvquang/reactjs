import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComp from "./TableComp";
import StudentForm from "./StudentForm";

class App extends Component {

    constructor() {
        super();
        this.state = {rows: [
                    {id: 'MA01', name: 'Quang', enable: true},
                    {id: 'MA02', name: 'Ha', enable: true},
                    {id: 'MA03', name: 'Manh', enable: true}
            ]};
        this.addNew = this.addNew.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }
    addNew(item) {
        console.log(item);
        let d = this.state.rows;
        d.push({id: 'MA01', name: 'Quang22222', enable: true});
        this.setState({rows: d});
    }
    deleteRow(item) {

        let d = this.state.rows;
        let indexOf = d.indexOf(item);
        console.log(indexOf);
        if (indexOf !== -1) {
            d.splice(indexOf, 1);
            item.enable = false;
          //  this.setState({rows: d});
        }

    }

    saveForm(data) {
        console.log(data);
        let d = this.state.rows;
        d.push({id: data.maSV, name: data.tenSV, enable: true});
        this.setState({rows: d});
    }


  render() {
    return (
      <div className="App">
          <StudentForm actions={this.saveForm}/>
        <TableComp title={["Ma", "Ho ten"]} data={this.state.rows} actions={[{name: 'Add new', css: 'fa fa-pencil-square-o', action: this.addNew}, {name: 'Delete', css: 'fa fa-trash', action: this.deleteRow}]}/>
          <button onClick={ this.addNew}>Add New</button>
      </div>
    );
  }
}

export default App;
