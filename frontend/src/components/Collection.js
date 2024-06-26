import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Collection() {
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
    <div className="collection">
      <h2>My Vinyl Collection</h2>
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

export default Collection;