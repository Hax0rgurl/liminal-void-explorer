import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Deeper = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        You found it. But you're still not supposed to be here.
      </h1>
      
      <div className="relative w-full max-w-md aspect-video mb-8">
        <img
          src="/photo-1465146344425-f00d5f5c8f07"
          alt="An empty space"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <p className="text-liminal-muted text-sm max-w-md text-center">
        This page will self-destruct in 10 seconds. The truth lies deeper.
        Remember: 48°52'N 2°20'E
      </p>
    </div>
  );
};

export default Deeper;