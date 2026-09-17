import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import HeroSection from "./component/HeroSection";
import TechCard from "./component/TechCard";
import Stack from "./component/Stack";
import type { Tech } from "./types";
import "./App.css";

function App() {
  const [technologie, setTechnologie] = useState<Tech[]>([]);
  const [stack, setStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // State to manage toast notification popup
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechData = async () => {
      try {
        const response = await fetch("data/Tech.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Tech[] = await response.json();
        setTechnologie(data);
      } catch (error) {
        console.error("Failed to load technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechData();
  }, []);

  const showToast = (mess: string) => {
    setToastMessage(mess);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAdd = (tech: Tech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      showToast(`⚠️ "${tech.name}" is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    showToast("Tech added!");
  };

  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col relative">
      <NavBar />
      <HeroSection />

      
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-white border border-gray-100 shadow-xl rounded-lg px-4 py-3 min-w-[220px] animate-bounce-in">
          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
            ✓
          </div>
          <span className="text-gray-700 text-sm font-medium flex-1">
            {toastMessage}
          </span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-gray-600 text-sm font-bold ml-2"
          >
            ✕
          </button>
          
        
          <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 rounded-b-lg w-full animate-shrink" />
        </div>
      )}

      <main className="w-full flex-2">
        <section className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-0">
          <div className="mb-9 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Pick your technologies per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-9 items-start">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {loading ? (
                <p className="text-gray-400 text-sm col-span-full">Loading technologies...</p>
              ) : technologie.length === 0 ? (
                <p className="text-red-400 text-sm col-span-full">
                  No technologies found. Check console or JSON file contents.
                </p>
              ) : (
                technologie.map((tech) => (
                  <TechCard
                    key={tech.id}
                    technology={tech}
                    onAdd={handleAdd}
                    isAdded={stack.some((item) => item.id === tech.id)}
                  />
                ))
              )}
            </div>

            <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start">
            <Stack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;