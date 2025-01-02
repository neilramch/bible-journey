import React, { useState } from 'react';
import Map from './Map';
import './Home.css';

function Home() {
  const [showMap, setShowMap] = useState(false);

  const handleViewMap = () => {
    setShowMap(true); // Show the map when the button is clicked
    document.getElementById('map').scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the map
  };

  return (
    <div>
   
      <section className="hero">
        <h2>Discover the Stories Behind the Locations</h2>
        <p>Explore the journeys of key biblical figures through an interactive map, enriched with theological insights and historical context.</p>
        <button className="cta-button" onClick={() => setShowMap(!showMap)}>
  {showMap ? "Hide the Map" : "View the Interactive Map"}
</button>

      </section>

      {showMap && <Map />}


      <footer>
        <p>&copy; 2025 Biblical Journeys. All rights reserved. | <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

export default Home;
