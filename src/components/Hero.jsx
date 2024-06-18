import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h4>Tour & Travel</h4>
            <p>
              &quot;The most beautiful in the world is, of course, the world
              itself.&quot; – Wallace Stevens
            </p>

            <NavLink to={'/travel'}>
              <button className="hero-btn">Search</button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
