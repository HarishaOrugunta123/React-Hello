import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
 
  render() {
    return (
      <div>
        <button onClick={this.DecreaseItem}>Decrement</button>
        <span>{ this.state.clicks }</span>
        <button onClick={this.IncrementItem}>Increment</button>
      </div>
    );
  }
}

export default App;

