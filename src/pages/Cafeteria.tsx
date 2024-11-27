import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Cafeteria = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        The cafeteria is empty...
      </h1>
      
      <div className="relative w-full max-w-2xl aspect-video mb-8">
        <img
          src="/photo-1590074072786-a66914d668f1"
          alt="An empty cafeteria"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Cafeteria;