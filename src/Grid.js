import React, { Component } from 'react'
import times from 'lodash/times';
import styled from '@emotion/styled';

export const GRID_FACTOR = 100;

const Pixel = styled.span`
  background-color: black;
  height: 6px;
  width: 6px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default class Grid extends Component {
  handlePixelClick(rowIndex, columnIndex) {
    console.log('columnIndex ~~>', columnIndex);
    const { firebase } = this.props;
    const gridRef = firebase.database().ref('grid').child(`${rowIndex}-${columnIndex}`);
    gridRef.set('black')
  }

  buildPixels(rowIndex) {
    const pixels = times(GRID_FACTOR, columnIndex => {
      return <Pixel onClick={this.handlePixelClick.bind(this, rowIndex, columnIndex)} key={`${rowIndex}.${columnIndex}`} />
    });
    return (
      <Row key={rowIndex}>{pixels}</Row>
    )
  }

  buildRows() {
    return times(GRID_FACTOR, rowIndex => {
      return this.buildPixels(rowIndex);
    });
  }

  render() {
    return (
      <div>
        {this.buildRows()}
      </div>
    );
  }
}