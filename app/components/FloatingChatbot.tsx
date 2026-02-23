"use client";

import { useEffect, useRef, useState } from "react"; import { motion, AnimatePresence } from "framer-motion";

interface Message { role: "user" | "bot"; text: string; }

const intents = [ { keywords: ["price", "rate", "cost"], response: "Tell me your fantasy and I’ll softly guide you with the perfect experience and pricing." }, { keywords: ["location", "where"], response: "I travel across premium locations. Tell me where you'd like me to meet you." }, { keywords: ["booking", "reserve"], response: "I’d love to spend time with you. Share your preferred timing so we can make it special." }, { keywords: ["time", "available"], response: "I’m available whenever you desire. Just tell me the moment you want me." }, { keywords: ["hello", "hi"], response: "Hey handsome… I’ve been waiting for you. What are you thinking about tonight?" }, ];

function getBotResponse(input: string) { const lower = input.toLowerCase(); const match = intents.find((i) => i.keywords.some((k) => lower.includes(k))); return match ? match.response : "Mmm… tell me a little more. I want to understand exactly what you desire."; }

export default function FloatingChatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState<Message[]>([]); const [input, setInput] = useState(""); const [typing, setTyping] = useState(false); const [position, setPosition] = useState({ x: 0, y: 0 }); const [dragging, setDragging] = useState(false); const [leadTriggered, setLeadTriggered] = useState(false);

const bottomRef = useRef<HTMLDivElement>(null);

useEffect(() => { if (open && messages.length === 0) { setTimeout(() => { setMessages([ { role: "bot", text: "Hey… I’m right here with you. Don’t be shy — tell me what you’re craving tonight.", }, ]); }, 400); } }, [open]);

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

  if (!leadTriggered && messages.length >= 3) {
    setLeadTriggered(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text:
            "I’d love to talk somewhere a little more private… message me on WhatsApp and let’s make tonight unforgettable 💕",
        },
      ]);
    }, 1800);
  }
}, 1400);

};

const handleDrag = (e: any, info: any) => { setPosition({ x: info.point.x - 80, y: info.point.y - 80 }); };

return ( <> <motion.button drag dragMomentum={false} onDragStart={() => setDragging(true)} onDragEnd={() => setDragging(false)} onDrag={handleDrag} animate={{ x: position.x, y: position.y }} onClick={() => !dragging && setOpen(true)} className="fixed bottom-6 right-6 z-50 bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg" > Talk to me </motion.button>

<AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="fixed bottom-6 right-6 w-[340px] h-[520px] bg-black border border-pink-500 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-pink-500">
          <p className="text-white font-semibold">Private Chat</p>
          <button onClick={() => setOpen(false)} className="text-white">
            ✕
          </button>
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
            <div className="flex gap-1 px-2">
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                className="w-2 h-2 bg-gray-400 rounded-full"
              />
            </div>
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