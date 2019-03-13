import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatMessages extends Component {

  static propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.string.isRequired
  }
  render () {
    const { user, messages } = this.props;
    
    return (
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user ? 'message sender' : 'message recipient'
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ChatMessages;