import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Hallway = () => {
  const [lightSequence, setLightSequence] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleLightClick = (lightId: number) => {
    const newSequence = [...lightSequence, lightId];
    setLightSequence(newSequence);

    if (newSequence.length === 4) {
      if (newSequence.join("") === "1342") {
        toast("The library door creaks open...");
        setTimeout(() => navigate("/library"), 2000);
      } else {
        toast("The lights flicker ominously...");
        setLightSequence([]);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        An endless hallway stretches before you...
      </h1>
      
      <div className="relative w-full max-w-2xl aspect-video mb-8">
        <img
          src="/photo-1527576539890-dfa815648363"
          alt="A long, empty hallway"
          className="w-full h-full object-cover rounded-lg"
        />
        {[1, 2, 3, 4].map((lightId) => (
          <button
            key={lightId}
            onClick={() => handleLightClick(lightId)}
            className="absolute w-4 h-4 bg-yellow-100 rounded-full opacity-20 hover:opacity-100 transition-opacity"
            style={{
              top: "20%",
              left: `${lightId * 20}%`,
            }}
          />
        ))}
      </div>

      <p className="text-liminal-muted text-sm max-w-md text-center">
        The flickering lights seem to follow a pattern...
      </p>
    </div>
  );
};

export default Hallway;