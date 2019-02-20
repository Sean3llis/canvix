import React, { PureComponent } from 'react'
import times from 'lodash/times';
import styled from '@emotion/styled';
import { Consumer } from './App';

export const GRID_FACTOR = 100;

const Pixel = styled.span`
  background-color: ${props => props.color || 'black'};
  height: 6px;
  width: 6px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default class Grid extends PureComponent {
  buildPixels(rowIndex) {

  }

  buildGrid() {
    return times(GRID_FACTOR, rowIndex => {
      return this.buildPixels(rowIndex)
    });
  }

  _render(state) {
    return times(GRID_FACTOR, rowIndex => {
      const pixels = times(GRID_FACTOR, columnIndex => {
        const color = state.grid[`${rowIndex}-${columnIndex}`];
        return <Pixel color={color} onClick={state.handlePixelClick.bind(this, rowIndex, columnIndex)} key={`${rowIndex}.${columnIndex}`} />
      });
      return <Row key={rowIndex}>{pixels}</Row>
    })
  }

  render() {
    return (
      <Consumer>
        {state => this._render(state)}
      </Consumer>
    );
  }
}