import React, { useState, useEffect }  from 'react';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hello, setHello] = useState("");

  useEffect(() => {
    const API_DNS = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'http://<ALB_DNS>'
    fetch(API_DNS)
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setHello(data.hello);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
  }, [])
if (error) {
      return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
      return <div>Loading... or not loading?</div>;
  } else {
      return (
          <p>{hello}</p>
      );
  }
}

export default App;
