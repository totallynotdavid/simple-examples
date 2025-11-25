import { createRoot } from "react-dom/client";
import "./index.css";
import { PostcardCanvas } from "@/components/postcard/postcard-canvas";
import { ConfigPanel } from "@/components/editor/config-panel";
import { usePostcardEditor } from "@/hooks/use-postcard-editor";

function App() {
  const { config, content, updateStyle, updateLayout, resetConfig } =
    usePostcardEditor();

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex overflow-hidden">
      {/* the canvas */}
      <div className="flex-1 flex flex-col h-screen">
        <header className="px-6 py-4 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-sm font-medium text-neutral-400">
              Postcard.Builder by @totallynotdavid
            </span>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-8 bg-[#1c1c1c] overflow-auto">
          <div className="scale-75 lg:scale-100 transition-transform">
            <PostcardCanvas config={config} content={content} />
          </div>
        </main>
      </div>

      {/* the config sidebar */}
      <aside className="w-80 bg-neutral-900 border-l border-neutral-800 h-screen flex flex-col">
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <ConfigPanel
            config={config}
            onUpdateStyle={updateStyle}
            onUpdateLayout={updateLayout}
            onReset={resetConfig}
          />
        </div>
      </aside>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
