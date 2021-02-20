import { NavLink } from 'react-router-dom';
import Date from '../utilities/date';

function Nav() {
  return (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink className="nav-link left" to={'/'}>
                  <span>Projects</span>
                  <svg width="30px" height="20px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link right" to={'/about'}>
                  <span>About</span>
                  <svg width="30px" height="20px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </NavLink>
            </li>
        </ul>
        <Date />
    </nav>
  );
}

export default Nav;