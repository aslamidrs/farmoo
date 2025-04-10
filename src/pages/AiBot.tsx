import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { generateAIResponse } from '../apiCalls/ai';
import { marked } from 'marked';
import { useAppContext } from '../context/AppContext';
const AiBot = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const input = searchParams.get('input') || '';
  const vet = searchParams.get('vet') || '';
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const {aiData, setAiData, vetAiData, setVetAiData} = useAppContext();

  const handleAiResponse = async (message: string) => {
    try {
      let messages = aiData || [];
        if(messages.length === 10) {
            return;
        }
        messages = [...messages, message];
        setIsLoading(true);
        const response = await generateAIResponse(message, false);
        messages = [...messages, response.candidates[0].content.parts[0].text];
      setAiData(messages);
        setIsLoading(false);
    } catch (error) {
        console.error('Error generating AI response:', error);
    }
};
  const handleVetAiResponse = async (message: string) => {
    try {
      let messages = vetAiData || [];
        if(messages.length === 10) {
            return;
        }
        messages = [...messages, message];
        setIsLoading(true);
        const response = await generateAIResponse(message, true);
        messages = [...messages, response.candidates[0].content.parts[0].text];
        setVetAiData(messages);
        setIsLoading(false);
    } catch (error) {
        console.error('Error generating AI response:', error);
    }
};

  useEffect(() => {
    if(input) {
        if(vet === 'true') {
            handleVetAiResponse(input);
        }
        else {
            handleAiResponse(input);
        }
    }
  }, [input, vet]);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full bg-white rounded-lg mb-4 p-4">
        <button 
          onClick={() => window.history.back()}
          className="mt-12 pt-4 bg-none text-primary rounded-lg text-sm hover:bg-primary/90 transition-colors"
        >
          ← Go Back
        </button>

        <div className="flex flex-col space-y-4 mt-4 pb-48">
          {/* User Message */}
          {aiData.map((msg: string, index: number) => {
            if(index % 2 === 0) {
                return (
                    <div key={index} className="flex justify-end">
                        <div className="bg-primary text-white rounded-lg p-3 max-w-[80%]">
                            <p>{msg}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={index} className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                            <p dangerouslySetInnerHTML={{ __html: marked.parse(msg) }}></p>
                        </div>
                    </div>
                )
            }
          })}
          {/* AI Response */}
          {isLoading && (
            // Skeleton Loading
            <div className="flex items-start space-x-2">
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="fixed bottom-0 left-0 right-0 p-4 pb-28 bg-white border-t">
          <form onSubmit={(e) => {
            e.preventDefault();
            if (message.trim()) {
                vet ? handleVetAiResponse(message) : handleAiResponse(message);
                setMessage('');
              }
          }} className="flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AiBot