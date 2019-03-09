import React, { Component } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Two-window Chat</h1>
        </header>
        <ChatWindow />
      </div>
    );
  }
}

export default App;