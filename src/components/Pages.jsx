import { Route, Routes } from 'react-router-dom';
import Travel from './Travel';
import Pricing from './Pricing';
import Home from './Home';

const Pages = ({ price, place, setPrice, setPlace }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/travel"
        element={
          <Travel
            price={price}
            setPrice={setPrice}
            place={place}
            setPlace={setPlace}
          />
        }
      ></Route>
      <Route
        path="/pricing"
        element={<Pricing price={price} places={place} />}
      ></Route>
    </Routes>
  );
};
export default Pages;
