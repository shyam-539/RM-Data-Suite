import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const APIDataFetcher = () => {
  const [dataType, setDataType] = useState('character'); // Default is 'characters'
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/${dataType}`);
        setItems(response.data.results);
      } catch (err) {
        setError('Failed to fetch data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Rick and Morty Data Fetcher</h1>
      
      <div className="mb-3">
        <label htmlFor="dataTypeSelector" className="form-label">Select Data Type:</label>
        <select
          id="dataTypeSelector"
          className="form-select"
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
        >
          <option value="character">Characters</option>
          <option value="episode">Episodes</option>
          <option value="location">Locations</option>
        </select>
      </div>

      {loading && <div className="text-center my-3"><span className="spinner-border text-primary" /></div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.id}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default APIDataFetcher;
