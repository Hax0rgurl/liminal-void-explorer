import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Basement = () => {
  const navigate = useNavigate();
  const [lightOn, setLightOn] = useState(false);

  const handleLightSwitch = () => {
    setLightOn(!lightOn);
    if (!lightOn) {
      toast("The shadows seem to move...");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        The basement holds many secrets...
      </h1>
      
      <div className={`relative w-full max-w-2xl aspect-video mb-8 transition-all duration-1000 ${lightOn ? 'brightness-50' : 'brightness-0'}`}>
        <img
          src="/photo-1555854877-bab0e564b8d5"
          alt="A dark basement"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <button
        onClick={handleLightSwitch}
        className="px-4 py-2 bg-liminal-light/10 rounded-lg hover:bg-liminal-light/20 transition-colors"
      >
        {lightOn ? "Turn Off Light" : "Turn On Light"}
      </button>
    </div>
  );
};

export default Basement;