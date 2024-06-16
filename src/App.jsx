import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { Main } from './components/Main';
import './index.css';
import Video from './components/Video';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Video />
      <Footer />
    </div>
  );
};
export default App;
