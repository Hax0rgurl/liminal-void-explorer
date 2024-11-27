import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Mirror = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === "reflection") {
      toast("The mirror ripples like water...");
      setTimeout(() => navigate("/terminal"), 2000);
    } else {
      toast("Your reflection distorts slightly...");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        Your reflection seems... different
      </h1>
      
      <div className="relative w-full max-w-md aspect-square mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-liminal-light/20 to-liminal-light/5 rounded-lg" />
        <form onSubmit={handleSubmit} className="relative z-10 mt-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Speak to your reflection..."
            className="w-full p-2 bg-liminal-dark border border-liminal-muted text-liminal-light rounded"
          />
        </form>
      </div>

      <p className="text-liminal-muted text-sm max-w-md text-center">
        The word you seek is hidden in plain sight...
      </p>

      <div className="hidden-interactive absolute bottom-4 right-4 transform scale-x-[-1]">
        reflection
      </div>
    </div>
  );
};

export default Mirror;