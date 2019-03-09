import React, { Component } from 'react';
import Name from './Name';
import ChatMessages from './ChatMessages';
import AddMessage from './AddMessage';


const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];


class ChatWindow extends Component {

  render () {
    return (
      <div className="container">
          <div className="chat-window">
            <Name />
            <ChatMessages />
            <AddMessage />
          </div>

          <div className="chat-window">
            <Name />
            <ChatMessages />
            <AddMessage />
          </div>
        </div>
    );
  }
}

export default ChatWindow;