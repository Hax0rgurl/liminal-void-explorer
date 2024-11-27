import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [code, setCode] = useState("");
  const [audioEnabled, setAudioEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio("/ambient.mp3");
    audio.loop = true;

    if (audioEnabled) {
      audio.play().catch(() => {
        toast("Please enable audio for the full experience");
      });
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audioEnabled]);

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toLowerCase() === "between") {
      navigate("/deeper");
    } else {
      toast("That's not quite right...");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
      <h1 className="text-4xl md:text-6xl mb-8 liminal-text animate-float">
        You shouldn't be here.
      </h1>
      
      <div className="relative w-full max-w-md aspect-video mb-8">
        <img
          src="/photo-1492321936769-b49830bc1d1e"
          alt="A strange building"
          className="w-full h-full object-cover rounded-lg animate-flicker"
        />
        <div className="hidden-interactive absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-xs text-liminal-light">between</span>
        </div>
      </div>

      <form onSubmit={handleCodeSubmit} className="w-full max-w-xs">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter the code..."
          className="w-full p-2 bg-liminal-dark border border-liminal-muted text-liminal-light rounded"
        />
      </form>

      <button
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="mt-8 text-sm text-liminal-muted hover:text-liminal-light transition-colors"
      >
        {audioEnabled ? "Disable" : "Enable"} Sound
      </button>

      <div className="fixed bottom-4 right-4">
        <span className="text-xs text-liminal-muted animate-pulse">
          v1.0.0
        </span>
      </div>
    </div>
  );
};

export default Index;