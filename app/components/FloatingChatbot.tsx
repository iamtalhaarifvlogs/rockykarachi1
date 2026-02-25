"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message { role: "user" | "bot"; text: string; }

const intents = [ { keywords: ["price", "rate"], response: "Tell me what kind of evening you want… I’ll guide you softly." }, { keywords: ["location"], response: "I travel to premium locations. Where should I come to you?" }, { keywords: ["booking"], response: "I’d love to see you… tell me when you want me." }, { keywords: ["hi", "hello"], response: "Hey… I’ve been waiting for you." }, { keywords: ["kesi ho Tum?", "kesi hain ap?", "kesi hai tu?",], response: "main thek hu, aur aap?" }, { keywords: ["Kahan se ho?", "aap ki location Kya hai?", "Kahan ho?",], response: "WhatsApp pe message Karen sab bta dungi aap ko 😉" }, { keywords: ["boht lonely hun main", "sex chahie", "sex Karna hai",], response: "Aww to baby WhatsApp pe message kro na mujhe" }, ];

const getBotResponse = (text: string) => {
  const lower = text.toLowerCase().replace(/[?!.]/g, "").trim(); // remove punctuation
  const match = intents.find((i) =>
    i.keywords.some((k) =>
      lower.includes(k.toLowerCase().replace(/[?!.]/g, "").trim())
    )
  );
  return match
    ? match.response
    : "Mmm… tell me more. I want to understand you better.";
};
export default function FloatingChatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState<Message[]>([]); const [input, setInput] = useState(""); const [typing, setTyping] = useState(false); const [lead, setLead] = useState(false); const [inactivePing, setInactivePing] = useState(false); const [position, setPosition] = useState({ x: 0, y: 0 }); const [dragging, setDragging] = useState(false);

const bottomRef = useRef<HTMLDivElement>(null); const inactivityTimer = useRef<any>(null);

useEffect(() => { if (open && messages.length === 0) { setTimeout(() => { setMessages([ { role: "bot", text: "Hey… don’t be shy. Tell me what you’re craving tonight." }, ]); }, 500); } }, [open]);

useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

const resetInactivity = () => { clearTimeout(inactivityTimer.current); inactivityTimer.current = setTimeout(() => { if (!inactivePing) { setInactivePing(true); setMessages((m) => [ ...m, { role: "bot", text: "Did I make you blush… or are you thinking about me? 💕" }, ]); } }, 15000); };

const sendMessage = () => { if (!input.trim()) return;

resetInactivity();

const userMsg: Message = { role: "user", text: input };
setMessages((m) => [...m, userMsg]);
setInput("");

setTyping(true);

setTimeout(() => {
const reply = getBotResponse(userMsg.text);
setTyping(false);
setMessages((m) => [...m, { role: "bot", text: reply }]);

if (!lead && messages.length >= 3) {
setLead(true);
setTimeout(() => {
setMessages((m) => [
...m,
{
role: "bot",
text: "Let’s talk somewhere more private… message me on WhatsApp and I’ll be all yours 💋",
},
]);
}, 1800);
}
}, 1300);

if (navigator.vibrate) navigator.vibrate(20);

};

const whatsappLink = () => {
  const lastUser = messages.filter((m) => m.role === "user").pop();
  const text = encodeURIComponent(lastUser?.text || "Hey");

  window.open(`https://wa.me/92370 8540579?text=${text}`, "_blank");
};

return ( <> <motion.button drag dragMomentum={false} onDragStart={() => setDragging(true)} onDragEnd={() => setDragging(false)} onDrag={(_e: any, info: { point: { x: number; y: number; }; }) => setPosition({ x: info.point.x - 80, y: info.point.y - 80 })} animate={{ x: position.x, y: position.y }} onClick={() => !dragging && setOpen(true)} className="fixed bottom-6 left-6 z-50 bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg" > Talk to me </motion.button>

<AnimatePresence>  
    {open && (  
      <motion.div  
        initial={{ opacity: 0, y: 40 }}  
        animate={{ opacity: 1, y: 0 }}  
        exit={{ opacity: 0, y: 40 }}  
        className="fixed bottom-6 left-6 w-[340px] h-[520px] bg-black border border-pink-500 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden "  
      >  
        <div className="flex justify-between items-center px-4 py-3 border-b border-pink-500">  
          <div className="flex items-center gap-2 text-white">  
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> online now  
          </div>  
          <button onClick={() => setOpen(false)} className="text-white">✕</button>  
        </div>  <div className="flex-1 overflow-y-auto p-3 space-y-3 chatcontainer">  
      {messages.map((m, i) => (  
        <motion.div  
          key={i}  
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}  
          className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${m.role === "user" ? "ml-auto bg-pink-600 text-white" : "bg-gray-800 text-white"}`}  
        >  
          {m.text}  
        </motion.div>  
      ))}  

      {typing && (  
        <div className="flex gap-1 px-2">  
          {[0, 0.2, 0.4].map((d, i) => (  
            <motion.span  
              key={i}  
              animate={{ opacity: [0.2, 1, 0.2] }}  
              transition={{ repeat: Infinity, duration: 1, delay: d }}  
              className="w-2 h-2 bg-gray-400 rounded-full"  
            />  
          ))}  
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
      <button onClick={sendMessage} className="bg-pink-600 text-white px-4 rounded-lg">Send</button>  
    </div>  
  </motion.div>  
)}

  </AnimatePresence>  
</>  ); }