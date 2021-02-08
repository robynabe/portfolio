import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to={'/'}>Projects</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;