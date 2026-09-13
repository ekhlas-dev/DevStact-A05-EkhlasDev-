import { useEffect, useState } from "react";
import { fetchTechnologies } from "./services/technologyService";
import type { Technology } from "./types/technology";
import TechnologySection from "./Components/technology/TechnologySection";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const data = await fetchTechnologies();

        setTechnologies(data);
      } catch (error) {
        setError("Failed to load technologies");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-slate-500">
          Loading technologies...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  }

  return (
    
    <main className="min-h-screen bg-slate-50">
      <Nav></Nav>
      <Banner></Banner>
      <TechnologySection technologies={technologies} />
      <Footer></Footer>
    </main>
  );
};

export default App;