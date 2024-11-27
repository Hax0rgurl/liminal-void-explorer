import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Maintenance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        Maintenance Access
      </h1>
      
      <div className="grid grid-cols-3 gap-4 max-w-md w-full">
        {Array.from({ length: 9 }).map((_, i) => (
          <button
            key={i}
            onClick={() => toast("System malfunction...")}
            className="aspect-square bg-liminal-light/10 rounded-lg hover:bg-liminal-light/20 transition-colors"
          />
        ))}
      </div>
    </div>
  );
};

export default Maintenance;