import React, { Component } from 'react';
import Name from './Name';
import ChatMessages from './ChatMessages';
import AddMessage from './AddMessage';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired
  }

  render () {
    return (
      <div className="container">
          <div className="chat-window">
            <Name user={this.props.users[0].username} />
            <ChatMessages />
            <AddMessage />
          </div>

          <div className="chat-window">
            <Name user={this.props.users[1].username} />
            <ChatMessages />
            <AddMessage />
          </div>
        </div>
    );
  }
}

export default ChatWindow;