import { useState } from 'react'
import { getBotReply } from '../data/getBotReply'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi! I am your Blood Assistant. Ask me about blood requests, donors, BMI, or pending status.',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    const botMessage = { sender: 'bot', text: getBotReply(input) }

    setMessages((prev) => [...prev, userMessage, botMessage])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="mb-3 flex h-[500px] w-[340px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-red-600 px-4 py-3 text-white">
            <div>
              <h3 className="text-sm font-bold">Blood Assistant</h3>
              <p className="text-xs text-red-100">Ask anything</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold hover:bg-white/25"
            >
              Close
            </button>
          </div>

          <div className="flex flex-wrap gap-2 border-b bg-slate-50 px-3 py-2">
            {[
              'How do I request blood?',
              'How do I become a donor?',
              'What does pending mean?',
              'Why is BMI required?',
            ].map((question) => (
              <button
                key={question}
                onClick={() => {
                  const userMessage = { sender: 'user', text: question }
                  const botMessage = { sender: 'bot', text: getBotReply(question) }
                  setMessages((prev) => [...prev, userMessage, botMessage])
                }}
                className="rounded-full bg-white px-3 py-1 text-xs text-slate-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              >
                {question}
              </button>
            ))}
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-white p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === 'user'
                    ? 'ml-auto bg-red-100 text-slate-800'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t bg-white p-3">
            <input
              className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-red-400"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />

            <button
              onClick={handleSend}
              className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-2xl transition hover:scale-105 hover:bg-red-700"
        aria-label="Open chatbot"
        title="Blood Assistant"
      >
        💬
      </button>
    </div>
  )
}

export default Chatbot