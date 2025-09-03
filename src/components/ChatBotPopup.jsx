import { useState } from "react";
import Chatbot from "./ChatBot.jsx";
import db from "../assets/db.jpg";

const ChatBotPopup = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-0 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <div className="relative w-10 h-10 hover:cursor-pointer">
          <img
            src={db}
            alt="You"
            className="w-full h-full rounded-full object-cover border-2 border-white"
          />

          <span className="absolute top-0 right-0 block w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
        </div>
      </button>

      <Chatbot isOpen={open} onOpenChange={setOpen} />
    </>
  );
};

export default ChatBotPopup;
