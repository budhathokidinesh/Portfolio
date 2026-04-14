import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { sendChatToAI } from "./chat.js";
import db from "../assets/db.jpg";

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const getInitialBotMessage = () => ({
  from: "bot",
  text: "Hi! I'm Dinesh's AI assistant. Ask me anything about his skills, projects, or experience.",
  time: formatTime(),
});

const ChatBot = ({ isOpen, onOpenChange }) => {
  const [messages, setMessages] = useState([getInitialBotMessage()]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading || cooldown) return;

    const userMsg = { from: "user", text: input.trim(), time: formatTime() };
    const newMessages = [...messages, userMsg];
    setMessages([...newMessages, { from: "bot", text: "__typing__", time: "" }]);
    setInput("");
    setLoading(true);

    try {
      const aiResponse = await sendChatToAI(
        newMessages.map((m) => ({ role: m.from === "user" ? "user" : "model", content: m.text }))
      );
      setMessages([...newMessages, { from: "bot", text: aiResponse, time: formatTime() }]);
    } catch (err) {
      setMessages([...newMessages, { from: "bot", text: err.message || "Failed to get a response. Please try again.", time: formatTime() }]);
    } finally {
      setLoading(false);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 4000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] max-h-[calc(100vh-120px)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-700/60 bg-gray-900 animate-in fade-in slide-in-from-bottom-4 duration-200">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700/60">
        <div className="relative flex-shrink-0">
          <img src={db} alt="Dinesh" className="w-9 h-9 rounded-full object-cover border-2 border-yellow-400/50" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-gray-900" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">Dinesh's Assistant</p>
          <p className="text-green-400 text-xs">Online</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setMessages([getInitialBotMessage()])}
            className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-rose-400 hover:bg-gray-700 transition-all duration-200"
            title="Clear chat"
          >
            <RiDeleteBin6Line size={14} />
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-200"
            title="Close"
          >
            <RxCross2 size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 h-[320px] overflow-y-auto px-4 py-4 flex flex-col gap-4 bg-gray-950/50"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            {msg.from === "bot" && (
              <img src={db} alt="bot" className="w-7 h-7 rounded-full object-cover flex-shrink-0 mb-4" />
            )}
            <div className={`flex flex-col gap-1 max-w-[78%] ${msg.from === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words ${
                  msg.from === "user"
                    ? "bg-yellow-400 text-gray-900 rounded-br-sm font-medium"
                    : "bg-gray-800 text-gray-200 rounded-bl-sm border border-gray-700/50"
                }`}
              >
                {msg.text === "__typing__" ? <TypingDots /> : msg.text}
              </div>
              {msg.time && (
                <span className="text-[10px] text-gray-600 px-1">{msg.time}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-3 py-3 bg-gray-900 border-t border-gray-700/60">
        <div className="flex items-end gap-2 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 focus-within:border-yellow-400/50 transition-colors duration-200">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask me anything..."
            rows={1}
            className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 resize-none focus:outline-none max-h-24 leading-relaxed"
          />
          <button
            onClick={sendMessage}
            disabled={loading || cooldown || !input.trim()}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 mb-0.5"
          >
            <IoMdSend size={15} />
          </button>
        </div>
        {cooldown && (
          <p className="text-[10px] text-gray-600 text-center mt-1.5">Please wait a moment before sending again…</p>
        )}
      </div>
    </div>
  );
};

export default ChatBot;

const TypingDots = () => (
  <span className="flex items-center gap-1 py-0.5">
    {[0, 150, 300].map((delay) => (
      <span
        key={delay}
        className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
        style={{ animationDelay: `${delay}ms` }}
      />
    ))}
  </span>
);
