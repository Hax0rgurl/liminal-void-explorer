import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Terminal = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === "maintenance") {
      toast("Access granted...");
      setTimeout(() => navigate("/maintenance"), 2000);
    } else {
      toast("Invalid command");
    }
    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <div className="w-full max-w-2xl bg-black/50 p-4 rounded-lg font-mono">
        <div className="mb-4 text-green-500">Terminal v1.0.1</div>
        <form onSubmit={handleCommand}>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">{">"}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-500 w-full"
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Terminal;