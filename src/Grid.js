import React, { Component } from 'react'
import times from 'lodash/times';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const GRID_FACTOR = 100;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const pixelBase = css`
  background-color: black;
  height: 1px;
  width: 1px;
`

const rowBase = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Pixel = styled.span`
  ${pixelBase}
`;

export default class Grid extends Component {
  buildRow(columnIndex) {
    const pixels = times(GRID_FACTOR, n => {
      return <div style={pixelBase} key={`${columnIndex}.${n}`} />
    });
    return (
      <div key={columnIndex}>{pixels}</div>
    )
  }

  buildPixels() {
    return times(GRID_FACTOR, n => {
      return this.buildRow(n);
    });
  }

  render() {
    return (
      <div>
        {this.buildPixels()}
      </div>
    );
  }
}