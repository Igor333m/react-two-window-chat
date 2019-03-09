import React, { Component } from 'react';
import Name from './Name';
import ChatMessages from './ChatMessages';
import AddMessage from './AddMessage';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired
  }

  render () {
    const { users, messages } = this.props;
    return (
      <div className="container">
          <div className="chat-window">
            <Name user={users[0].username} />
            <ChatMessages messages={messages}/>
            <AddMessage />
          </div>

          <div className="chat-window">
            <Name user={users[1].username} />
            <ChatMessages messages={messages}/>
            <AddMessage />
          </div>
        </div>
    );
  }
}

export default ChatWindow;