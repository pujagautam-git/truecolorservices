 import { useState } from "react";
import { FaComments } from "react-icons/fa";
import "./Chat.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [message, setMessage] = useState("");

   
  // Your WhatsApp number (with country code, no + or spaces)
  const phoneNumber = "+61424652500"; // Example: 61 = Australia, 412345678 = mobile

  const sendMessage = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Opens WhatsApp Web or app
    setMessage("");
    setIsOpen(false);
  };


  return (
    <>
      {/* Floating Button */}
      <button 
        className="chat-float-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaComments className="chat-icon" />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <h3>Chat with Us</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chat-body">
            <p>Hello 👋 How can we help you today?</p>
            {/* You can replace this with real chat service or form */}
            <textarea placeholder="Type your message..."
            value={message} 
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="send-btn" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
