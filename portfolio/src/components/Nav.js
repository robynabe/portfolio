import { NavLink } from 'react-router-dom';

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
    </nav>
  );
}

export default Nav;