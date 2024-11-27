import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Classroom = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        An empty classroom...
      </h1>
      
      <div className="relative w-full max-w-2xl aspect-video mb-8">
        <img
          src="/photo-1580582932707-520aed937b7b"
          alt="Empty classroom"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Classroom;