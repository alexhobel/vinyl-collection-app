import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [vinyls, setVinyls] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/api/vinyls')
      .then(response => {
        setVinyls(response.data);
      })
      .catch(error => {
        console.error('Error fetching vinyl data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="vinyl-header">My Vinyl Collection</h1>
      <ul className="vinyl-list">
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
