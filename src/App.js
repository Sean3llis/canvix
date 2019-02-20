import React, { Component } from 'react';
import firebase from './firebase';
import Grid from './Grid';
import Global from './Global';
import Palette from './Palette';

export const INITIAL_STATE = {
  grid: {},
  color: '#000000',
  handleColorClick: () => {}
}

export const { Provider, Consumer } = React.createContext(INITIAL_STATE);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
      handlePixelClick: this.handlePixelClick.bind(this),
      handleColorClick: this.handleColorClick.bind(this)
    }
  }

  componentDidMount() {
    this.gridRef = firebase.database().ref('grid');
    this.gridRef.on('value', this.updateSnapshot.bind(this));
  }

  updateSnapshot(snapshot) {
    this.setState({ grid: snapshot.val()})
  }

  handlePixelClick(r, c) {
    this.gridRef.child(`${r}-${c}`).set(this.state.color);
  }

  handleColorClick(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Provider value={this.state}>
        <Palette />
        <Grid />
        <Global />
      </Provider>
    );
  }
}

export default App;
