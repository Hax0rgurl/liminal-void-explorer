import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Security = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        Security monitoring room...
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-video bg-black rounded-lg animate-flicker"
          />
        ))}
      </div>
    </div>
  );
};

export default Security;