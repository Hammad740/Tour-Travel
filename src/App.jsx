import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import { Main } from './components/Main';
import './index.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Home />
    </div>
  );
};
export default App;
