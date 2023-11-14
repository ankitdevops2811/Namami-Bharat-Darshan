// ChatBot.js
import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, user: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages([...messages, { text: 'I am a simple chatbot.', user: 'bot' }]);
      }, 500);
      setInputText('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', border: '1px solid #ccc', overflowY: 'auto' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.user === 'user' ? 'right' : 'left' }}>
            {message.user === 'user' ? 'You: ' : 'Bot: '}
            {message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
