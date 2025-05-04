
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mic, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "system" | "assistant";
  content: string;
  timestamp: Date;
  isUrgent?: boolean;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      role: "assistant",
      content: "Hello! I'm your AI Care Advisor. How can I help you today? Please describe your symptoms or health concerns.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response with emergency detection
    setTimeout(() => {
      let responseContent = "";
      let isUrgent = false;
      
      // Simple keyword-based emergency detection (simplified for demo)
      const emergencyKeywords = ["chest pain", "can't breathe", "unconscious", "stroke", "heart attack"];
      const isEmergency = emergencyKeywords.some(keyword => 
        input.toLowerCase().includes(keyword)
      );
      
      if (isEmergency) {
        responseContent = "⚠️ MEDICAL ALERT: Your symptoms require immediate medical attention. Please call emergency services (911) or go to the nearest emergency room immediately. Do not wait for further AI assessment.";
        isUrgent = true;
      } else {
        // Simulated non-emergency response
        const responses = [
          "Based on your symptoms, you might be experiencing a common cold. Rest, hydration, and over-the-counter medications may help. Monitor your symptoms for 3-5 days.",
          "Your symptoms could be related to seasonal allergies. I recommend an antihistamine and avoiding potential allergens. If symptoms persist for more than a week, consider consulting a doctor.",
          "This could be a mild case of gastroenteritis. Stay hydrated and eat bland foods. If symptoms worsen or you develop a high fever, please consult a healthcare provider.",
          "Can you provide more details about your symptoms? This will help me give you a more accurate assessment. For example, when did they start and have you noticed any patterns?",
        ];
        responseContent = responses[Math.floor(Math.random() * responses.length)];
      }
      
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
        isUrgent,
      };
      
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-health-dark">AI Consultation</h2>
        <p className="text-gray-500 text-sm">Share your symptoms for an initial assessment</p>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex max-w-[80%] rounded-lg p-4",
              message.role === "user" 
                ? "ml-auto bg-health-primary text-white"
                : "mr-auto bg-gray-100 text-gray-800",
              message.isUrgent && "bg-health-alert text-white"
            )}
          >
            {message.isUrgent && (
              <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0" />
            )}
            <div>
              <p className="whitespace-pre-wrap">{message.content}</p>
              <span className="block text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex mr-auto bg-gray-100 rounded-lg p-4 text-gray-800 max-w-[80%]">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Chat Input */}
      <div className="p-3 border-t">
        <div className="flex space-x-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Describe your symptoms..."
            className="min-h-[60px] resize-none"
          />
          <div className="flex flex-col space-y-2">
            <Button 
              className="bg-health-primary hover:bg-health-primary/90"
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          This AI provides general information only and is not a substitute for professional medical advice.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
