import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Library = () => {
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const navigate = useNavigate();

  const books = [
    { id: "time", title: "Time's Arrow" },
    { id: "echo", title: "Echo Chamber" },
    { id: "void", title: "Void Spaces" },
    { id: "mirror", title: "Mirror's Edge" },
  ];

  const handleBookClick = (bookId: string) => {
    const newSelection = [...selectedBooks, bookId];
    setSelectedBooks(newSelection);

    if (newSelection.length === 3) {
      if (newSelection.join("-") === "time-void-mirror") {
        toast("A mirror on the wall begins to shimmer...");
        setTimeout(() => navigate("/mirror"), 2000);
      } else {
        toast("The books fall back into place...");
        setSelectedBooks([]);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 animate-fade-in bg-liminal-dark">
      <h1 className="text-2xl md:text-4xl mb-8 liminal-text">
        The Library holds many secrets...
      </h1>
      
      <div className="relative w-full max-w-2xl aspect-video mb-8">
        <img
          src="/photo-1473177104440-ffee2f376098"
          alt="An empty library"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4 mt-8">
          {books.map((book) => (
            <button
              key={book.id}
              onClick={() => handleBookClick(book.id)}
              disabled={selectedBooks.includes(book.id)}
              className="p-4 border border-liminal-muted rounded-lg hover:bg-liminal-light/10 transition-colors disabled:opacity-50"
            >
              {book.title}
            </button>
          ))}
        </div>
      </div>

      <p className="text-liminal-muted text-sm max-w-md text-center">
        "First comes the beginning, then the emptiness, finally reflection..."
      </p>
    </div>
  );
};

export default Library;