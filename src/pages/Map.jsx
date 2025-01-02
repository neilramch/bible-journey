import React from 'react';
import './Map.css';

function Map() {
  return (
    <div id="map" style={{ marginTop: '20px', textAlign: 'center' }}>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1D0nvAn2UgkjLw47n7f36252qF9ebRlA&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
    </div>
  );
}

export default Map;
