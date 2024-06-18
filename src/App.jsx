import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pages from './components/Pages';
import Loader from './components/Loader';
import './index.css'; // Ensure this import is correctly pointing to your CSS file

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Pages
            price={price}
            setPrice={setPrice}
            place={place}
            setPlace={setPlace}
          />
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
