import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

updateName = (event) => {
    this.setState({name:event.target.value})
}

updateFruit = (event) => {
    this.setState({fruit:event.target.value})
}

render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.updateName}/>
            <select id="select-input" value={this.state.fruit} onChange={this.updateFruit} placeholder='Fruit'>
                <option value="" disabled selected>Select your Fruit</option>
                <option value="melon">Melon</option>
                <option value="aplle">Apple</option>
                <option value="bannana">Bannana</option>
            </select>
            <button onClick={() => console.log(this.state.name + ' has bought a ' + this.state.fruit)}>PICK</button>
        </div>
    );
}
}

export default Exercise2;