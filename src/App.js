import React from 'react';
import './App.css';
import {ChatLinks} from './ChatLinks.js'
import {ChatBody} from './ChatBody'

function App() {
  return (
    <div className='app__main'>
      <div className='app__body'>
        <ChatLinks/>
        <ChatBody/>
      </div>
    </div>
  );
}

export default App;
