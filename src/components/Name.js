import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {

  static propTypes = {
    user: PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user}</div>
      </div>
    );
  }
}

export default Name;