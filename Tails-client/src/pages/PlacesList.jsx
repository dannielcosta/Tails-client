// states and hooks 
import { Link } from "react-router-dom";
import React from "react";

// components

// pages

// data
import DATA from "../data/noTripAdvisor.json";

// images
import dogo from "../../public/images/dog-waiting.png";


function PlacesList() {

  const places = DATA.places;

  return <div>
    <div className="flex justify-between items-center">
    <h1 className="text-3xl font-bold text-left px-1 mt-4">Places</h1>
    <img src={dogo} alt="dogo-waiting" className="w-28 h-28 relative top-3.5 -right-5 bg-transparent"/>
    </div>
    <div className= "w-100 h-1 bg-amber-950 relative -top-5 "></div>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 mt-10">
        {places.map((place) => (
          <Link to={`/places/${place.id}`} key={place.id}>
            <div className="bg-white rounded-lg shadow-lg px-4 py-8">
            
            <div className="-mt-4 mb-4 ">
                <h2 className="text-xl font-bold bg-white text-gray-500">{place.name}</h2>

              </div>
              
              <div className="flex justify-between">
                <div className="flex justify-center">
                  <img src={place.logo} alt={place.name} className="w-full h-40 " />
                </div>
                
              </div>
              <div className="bg-white px-2 py-3 flex align-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 bg-transparent fill-yellow-500">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                 </svg> 
              <h3 className="text-gray-500 bg-transparent align-center">{place.location}</h3>




              </div>
              
              
            </div>
          </Link>
        ))} 
      </div>
    </div>
  </div>;
}

export default PlacesList;