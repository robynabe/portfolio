import { NavLink } from 'react-router-dom';
import Date from '../utilities/date';

function Nav() {
  return (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink className="nav-link" to={'/'}>Projects</NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to={'/about'}>About</NavLink>
            </li>
        </ul>
        <Date />
    </nav>
  );
}

export default Nav;