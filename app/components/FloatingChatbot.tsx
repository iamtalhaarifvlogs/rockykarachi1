import { useState, useRef, useEffect } from "react"; import { motion } from "framer-motion";

export default function DraggableRomanticChatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState([ { role: "bot", text: "Hey love… I was waiting for you 💛" }, ]); const [input, setInput] = useState(""); const [typing, setTyping] = useState(false); const [leadCaptured, setLeadCaptured] = useState(false); const dragRef = useRef(null);

const fakeMemoryReply = (msg) => { const lower = msg.toLowerCase();

if (lower.includes("price") || lower.includes("rate"))
  return "Hmm… I’ll tell you everything, but only when you come a little closer 😌";

if (lower.includes("location"))
  return "I’m exactly where your curiosity wants me to be… message me and I’ll guide you 💕";

return "You’re interesting… tell me more about what you desire ❤️";

};

const sendMessage = () => { if (!input) return;

const newMsgs = [...messages, { role: "user", text: input }];
setMessages(newMsgs);
setInput("");
setTyping(true);

setTimeout(() => {
  const reply = fakeMemoryReply(input);

  const updated = [...newMsgs, { role: "bot", text: reply }];

  if (updated.length > 4 && !leadCaptured) {
    updated.push({
      role: "bot",
      text:
        "I think we should stop teasing here… come talk to me on WhatsApp where I can give you my full attention 💋",
    });
    setLeadCaptured(true);
  }

  setMessages(updated);
  setTyping(false);
}, 1400);

};

return ( <motion.div ref={dragRef} drag dragMomentum={false} className="fixed bottom-6 right-6 z-50" > {!open && ( <button onClick={() => setOpen(true)} className="bg-pink-600 text-white rounded-full w-16 h-16 shadow-xl" > 💬 </button> )}

{open && (
    <div className="w-80 h-[480px] bg-black text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      <div className="p-3 bg-pink-600 flex justify-between">
        <span>Private Chat</span>
        <button onClick={() => setOpen(false)}>×</button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl max-w-[80%] ${
              m.role === "user" ? "ml-auto bg-pink-700" : "bg-zinc-800"
            }`}
          >
            {m.text}
          </div>
        ))}

        {typing && (
          <div className="bg-zinc-800 p-2 rounded-xl w-16 animate-pulse">
            ...
          </div>
        )}
      </div>

      <div className="p-2 flex gap-2 border-t border-zinc-800">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something naughty…"
          className="flex-1 bg-zinc-900 p-2 rounded-lg outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-pink-600 px-4 rounded-lg"
        >
          Send
        </button>
      </div>

      {leadCaptured && (
        <a
          href="https://wa.me/923000000000"
          target="_blank"
          className="bg-green-600 text-center py-2"
        >
          Continue on WhatsApp 💚
        </a>
      )}
    </div>
  )}
</motion.div>

); }