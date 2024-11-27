import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Deeper from "./pages/Deeper";
import Hallway from "./pages/Hallway";
import Library from "./pages/Library";
import Basement from "./pages/Basement";
import Mirror from "./pages/Mirror";
import Terminal from "./pages/Terminal";
import Maintenance from "./pages/Maintenance";
import Elevator from "./pages/Elevator";
import Cafeteria from "./pages/Cafeteria";
import Office from "./pages/Office";
import Darkroom from "./pages/Darkroom";
import Reception from "./pages/Reception";
import Locker from "./pages/Locker";
import Classroom from "./pages/Classroom";
import Laboratory from "./pages/Laboratory";
import Courtyard from "./pages/Courtyard";
import Archive from "./pages/Archive";
import Security from "./pages/Security";
import Rooftop from "./pages/Rooftop";
import Finale from "./pages/Finale";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/deeper" element={<Deeper />} />
          <Route path="/hallway" element={<Hallway />} />
          <Route path="/library" element={<Library />} />
          <Route path="/basement" element={<Basement />} />
          <Route path="/mirror" element={<Mirror />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/elevator" element={<Elevator />} />
          <Route path="/cafeteria" element={<Cafeteria />} />
          <Route path="/office" element={<Office />} />
          <Route path="/darkroom" element={<Darkroom />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/locker" element={<Locker />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/courtyard" element={<Courtyard />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/security" element={<Security />} />
          <Route path="/rooftop" element={<Rooftop />} />
          <Route path="/finale" element={<Finale />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;