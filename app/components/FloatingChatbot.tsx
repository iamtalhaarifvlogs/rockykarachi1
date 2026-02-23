"use client";

import { useEffect, useRef, useState } from "react"; import { motion, AnimatePresence } from "framer-motion";

interface Message { role: "user" | "bot"; text: string; }

const intents = [ { keywords: ["price", "rate", "cost"], response: "Our prices vary depending on your preferences. Please share your requirements for accurate details." }, { keywords: ["location", "where"], response: "We operate across multiple premium locations. Tell us your preferred area and we’ll guide you." }, { keywords: ["booking", "reserve"], response: "Booking is simple. Share your details and preferred timing so we can confirm availability." }, { keywords: ["time", "available"], response: "We are available 24/7. Let us know your preferred schedule." }, { keywords: ["hello", "hi"], response: "Hello! How can I assist you today?" }, ];

function getBotResponse(input: string) { const lower = input.toLowerCase(); const match = intents.find((i) => i.keywords.some((k) => lower.includes(k))); return match ? match.response : "I understand. Could you share more details so I can assist better?"; }

export default function FloatingChatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState<Message[]>([]); const [input, setInput] = useState(""); const [typing, setTyping] = useState(false); const bottomRef = useRef<HTMLDivElement>(null);

useEffect(() => { if (open && messages.length === 0) { setTimeout(() => { setMessages([{ role: "bot", text: "Hey 👋 I'm here to help. Ask me anything." }]); }, 400); } }, [open]);

useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

const sendMessage = () => { if (!input.trim()) return;

const userMsg: Message = { role: "user", text: input };
setMessages((m) => [...m, userMsg]);
setInput("");

setTyping(true);
setTimeout(() => {
  const reply = getBotResponse(userMsg.text);
  setTyping(false);
  setMessages((m) => [...m, { role: "bot", text: reply }]);
}, 1400);

};

return ( <> <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full shadow-lg" > Talk to me </button>

<AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-6 right-6 w-[340px] h-[520px] bg-black border border-pink-500 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-pink-500">
          <p className="text-white font-semibold">Chat Support</p>
          <button onClick={() => setOpen(false)} className="text-white">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                m.role === "user"
                  ? "ml-auto bg-pink-600 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              {m.text}
            </motion.div>
          ))}

          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-400 text-sm"
            >
              typing...
            </motion.div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="p-3 border-t border-pink-500 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-gray-900 text-white px-3 py-2 rounded-lg outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-pink-600 text-white px-4 rounded-lg"
          >
            Send
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</>

); }