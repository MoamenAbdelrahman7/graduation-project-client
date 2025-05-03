"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@/styles/chatbot.css';
import ReactMarkdown from "react-markdown"
import { io } from "socket.io-client";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);



  // const socket = io("http://localhost:8000"); // match your server port

  // socket.on("connect", () => {
  //   console.log("Connected with ID:", socket.id);
  // });

  // socket.emit("message", "Hello from client");

  // socket.on("message", (data) => {
  //   console.log("Received from server:", data);
  // });


  // Sample bot responses
  const botResponses = [
    "Hello! How can I assist you today?",
    "I'm here to help with any questions you might have.",
    "Could you please provide more details about your question?",
    "Thanks for reaching out! Let me check that for you.",
    "I understand your concern. Here's what I can tell you...",
    "Is there anything else you'd like to know?"
  ];

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when first opening
      setIsTyping(true);

      setTimeout(() => {
        addBotMessage("Hello! Welcome to our support chat. How can I help you today?");
      }, 500);
      setIsTyping(false);
    }
  };

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const addBotMessage = (text) => {
    // setTimeout(() => {
    addMessage(text, 'bot');
    // }, 1500);
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    setInputValue('');

    // fetch bot response
    setIsTyping(true);

    await fetch("http://127.0.0.1:8000/chatbot/ask/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: message })
    })
      .then(response => response.json())
      .then(data => {
        addBotMessage(data.structuredResponse); // Adjust this based on your actual response key
      })
      .catch(err => {
        console.error("Error communicating with chatbot:", err);
        addBotMessage("Sorry, something went wrong.");
      });

    setIsTyping(false);

    // const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Floating Button */}
      <button
        className={`chatbot-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
      >
        <FontAwesomeIcon icon={faRobot} />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <h3>Customer Support</h3>
          <button className="chatbot-close" onClick={toggleChat}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="chatbot-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender}-message`}
            >
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          ))}
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-footer">
          <input
            type="text"
            className="chatbot-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button className="chatbot-send" onClick={handleSendMessage}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;