/**
 * Copyright (c) 2016-present, zangrafx
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';

const PREDEFINED_TEXT = 'Chcę być mistrzem JavaScript. :)';

export default class MyFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typedText: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(evt) {
    this.setState({
      typedText: evt.target.value,
    });
  }
  render() {
    return (
      <div
        style={{
          borderColor: '#fc0',
          borderStyle: 'solid',
          borderWidth: 1,
          fontFamily: 'serif',
          margin: 20,
          padding: 20,
        }}
      >
        <span>
          Napisz coś ciekawego :)
        </span>
        <textarea
          onChange={this.handleTextChange}
          rows={5}
          value={PREDEFINED_TEXT.substr(0, this.state.typedText.length)}
        ></textarea>
      </div>
    );
  }
}
