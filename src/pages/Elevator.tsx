import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Elevator = () => {
  const navigate = useNavigate();
  const [floor, setFloor] = useState(1);

  const handleFloorChange = (newFloor: number) => {
    setFloor(newFloor);
    toast(`Going to floor ${newFloor}...`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <div className="bg-liminal-light/10 p-8 rounded-lg">
        <div className="text-4xl mb-8 font-mono">{floor}</div>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, "B", "R"].map((f) => (
            <button
              key={f}
              onClick={() => handleFloorChange(f as number)}
              className="px-6 py-4 bg-liminal-light/10 rounded-lg hover:bg-liminal-light/20 transition-colors"
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Elevator;