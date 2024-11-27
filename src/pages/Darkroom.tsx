import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Darkroom = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-black">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text opacity-20">
        You can't see anything...
      </h1>
    </div>
  );
};

export default Darkroom;