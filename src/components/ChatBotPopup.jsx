import { useState } from "react";
import ChatBot from "./ChatBot.jsx";
import db from "../assets/db.jpg";

const ChatBotPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-200 ${open ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"}`}
        aria-label="Open chat"
      >
        <div className="relative w-13 h-13">
          {/* Pulse ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-yellow-400/30 animate-ping" />
          )}
          <img
            src={db}
            alt="Chat with Dinesh"
            className={`w-13 h-13 rounded-full object-cover border-2 transition-all duration-300 shadow-lg shadow-black/40
              ${open ? "border-yellow-400 scale-95" : "border-white group-hover:border-yellow-400 group-hover:scale-105"}`}
          />
          {/* Online dot */}
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-400 border-2 border-gray-900 rounded-full" />
        </div>
      </button>

      <ChatBot isOpen={open} onOpenChange={setOpen} />
    </>
  );
};

export default ChatBotPopup;
