const key= "AIzaSyBJkNk7wB6kKt0jeIrzTFOifnajR7SnblY"

const generateAIResponse = async (prompt: string, vet: boolean) => {
  try {
    let promptText = ""
    if (vet) {
        promptText = `You are a veterinary doctor. You are given a question and you need to answer it in a way that is easy to understand in a concise way. ${prompt}`
    }
    else {
        promptText = `Explain me like i am adairy farmer that is new to this field. ${prompt} Respond in a way that is easy to understand in a concise way`
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: promptText }]
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
