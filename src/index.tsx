import { createRoot } from "react-dom/client";
import "./index.css";
import { SpaPostcard } from "@/components/postcard";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-6">
      <SpaPostcard />
    </div>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
