import React, { Component } from 'react';
import firebase from './firebase';
import Grid from './Grid';
import Global from './Global';

class App extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log('e ~~>', e);
    const itemsRef = firebase.database().ref('items');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <Grid />
        <Global />
      </div>
    );
  }
}

export default App;
