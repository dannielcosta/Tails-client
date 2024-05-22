// states and hooks
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import "./index.css";

// pages
import HomePage from "./pages/HomePage";
import PlacesList from "./pages/PlacesList";

function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/places" element={<PlacesList />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
