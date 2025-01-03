import React, { useState } from 'react';
import Map from './Map';
import './Home.css';
import Paper from './Paper';

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

      <div className='description'>
      <p>This project is aimed at creating a <span>geographical representation</span> of events based on the five books of the Torah: Genesis, Exodus, Leviticus, Numbers, & Deuteronomy</p>
      <p>The study further attempts to use modern evidence using <span>archaeological and historical sources</span> to analyze contextual accuracies</p>
      <p>To view the sources used to perform this research study, <span>visit the resources tab.</span></p>
      </div>

      <div className='paper'>
        <Paper />
      </div>

      <div className='tree'>
         <img src='/adam-tree.svg'/>
        </div>

    </div>
  );
}

export default Home;
