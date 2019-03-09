import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {

  state = {
    users: [
      { username: 'Amy' },
      { username: 'John' }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Two-window Chat</h1>
        </header>
        <ChatWindow users={this.state.users}/>
      </div>
    );
  }
}

export default App;