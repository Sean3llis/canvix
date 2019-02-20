import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Consumer } from './App';

export const COLORS = [
  '#C4505E',
  '#DB874A',
  '#F0C34C',
  '#50AB9F',
  '#4589D3',
  '#AE46CA',
  '#7B8895',
  '#4E5C6A',
];

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColorTile = styled.div`
  border-radius: 50%;
  background-color: ${props => props.color};
  height: 40px;
  width: 40px;
  margin: 6px;
  &:hover {
    cursor: pointer;
  }
`;

export default class Palette extends Component {
  buildColorTiles() {
    return COLORS.map(color => {
      return <ColorTile onClick={() => this.handleColorClick(color)} key={color} color={color} />
    });
  }

  _render(state) {
    this.handleColorClick = state.handleColorClick;
    return (
      <PaletteWrapper>
        {this.buildColorTiles()}
      </PaletteWrapper>
    );
  }

  render() {
    return <Consumer>{state => this._render(state)}</Consumer>
  }
}