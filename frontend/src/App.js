import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [vinyls, setVinyls] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/vinyls')
      .then(response => {
        setVinyls(response.data);
      })
      .catch(error => {
        console.error('Error fetching vinyl data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>My Vinyl Collection</h1>
      <ul>
        {vinyls.map(vinyl => (
          <li key={vinyl.release_id}>
            <strong>{vinyl.Artist}</strong> - {vinyl.Title} ({vinyl.Released})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;