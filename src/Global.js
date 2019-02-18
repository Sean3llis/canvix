import React, { Component } from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export default class GlobalStyles extends Component {
  render() {
    return (
      <Global
        styles={css`
            ${emotionNormalize}
            html,
            body {
              padding: 0;
              margin: 0;
              background: white;
              min-height: 100%;
              font-family: Helvetica, Arial, sans-serif;
            }
          `}
      />
    );
  }
}