const key= "AIzaSyBJkNk7wB6kKt0jeIrzTFOifnajR7SnblY"

const generateAIResponse = async (prompt: string) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `Explain me like i am 10 year old dairy farmer that is new to this field. ${prompt} Respond in a way that is easy to understand in a concise way` }]
          }]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};

export { generateAIResponse };
