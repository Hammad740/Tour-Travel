import { NavLink } from 'react-router-dom';
import logo from '../images/Home logo.jpg';
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>
      <ul>
        <NavLink
          to={'/travel'}
          style={{ textDecoration: 'none', color: 'lightseagreen' }}
        >
          <li>Travel</li>
        </NavLink>

        <NavLink
          to={'/pricing'}
          style={{ textDecoration: 'none', color: 'lightseagreen' }}
        >
          <li>Pricing</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
