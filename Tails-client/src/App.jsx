import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

import HomePage from "./pages/HomePage"; // alterar a homepage para ficar firstpage (pagina de rececao do user)
import PlacesList from "./pages/PlacesList"; // esta será a mainpage / homepage
import FavPlaces from "./pages/FavPlaces";
import Profile from "./pages/ProfilePage";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <main className="w-[357px] h-[812px] bg-white rounded-lg shadow-lg flex flex-col relative">
        <div className="flex-1 p-6 overflow-y-auto">
          {" "}
          {/* Added flex-1 and overflow-y-auto */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/places" element={<PlacesList />} />
            <Route path="/places/saved" element={<FavPlaces />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Navbar />
      </main>
    </div>
  );
}

export default App;

/* http://localhost:5175/places/saved */
