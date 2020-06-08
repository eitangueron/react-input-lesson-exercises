import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    updateName = (e) => {
        this.setState({name:e.target.value})
    }

    updateAge = (e) => {
        this.setState({age :e.target.value})
    }
    
    handleChange = (e) => {
        const key = e.target.name === 'name' ? 'name' : 'age'
        const val = e.target.value
        this.setState({[key]:val})
    }

    print = () => {
        console.log(`${this.state.name} is ${this.state.age} years old and still rocking`)
    }

    render() {
        return (
            <div>
                <input id="name-input" name='name' value={this.state.name} onChange={this.handleChange}/>
                <input id="age-input" name='age' value={this.state.age} onChange={this.handleChange}/>
                <button onClick={this.print}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;