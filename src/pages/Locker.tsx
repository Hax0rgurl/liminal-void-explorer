import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Locker = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        Rows of empty lockers...
      </h1>
      
      <div className="relative w-full max-w-2xl aspect-video mb-8">
        <img
          src="/photo-1562516155-e0c1ee44059b"
          alt="Empty lockers"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Locker;