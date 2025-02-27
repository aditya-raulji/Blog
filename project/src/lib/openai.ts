import OpenAI from 'openai';

// Use a placeholder API key if environment variable is not available
const apiKey = import.meta.env.VITE_OPENAI_API_KEY || 'placeholder-key';

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true
});

export async function getChatCompletion(message: string) {
  try {
    // Check if we're using the placeholder key
    if (apiKey === 'placeholder-key') {
      return "I'm currently in demo mode. Please add your OpenAI API key to use my full capabilities. You can get an API key from https://platform.openai.com/api-keys";
    }
    
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are CareBot, a helpful and knowledgeable healthcare assistant. You provide accurate, professional information about healthcare topics while maintaining a friendly and approachable tone. Always clarify that users should consult healthcare professionals for medical advice."
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0]?.message?.content || "I apologize, but I couldn't process that request. Please try again.";
  } catch (error) {
    console.error('Error getting chat completion:', error);
    return "I apologize, but I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
}