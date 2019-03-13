import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';

class App extends Component {

  state = {
    users: [
      { username: 'Amy' },
      { username: 'John' }
    ],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  newMessage = message => {
    this.setState( oldState => ({
      messages: [...oldState.messages, message]
    }));
  }

  render() {
    const { users, messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Two-window Chat</h1>
        </header>
        <ChatWindow users={users} messages={messages} newMessage={this.newMessage} />
      </div>
    );
  }
}

export default App;