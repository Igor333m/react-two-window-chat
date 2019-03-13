import React, { Component } from 'react';
import Name from './Name';
import ChatMessages from './ChatMessages';
import AddMessage from './AddMessage';
import PropTypes from 'prop-types';

class ChatWindow extends Component {

  static propTypes = {
    users: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    newMessage:PropTypes.func.isRequired
  }

  render () {
    const { users, messages, newMessage} = this.props;
    return (
      <div className="container">
          <div className="chat-window">
            <Name user={users[0].username} />
            <ChatMessages user={users[0].username} messages={messages} />
            <AddMessage user={users[0].username} onAddMessage={newMessage} />
          </div>

          <div className="chat-window">
            <Name user={users[1].username} />
            <ChatMessages user={users[1].username} messages={messages} />
            <AddMessage user={users[1].username} onAddMessage={newMessage} />
          </div>
        </div>
    );
  }
}

export default ChatWindow;