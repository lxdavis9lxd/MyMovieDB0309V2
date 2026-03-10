import { Routes, Route, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Home from "@/pages/nonauth/Home.jsx";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    
    </Routes>
  );
}
