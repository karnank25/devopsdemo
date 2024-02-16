import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../components/config";
import ActionProvider from "../components/ActionProvider";
import MessageParser from "../components/MessageParser";
import "../components/App.css";
import Close from "@/assests/image/close.svg";
import Bot from "@/assests/image/Bots.svg";
import Image from "next/image";

function App() {
  const [chatbotVisible, setChatbotVisible] = useState(false);
  const [closeVisible, setCloseVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
    setCloseVisible(!closeVisible);
  };

  const toggleClose = () => {
    setChatbotVisible(!chatbotVisible);
    setCloseVisible(!closeVisible);
  };

  return (
    <div className="App">
      {chatbotVisible ? (
        <Chatbot
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          config={config}
          placeholderText="Type your message"
        />
      ) : (
        <Image
          src={Bot}
          alt="Chatbot"
          onClick={toggleChatbot}
          className="avatar-image"
          priority
        />
      )}

      {closeVisible && (
        <Image
          src={Close}
          alt="Close Chatbot"
          onClick={toggleClose}
          className="close-image"
        />
      )}
    </div>
  );
}

export default App;
