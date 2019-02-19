import React, { Component } from 'react';
import firebase from './firebase';
import Grid from './Grid';
import Global from './Global';
import Palette from './Palette';

class App extends Component {
  handleClick(e) {
    e.preventDefault();
    console.log('e ~~>', e);
  }

  componentDidMount() {
    const gridRef = firebase.database().ref('grid');
    console.log('gridRef ~~>', gridRef);
    gridRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <Palette />
        <Grid firebase={firebase} />
        <Global />
      </div>
    );
  }
}

export default App;
