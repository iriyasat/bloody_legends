import { chatbotFAQs } from './chatbotData'

export function getBotReply(message) {
  const text = message.toLowerCase().trim()

  for (const item of chatbotFAQs) {
    const matched = item.keywords.some((keyword) =>
      text.includes(keyword)
    )

    if (matched) return item.answer
  }

  if (text.includes('hello') || text.includes('hi')) {
    return 'Hello! Ask me about blood requests, donors, BMI, or donation status.'
  }

  if (text.includes('thanks')) {
    return 'You are welcome!Hey! If you have any more questions about blood donation, feel free to ask.'
  }

  return 'Sorrry, I did not understand. Try asking about blood requests, donors, BMI, or pending status.'
}